import React from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const BlogAnnouncements: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Evansville City Council Approves Vision Zero Resolution",
      date: "October 1, 2024",
      summary: "A landmark decision for safer streets in Evansville. Read about the details and what it means for our community.",
      link: "#", // Placeholder for actual blog post link
    },
    {
      id: 2,
      title: "SafeRevv Hosts Community Safety Workshop",
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

        <section className="text-center">
          <h2 className="text-4xl font-bold text-center mb-8 text-blue-700 dark:text-blue-400">Stay Informed</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            Subscribe to our newsletter to receive the latest news, event invitations, and progress reports directly in your inbox.
          </p>
          {/* Placeholder for newsletter signup form */}
          <div className="mt-6 flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-r-md">
              Subscribe
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BlogAnnouncements;