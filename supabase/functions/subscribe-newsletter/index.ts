import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@1.1.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, name } = await req.json();

    if (!email) {
      return new Response(JSON.stringify({ error: 'Email is required' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      });
    }

    const resend = new Resend(Deno.env.get('RESEND_API_KEY'));

    // Example: Add contact to an audience or send a welcome email
    // For simplicity, we'll just send a confirmation email here.
    // In a real scenario, you might add them to a Resend audience.
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

    return new Response(JSON.stringify({ message: 'Subscription successful!' }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});