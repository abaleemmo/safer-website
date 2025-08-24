import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { useData } from "@/context/DataContext";
import { supabase } from "@/integrations/supabase/client"; // Correctly import the supabase client instance
import { Label } from "@/components/ui/label"; // Import Label for better form semantics

const newsletterSchema = z.object({
  name: z.string().min(1, "Name is required"), // Name is now mandatory
  email: z.string().email("Invalid email address").min(1, "Email is required"), // Email is now mandatory
  phone: z.string().optional(), // Phone is optional
});

type NewsletterFormInputs = z.infer<typeof newsletterSchema>;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { addContact } = useData();

  const form = useForm<NewsletterFormInputs>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "", // Initialize phone
    },
  });

  const onNewsletterSubmit = async (data: NewsletterFormInputs) => {
    try {
      const { data: edgeFunctionResponse, error: edgeFunctionError } = await supabase.functions.invoke('subscribe-newsletter', {
        body: JSON.stringify(data),
      });

      if (edgeFunctionError) {
        throw new Error(edgeFunctionError.message);
      }

      // Add to local DataContext contacts list using the data returned from the Edge Function
      if (edgeFunctionResponse && edgeFunctionResponse.subscription) {
        addContact(edgeFunctionResponse.subscription);
      } else {
        // Fallback if edge function doesn't return subscription data, though it should
        addContact({ name: data.name, email: data.email, phone: data.phone, source: "newsletter" });
      }

      toast.success("Successfully subscribed to the newsletter!");
      form.reset();
    } catch (error: any) {
      console.error("Newsletter subscription error:", error);
      toast.error(`Failed to subscribe: ${error.message || "Please try again."}`);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm dark:bg-gray-900">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white">
            SAFER.org
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/progress">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Our Progress
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/education">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Education
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/events">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Events & Fundraisers
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/blog">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/contact">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Link to="/donate">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Donate
            </Button>
          </Link>
        </div>
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-gray-800 text-white py-6 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-4">Stay Informed</h3>
            <p className="max-w-xl mx-auto text-lg mb-4">
              Subscribe to our newsletter to receive the latest news, event invitations, and progress reports directly in your inbox.
            </p>
            <form onSubmit={form.handleSubmit(onNewsletterSubmit)} className="flex flex-col items-center space-y-4 max-w-md mx-auto">
              <div className="w-full">
                <Label htmlFor="newsletter-name" className="sr-only">Your Name</Label>
                <Input
                  id="newsletter-name"
                  type="text"
                  placeholder="Your Name"
                  {...form.register("name")}
                  className="w-full p-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
                />
                {form.formState.errors.name && (
                  <p className="text-red-400 text-sm mt-1 text-left">{form.formState.errors.name.message}</p>
                )}
              </div>
              <div className="w-full">
                <Label htmlFor="newsletter-email" className="sr-only">Your Email</Label>
                <Input
                  id="newsletter-email"
                  type="email"
                  placeholder="Enter your email"
                  {...form.register("email")}
                  className="w-full p-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
                />
                {form.formState.errors.email && (
                  <p className="text-red-400 text-sm mt-1 text-left">{form.formState.errors.email.message}</p>
                )}
              </div>
              <div className="w-full">
                <Label htmlFor="newsletter-phone" className="sr-only">Your Phone (Optional)</Label>
                <Input
                  id="newsletter-phone"
                  type="tel"
                  placeholder="Your Phone (Optional)"
                  {...form.register("phone")}
                  className="w-full p-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
                />
                {form.formState.errors.phone && (
                  <p className="text-red-400 text-sm mt-1 text-left">{form.formState.errors.phone.message}</p>
                )}
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md">
                Subscribe
              </Button>
            </form>
          </div>
          <p>&copy; {new Date().getFullYear()} SAFER.org. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;