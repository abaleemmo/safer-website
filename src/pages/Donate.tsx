import React from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button"; // Added missing Button import
import { DollarSign, Heart, Handshake } from "lucide-react";
import { Link } from "react-router-dom";

const Donate: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-extrabold text-center mb-12 text-gray-900 dark:text-white">Support SAFER</h1>

        <section className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-center mb-8 text-blue-700 dark:text-blue-400">Your Contribution Makes a Difference</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            Every dollar you donate to SAFER directly fuels our mission to achieve Vision Zero in Evansville. Your generosity helps us fund critical initiatives, advocate for policy changes, and educate our community on traffic safety. We aim to raise an additional $200,000 - $250,000 to support our comprehensive strategies. Together, we can eliminate traffic fatalities and serious injuries on our streets.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 text-xl rounded-full">
            <DollarSign className="h-6 w-6 mr-2" /> Donate Securely Online
          </Button>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            (Placeholder for secure payment gateway integration)
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-8 text-blue-700 dark:text-blue-400">How Your Donation Helps</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center p-6">
              <CardHeader>
                <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">Saving Lives</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  Funds go towards advocating for safer infrastructure and policies that prevent crashes.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardHeader>
                <Handshake className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">Community Education</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  Support workshops, campaigns, and resources to educate all road users.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardHeader>
                <DollarSign className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">Operational Costs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  Helps cover administrative costs, allowing us to maximize our impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-4xl font-bold text-center mb-8 text-blue-700 dark:text-blue-400">Other Ways to Give</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300 space-y-4">
            <p>
              <strong>Volunteer:</strong> Dedicate your time and skills to our cause. <Link to="/contact" className="text-blue-600 hover:underline">Learn more</Link>.
            </p>
            <p>
              <strong>Corporate Partnerships:</strong> Businesses can partner with us to support traffic safety initiatives.
            </p>
            <p>
              <strong>Planned Giving:</strong> Consider including SAFER in your estate planning.
            </p>
            <p className="mt-6">
              For more information on any of these options, please <Link to="/contact" className="text-blue-600 hover:underline">contact us</Link>.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Donate;