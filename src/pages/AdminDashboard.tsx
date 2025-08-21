import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Calendar, Image, Megaphone } from "lucide-react";

const AdminDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <header className="bg-white shadow-sm dark:bg-gray-950 py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
        <Button asChild variant="outline">
          <Link to="/admin/login">Log Out</Link>
        </Button>
      </header>
      <main className="flex-grow container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Welcome, Admin!</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="text-center p-6">
            <CardHeader>
              <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle className="text-2xl">Manage Blog Posts</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">Add, edit, or delete blog articles.</p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Go to Blog Editor</Button>
            </CardContent>
          </Card>
          <Card className="text-center p-6">
            <CardHeader>
              <Calendar className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <CardTitle className="text-2xl">Manage Events</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">Update upcoming events and fundraisers.</p>
              <Button className="w-full bg-green-600 hover:bg-green-700">Go to Event Manager</Button>
            </CardContent>
          </Card>
          <Card className="text-center p-6">
            <CardHeader>
              <Megaphone className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <CardTitle className="text-2xl">Post Announcements</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">Create and publish site-wide announcements.</p>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Go to Announcements</Button>
            </CardContent>
          </Card>
          <Card className="text-center p-6">
            <CardHeader>
              <FileText className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <CardTitle className="text-2xl">Upload Meeting Minutes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">Upload and manage official meeting documents.</p>
              <Button className="w-full bg-yellow-600 hover:bg-yellow-700">Go to Document Uploader</Button>
            </CardContent>
          </Card>
          <Card className="text-center p-6">
            <CardHeader>
              <Image className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <CardTitle className="text-2xl">Manage Photos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">Upload and organize images for the website.</p>
              <Button className="w-full bg-pink-600 hover:bg-pink-700">Go to Photo Manager</Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;