import React from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const EventsFundraisers: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-extrabold text-center mb-12 text-gray-900 dark:text-white">Events & Fundraisers</h1>

        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-8 text-blue-700 dark:text-blue-400">Upcoming Events</h2>
          <div className="max-w-4xl mx-auto bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Check our Google Calendar below for all upcoming events and fundraisers!
            </p>
            {/* Placeholder for Google Calendar Embed */}
            <div className="w-full h-96 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 text-xl rounded-md">
              [Google Calendar Embed Will Go Here]
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              (Please provide the Google Calendar embed code to replace this placeholder.)
            </p>
          </div>
        </section>

        <section className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-center mb-8 text-blue-700 dark:text-blue-400">Support Our Mission</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300 mb-8">
            Your support is crucial in helping us achieve Vision Zero in Evansville. Every donation, big or small, contributes directly to safer streets and a healthier community.
          </p>
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 text-xl rounded-full">
            <Link to="/donate" className="flex items-center gap-2">
              <DollarSign className="h-6 w-6" /> Donate Now
            </Link>
          </Button>
        </section>

        <section>
          <h2 className="text-4xl font-bold text-center mb-8 text-blue-700 dark:text-blue-400">Past Events & Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Road Safety Workshop (Spring 2024)</CardTitle>
                <CardDescription>Educating the community on safe driving practices.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  We hosted a successful workshop attended by over 100 community members, focusing on pedestrian and cyclist safety.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">"Light Up the Night" Campaign (Winter 2024)</CardTitle>
                <CardDescription>Distributing reflective gear to pedestrians and cyclists.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  Over 500 reflective vests and lights were distributed, significantly improving visibility during evening hours.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default EventsFundraisers;