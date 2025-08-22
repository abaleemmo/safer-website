import React from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const BlogAnnouncements: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Evansville City Council Unanimously Approves Vision Zero Resolution!",
      date: "October 1, 2024",
      summary: "A landmark decision for safer streets in Evansville. Read about the details and what it means for our community.",
      link: "#", // Placeholder for actual blog post link
    },
    {
      id: 2,
      title: "SAFER Hosts Community Safety Workshop",
      date: "September 15, 2024",
      summary: "Recap of our recent workshop focused on pedestrian and cyclist safety. Learn key takeaways and future plans.",
      link: "#",
    },
    {
      id: 3,
      title: "Grant Application Submitted for Lloyd Expressway Improvements",
      date: "August 20, 2024",
      summary: "We've applied for significant funding to enhance safety at critical intersections like Lloyd and Fielding.",
      link: "#",
    },
    {
      id: 4,
      title: "Meet Our New Task Force Partners",
      date: "July 5, 2024",
      summary: "Exciting news! We're expanding our network of partners dedicated to achieving Vision Zero.",
      link: "#",
    },
  ];

  const meetingMinutes = [
    {
      id: 1,
      title: "Task Force Meeting Minutes - September 2024",
      date: "September 25, 2024",
      link: "#", // Placeholder for actual document link
    },
    {
      id: 2,
      title: "City Council Presentation Summary - August 2024",
      date: "August 10, 2024",
      link: "#",
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-extrabold text-center mb-12 text-gray-900 dark:text-white">Blog & Announcements</h1>

        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-8 text-blue-700 dark:text-blue-400">Latest Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
              <Card key={post.id}>
                <CardHeader>
                  <CardTitle className="text-2xl">{post.title}</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">{post.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{post.summary}</p>
                  <Link to={post.link} className="text-blue-600 hover:underline font-medium">
                    Read More &rarr;
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-8 text-blue-700 dark:text-blue-400">Past Meeting Minutes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {meetingMinutes.map((minute) => (
              <Card key={minute.id}>
                <CardContent className="p-6 flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{minute.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{minute.date}</p>
                  </div>
                  <Link to={minute.link} className="text-blue-600 hover:underline font-medium">
                    View &rarr;
                  </Link>
                </CardContent>
              </Card>
            ))}
            {meetingMinutes.length === 0 && (
              <p className="text-center text-gray-600 dark:text-gray-400 col-span-full">No meeting minutes available yet.</p>
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BlogAnnouncements;