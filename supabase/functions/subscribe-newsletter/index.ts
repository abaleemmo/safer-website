/// <reference lib="deno.ns" />
/// <reference lib="deno.window" />

import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@1.1.0";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.45.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req: Request) => { // Added type for req
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, name, phone } = await req.json();

    if (!email || !name) {
      return new Response(JSON.stringify({ error: 'Name and email are required' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      });
    }

    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    );

    // Insert into Supabase
    const { data: newSubscription, error: dbError } = await supabaseClient
      .from('newsletter_subscriptions')
      .insert({ name, email, phone, source: 'newsletter' })
      .select()
      .single();

    if (dbError) {
      console.error('Supabase insert error:', dbError);
      return new Response(JSON.stringify({ error: dbError.message }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      });
    }

    const resend = new Resend(Deno.env.get('RESEND_API_KEY'));

    await resend.emails.send({
      from: 'onboarding@resend.dev', // Replace with your verified Resend email
      to: email,
      subject: 'Welcome to SAFER.org Newsletter!',
      html: `
        <h1>Hello ${name || 'there'}!</h1>
        <p>Thank you for subscribing to the SAFER.org newsletter. We'll keep you updated on our progress towards Vision Zero in Evansville.</p>
        <p>Best regards,<br/>The SAFER.org Team</p>
      `,
    });

    return new Response(JSON.stringify({ message: 'Subscription successful!', subscription: newSubscription }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error: unknown) { // Explicitly type error as unknown
    console.error('Error subscribing to newsletter:', error);
    return new Response(JSON.stringify({ error: (error as Error).message }), { // Assert error as Error
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});