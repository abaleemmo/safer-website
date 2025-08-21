import React from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const EventsFundraisers: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-extrabold text-center mb-12 text-gray-900 dark:text-white">Events & Fundraisers</h1>

        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-8 text-blue-700 dark:text-blue-400">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Community Safety Walk</CardTitle>
                <CardDescription className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <CalendarDays className="h-5 w-5" /> October 26, 2024 | 10:00 AM - 12:00 PM
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Join us for a walk through the Lloyd intersection area to identify safety concerns and raise awareness.
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700">Learn More & Register</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Vision Zero Town Hall</CardTitle>
                <CardDescription className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <CalendarDays className="h-5 w-5" /> November 15, 2024 | 6:00 PM - 8:00 PM
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  An open forum to discuss traffic safety issues and solutions with local leaders.
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700">RSVP Now</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Annual Fundraiser Gala</CardTitle>
                <CardDescription className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <CalendarDays className="h-5 w-5" /> December 7, 2024 | 7:00 PM
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Our biggest event of the year! Support SafeRevv's mission with an evening of community and giving.
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700">Get Tickets</Button>
              </CardContent>
            </Card>
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
                <CardTitle className="text-2xl">"Light Up the Night" Campaign (Winter 2023)</CardTitle>
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