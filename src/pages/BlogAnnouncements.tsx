import React from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { useData } from "@/context/DataContext"; // Removed Announcement and MeetingMinute from import

const BlogAnnouncements: React.FC = () => {
  const { announcements, meetingMinutes } = useData(); // Use data from context

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-extrabold text-center mb-12 text-gray-900 dark:text-white">Blog & Announcements</h1>

        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-8 text-blue-700 dark:text-blue-400">Latest Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {announcements.length === 0 ? (
              <p className="text-gray-500 col-span-full text-center">No blog posts or announcements available yet.</p>
            ) : (
              announcements.map((post) => (
                <Card key={post.id}>
                  <CardHeader>
                    {post.imageUrl && (
                      <img src={post.imageUrl} alt={post.title || "Blog image"} className="w-full h-48 object-cover rounded-t-lg mb-4" />
                    )}
                    <CardTitle className="text-2xl">{post.title || "Untitled Announcement"}</CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-400">{format(post.date, "PPP")}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{post.summary || "No summary provided."}</p>
                    {post.link && (
                      <Link to={post.link} className="text-blue-600 hover:underline font-medium">
                        Read More &rarr;
                      </Link>
                    )}
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-8 text-blue-700 dark:text-blue-400">Past Meeting Minutes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {meetingMinutes.length === 0 ? (
              <p className="text-center text-gray-600 dark:text-gray-400 col-span-full">No meeting minutes available yet.</p>
            ) : (
              meetingMinutes.map((minute) => (
                <Card key={minute.id}>
                  <CardContent className="p-6 flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{minute.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{format(minute.date, "PPP")}</p>
                    </div>
                    <Link to={minute.link} className="text-blue-600 hover:underline font-medium">
                      View &rarr;
                    </Link>
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

export default BlogAnnouncements;