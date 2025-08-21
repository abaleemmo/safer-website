import React from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutUs: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-extrabold text-center mb-12 text-gray-900 dark:text-white">About SAFER</h1>

        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-8 text-blue-700 dark:text-blue-400">Our Story: From Tragedy to Action</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <p className="mb-6">
              SAFER was born from a profound personal tragedy that illuminated a larger, systemic issue in our community. The loss of a loved one due to a preventable traffic incident in Evansville sparked a realization: this wasn't an isolated event, but a symptom of a broader problem of traffic fatalities and serious injuries.
            </p>
            <p className="mb-6">
              Instead of succumbing to despair, we chose action. We discovered the Vision Zero initiative, a global movement committed to eliminating traffic deaths and severe injuries. Inspired by its success in other cities, we committed ourselves to bringing this life-saving approach to Evansville. SAFER is the embodiment of that commitment – a community-driven effort to make our streets safer for everyone.
            </p>
            <p>
              Our journey began with grief, but it has transformed into a powerful mission to ensure no other family experiences such a loss. We believe that every life is precious, and every traffic fatality is preventable.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-8 text-blue-700 dark:text-blue-400">Executive Committee</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <CardTitle>John Doe</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">Founder & President</p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">Passionate advocate for traffic safety.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Jane Smith</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">Vice President</p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">Urban planning expert.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Robert Johnson</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">Secretary</p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">Community organizer.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Emily White</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">Treasurer</p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">Financial oversight.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-bold text-center mb-8 text-blue-700 dark:text-blue-400">Our Task Force Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="text-center p-4">
              <CardTitle className="text-xl">City of Evansville</CardTitle>
            </Card>
            <Card className="text-center p-4">
              <CardTitle className="text-xl">Local Law Enforcement</CardTitle>
            </Card>
            <Card className="text-center p-4">
              <CardTitle className="text-xl">Community Health Dept.</CardTitle>
            </Card>
            <Card className="text-center p-4">
              <CardTitle className="text-xl">Evansville Schools</CardTitle>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutUs;