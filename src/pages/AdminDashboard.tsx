import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminEvents from "@/components/admin/AdminEvents";
import AdminAnnouncements from "@/components/admin/AdminAnnouncements";
import AdminPastEvents from "@/components/admin/AdminPastEvents";
import AdminProgress from "@/components/admin/AdminProgress";
import AdminMeetingMinutes from "@/components/admin/AdminMeetingMinutes";
import AdminContacts from "@/components/admin/AdminContacts"; // Import the new AdminContacts component

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

        <Tabs defaultValue="events" className="w-full max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-6"> {/* Increased grid columns */}
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="announcements">Announcements</TabsTrigger>
            <TabsTrigger value="past-events">Past Events</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
            <TabsTrigger value="minutes">Meeting Minutes</TabsTrigger>
            <TabsTrigger value="contacts">Contacts</TabsTrigger> {/* New Contacts tab */}
          </TabsList>
          <TabsContent value="events" className="mt-6">
            <AdminEvents />
          </TabsContent>
          <TabsContent value="announcements" className="mt-6">
            <AdminAnnouncements />
          </TabsContent>
          <TabsContent value="past-events" className="mt-6">
            <AdminPastEvents />
          </TabsContent>
          <TabsContent value="progress" className="mt-6">
            <AdminProgress />
          </TabsContent>
          <TabsContent value="minutes" className="mt-6">
            <AdminMeetingMinutes />
          </TabsContent>
          <TabsContent value="contacts" className="mt-6"> {/* New Contacts tab content */}
            <AdminContacts />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminDashboard;