import React from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { toast } from "sonner"; // Import toast for notifications

// Placeholder data - this will eventually come from a global state or Supabase
const upcomingEvents = [
  {
    id: "1",
    title: "Community Safety Walk",
    date: new Date(2024, 9, 26), // October 26, 2024
    description: "Join us for a walk through the Lloyd intersection area to identify safety concerns and raise awareness for Vision Zero.",
  },
  {
    id: "2",
    title: "Vision Zero Town Hall",
    date: new Date(2024, 10, 15), // November 15, 2024
    description: "An open forum to discuss traffic safety issues and solutions with local leaders and the community.",
  },
  {
    id: "3",
    title: "Annual Fundraiser Gala",
    date: new Date(2024, 11, 7), // December 7, 2024
    description: "Our biggest event of the year! Support SAFER's mission with an evening of community and giving to help us reach our fundraising goals.",
  },
];

const pastEvents = [
  {
    id: "p1",
    title: "Road Safety Workshop (Spring 2024)",
    date: new Date(2024, 4, 10), // May 10, 2024
    description: "We hosted a successful workshop attended by over 100 community members, focusing on pedestrian and cyclist safety.",
  },
  {
    id: "p2",
    title: "\"Light Up the Night\" Campaign (Winter 2024)",
    date: new Date(2024, 1, 20), // February 20, 2024
    description: "Over 500 reflective vests and lights were distributed, significantly improving visibility during evening hours.",
  },
];

const EventsFundraisers: React.FC = () => {
  const handleRegister = (eventName: string) => {
    toast.success(`Successfully registered for ${eventName}!`);
    // In a real application, this would send data to a backend
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-extrabold text-center mb-12 text-gray-900 dark:text-white">Events & Fundraisers</h1>

        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-8 text-blue-700 dark:text-blue-400">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {upcomingEvents.length === 0 ? (
              <p className="text-gray-500 col-span-full text-center">No upcoming events scheduled at the moment. Please check back soon!</p>
            ) : (
              upcomingEvents.map((event) => (
                <Card key={event.id}>
                  <CardHeader>
                    <CardTitle className="text-2xl">{event.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <CalendarDays className="h-5 w-5" /> {format(event.date, "PPP")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {event.description}
                    </p>
                    <Button onClick={() => handleRegister(event.title)} className="w-full bg-green-600 hover:bg-green-700">
                      Register Now
                    </Button>
                  </CardContent>
                </Card>
              ))
            )}
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
            {pastEvents.length === 0 ? (
              <p className="text-gray-500 col-span-full text-center">No past events or success stories to display yet.</p>
            ) : (
              pastEvents.map((event) => (
                <Card key={event.id}>
                  <CardHeader>
                    <CardTitle className="text-2xl">{event.title}</CardTitle>
                    <CardDescription>{format(event.date, "PPP")}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300">
                      {event.description}
                    </p>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default EventsFundraisers;