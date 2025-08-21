import React from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Lightbulb, Shield } from "lucide-react";

const Education: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-extrabold text-center mb-12 text-gray-900 dark:text-white">Education & Resources</h1>

        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-8 text-blue-700 dark:text-blue-400">Understanding Vision Zero</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <p className="mb-6">
              Vision Zero is a multi-national road traffic safety project that aims to achieve a road system with no fatalities or serious injuries involving road traffic. It started in Sweden in 1997 and has since been adopted by cities worldwide, including many in the United States.
            </p>
            <p className="mb-6">
              The core principle of Vision Zero is that traffic deaths and severe injuries are preventable, not unavoidable "accidents." It shifts the paradigm from individual blame to a systemic approach, recognizing that humans make mistakes and the road system should be designed to be forgiving.
            </p>
            <p>
              Key components of Vision Zero include:
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li><strong>Safe Speeds:</strong> Setting appropriate speed limits for different road types.</li>
                <li><strong>Safe Streets:</strong> Designing roads to protect all users, especially pedestrians and cyclists.</li>
                <li><strong>Safe Vehicles:</strong> Promoting vehicle safety technologies.</li>
                <li><strong>Safe People:</strong> Encouraging safe behaviors through education and enforcement.</li>
                <li><strong>Post-Crash Care:</strong> Ensuring rapid and effective emergency response.</li>
              </ul>
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-8 text-blue-700 dark:text-blue-400">Traffic Safety Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center p-6">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">Fact Sheets & Guides</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Download informative materials on various traffic safety topics.
                </p>
                <a href="#" className="text-blue-600 hover:underline">View Resources</a>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardHeader>
                <Lightbulb className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">Safety Tips for All Users</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Tips for drivers, pedestrians, cyclists, and motorcyclists.
                </p>
                <a href="#" className="text-blue-600 hover:underline">Read Tips</a>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardHeader>
                <Shield className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">Report a Safety Concern</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Help us identify hazardous areas in Evansville.
                </p>
                <a href="/contact" className="text-blue-600 hover:underline">Contact Us</a>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-4xl font-bold text-center mb-8 text-blue-700 dark:text-blue-400">External Links</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300 space-y-4">
            <p>
              <a href="https://visionzeroinitiative.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Vision Zero Network
              </a> - Learn more about the national movement.
            </p>
            <p>
              <a href="https://www.nhtsa.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                NHTSA (National Highway Traffic Safety Administration)
              </a> - Official U.S. government source for traffic safety data and resources.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Education;