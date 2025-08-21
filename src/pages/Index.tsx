import React from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index: React.FC = () => {
  return (
    <Layout>
      <div className="relative bg-blue-600 h-[600px] flex items-center justify-center text-white">
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
            Zero Traffic Fatalities in Evansville.
          </h1>
          <p className="text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md">
            SAFER is dedicated to adopting Vision Zero principles to make our streets safer for everyone.
          </p>
          <div className="space-x-4">
            <Button asChild className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-8 text-xl rounded-full">
              <Link to="/donate">Donate Now</Link>
            </Button>
            <Button asChild variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-3 px-8 text-xl rounded-full">
              <Link to="/about">Learn More <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-blue-700 dark:text-blue-400">Our Mission: Vision Zero Evansville</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We envision an Evansville where no one loses their life or suffers serious injury on our roads. By adopting the Vision Zero framework, we aim to eliminate traffic fatalities within 20 years through a comprehensive approach focusing on safe speeds, safe streets, safe vehicles, and safe people.
          </p>
          <Button asChild variant="link" className="mt-6 text-blue-600 hover:underline text-lg">
            <Link to="/progress">See Our Progress &rarr;</Link>
          </Button>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold mb-6 text-blue-700 dark:text-blue-400">Our Story: From Heartbreak to Hope</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              SAFER was founded after a personal tragedy highlighted the urgent need for improved traffic safety in Evansville. What began as a private sorrow transformed into a public mission to prevent similar incidents for other families. We believe that every life is precious and every traffic death is preventable.
            </p>
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">
              <Link to="/about">Read Our Full Story</Link>
            </Button>
          </div>
          <div className="flex justify-center w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-lg flex items-center justify-center text-gray-500 dark:text-gray-400 text-lg">
            [Image Placeholder]
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-blue-700 dark:text-blue-400">Get Involved</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Join us in making Evansville's streets safer. Whether through volunteering, attending an event, or making a donation, your participation is vital.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full">
              <Link to="/events">View Events</Link>
            </Button>
            <Button asChild variant="outline" className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-3 px-8 rounded-full">
              <Link to="/contact">Volunteer</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;