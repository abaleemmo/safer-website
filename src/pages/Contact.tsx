import React from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-extrabold text-center mb-12 text-gray-900 dark:text-white">Contact Us</h1>

        <section className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h2 className="text-4xl font-bold mb-8 text-blue-700 dark:text-blue-400">Get in Touch</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              We'd love to hear from you! Whether you have questions, suggestions, or want to get involved, please reach out. Your input is vital to making Evansville's streets safer.
            </p>
            <form className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-lg">Name</Label>
                <Input id="name" type="text" placeholder="Your Name" className="mt-2 p-3 text-lg" />
              </div>
              <div>
                <Label htmlFor="email" className="text-lg">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" className="mt-2 p-3 text-lg" />
              </div>
              <div>
                <Label htmlFor="subject" className="text-lg">Subject</Label>
                <Input id="subject" type="text" placeholder="Subject of your message" className="mt-2 p-3 text-lg" />
              </div>
              <div>
                <Label htmlFor="message" className="text-lg">Message</Label>
                <Textarea id="message" placeholder="Your message here..." rows={5} className="mt-2 p-3 text-lg" />
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 text-xl">
                Send Message
              </Button>
            </form>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-8 text-blue-700 dark:text-blue-400">Our Information</h2>
            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-blue-600 mr-4" />
                <span>info@safer.org</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-blue-600 mr-4" />
                <span>(812) 555-1234</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                <span>
                  123 Safe Street, Suite 100 <br />
                  Evansville, IN 47708
                </span>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-3xl font-bold mb-6 text-blue-700 dark:text-blue-400">Follow Us</h3>
              <div className="flex space-x-6">
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                  Facebook
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                  Twitter
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;