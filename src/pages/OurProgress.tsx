import React from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Award, Users } from "lucide-react";

const OurProgress: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-extrabold text-center mb-12 text-gray-900 dark:text-white">Our Progress</h1>

        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-8 text-blue-700 dark:text-blue-400">Key Milestones Achieved</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center p-6">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">City Council Resolution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  A significant step forward! The Evansville City Council officially approved a resolution supporting Vision Zero principles, committing to safer streets.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardHeader>
                <Award className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">Grant Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  We've successfully submitted multiple grant applications to secure funding for infrastructure improvements and educational programs.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardHeader>
                <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">Ongoing Meetings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  Regular meetings with city officials, community leaders, and task force partners are driving our initiatives forward.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-8 text-blue-700 dark:text-blue-400">Vision Zero Progress Dashboard</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="p-6">
              <CardTitle className="mb-4 text-xl">Community Engagement</CardTitle>
              <p className="text-gray-700 dark:text-gray-300 mb-2">Reached 75% of target neighborhoods for outreach.</p>
              <Progress value={75} className="w-full" />
            </Card>
            <Card className="p-6">
              <CardTitle className="mb-4 text-xl">Infrastructure Assessments</CardTitle>
              <p className="text-gray-700 dark:text-gray-300 mb-2">Completed 50% of high-risk intersection assessments.</p>
              <Progress value={50} className="w-full" />
            </Card>
            <Card className="p-6">
              <CardTitle className="mb-4 text-xl">Educational Workshops</CardTitle>
              <p className="text-gray-700 dark:text-gray-300 mb-2">Conducted 60% of planned safety workshops.</p>
              <Progress value={60} className="w-full" />
            </Card>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-4xl font-bold text-center mb-8 text-blue-700 dark:text-blue-400">Our Commitment to Transparency</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            We believe in accountability and transparency. This dashboard provides a snapshot of our ongoing efforts. For detailed meeting minutes and reports, please visit our Admin Portal (for authorized users).
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default OurProgress;