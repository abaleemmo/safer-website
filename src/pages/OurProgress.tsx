import React from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Award, Users } from "lucide-react";
import { useData, ProgressItem } from "@/context/DataContext"; // Import useData hook and ProgressItem interface

const OurProgress: React.FC = () => {
  const { progressItems } = useData(); // Use data from context

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
                <CardTitle className="text-2xl">Unanimous City Council Resolution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  A significant step forward! Last month, the Evansville City Council unanimously approved a resolution supporting Vision Zero principles, committing to safer streets. This resolution concedes that current fatalities and incidents are unacceptable and aims to reduce them to zero over the next two decades.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardHeader>
                <Award className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">Grant Applications Submitted</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  We've successfully submitted multiple grant applications to secure funding for infrastructure improvements and educational programs, including the "Safer Roads for All" grant applied for by the City of Evansville.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardHeader>
                <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">Regular Task Force Meetings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  Our task force, comprising city officials, community leaders, and nonprofit partners, has been meeting regularly to devise and iterate strategies, driving our initiatives forward.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-8 text-blue-700 dark:text-blue-400">Vision Zero Progress Dashboard</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Achieving Vision Zero is a huge undertaking, recognizing that traffic-related accidents are preventable and often stem from systematic errors rather than solely individual user mistakes. Our approach involves:
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li><strong>Education:</strong> Raising public awareness and promoting safe behaviors.</li>
                <li><strong>Data Analysis:</strong> Detailed analysis of accident data to identify high-risk areas and common causes.</li>
                <li><strong>Strategy Devising:</strong> Developing targeted strategies to reduce incidents based on data insights.</li>
                <li><strong>Continuous Evaluation:</strong> Comparing new data to follow effective strategies and iterate on less successful ones.</li>
                <li><strong>Enforcement:</strong> Supporting consistent enforcement of traffic laws and speed limits.</li>
              </ul>
            </p>
            {progressItems.map((item) => (
              <Card key={item.id} className="p-6">
                <CardTitle className="mb-4 text-xl">{item.title}</CardTitle>
                <p className="text-gray-700 dark:text-gray-300 mb-2">{item.description}</p>
                <Progress value={item.value} className="w-full" />
              </Card>
            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-4xl font-bold text-center mb-8 text-blue-700 dark:text-blue-400">Our Commitment to Transparency & Funding</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300 mb-6">
            We believe in accountability and transparency. This dashboard provides a snapshot of our ongoing efforts. For detailed meeting minutes and reports, please visit our Admin Portal (for authorized users).
          </p>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            This initiative requires significant resources. While the city has applied for grants, SAFER aims to raise an additional $200,000 - $250,000 through fundraising at both local and government levels, and through private partnerships. Your support is vital to our success.
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default OurProgress;