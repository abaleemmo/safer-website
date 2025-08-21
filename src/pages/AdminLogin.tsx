import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const AdminLogin: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for login logic
    console.log("Admin login attempt");
    // In a real app, you'd authenticate and then navigate to /admin/dashboard
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-950">
      <Card className="w-full max-w-md p-6">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Admin Login</CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Enter your credentials to access the admin portal.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="username">Username</Label>
              <Input id="username" type="text" placeholder="admin" required className="mt-2" />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="password" required className="mt-2" />
            </div>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Log In
            </Button>
          </form>
          <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
            <Link to="/" className="text-blue-600 hover:underline">
              Return to Public Site
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;