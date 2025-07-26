import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/layout/Header";
import { BookOpen, Brain, Users, Award } from "lucide-react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Master Ophthalmology Through
            <span className="text-primary block">Interactive Case Studies</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Enhance your clinical reasoning skills with real-world ophthalmology cases. 
            Practice diagnosis, management, and exam preparation through structured case presentations and interactive quizzes.
          </p>
          <div className="space-x-4">
            <Link to="/cases">
              <Button size="lg" className="text-lg px-8">
                Browse Cases
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="text-lg px-8">
              Learn More
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="text-center">
            <CardHeader>
              <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
              <CardTitle>Structured Cases</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Comprehensive ophthalmology cases with patient demographics, history, examination findings, and investigations.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Brain className="w-12 h-12 text-primary mx-auto mb-4" />
              <CardTitle>Interactive Quizzes</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Test your knowledge with multiple choice, true/false, and short answer questions with immediate feedback.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <CardTitle>Medical Education</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Designed for medical students, residents, and junior doctors preparing for ophthalmology rotations and exams.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <CardTitle>Evidence-Based</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                All cases and management plans follow current clinical guidelines and evidence-based practice.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* How It Works */}
        <div className="bg-card rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Read the Case</h3>
              <p className="text-muted-foreground">
                Study the patient presentation, examination findings, and investigations carefully.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Take the Quiz</h3>
              <p className="text-muted-foreground">
                Answer questions about diagnosis, management, and clinical reasoning.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Learn & Improve</h3>
              <p className="text-muted-foreground">
                Receive immediate feedback with detailed explanations to reinforce learning.
              </p>
            </div>
          </div>
        </div>

        {/* Sample Cases Preview */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Sample Cases Available</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Start with these carefully crafted ophthalmology cases
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-left">Sudden Vision Loss in a 28-Year-Old</CardTitle>
                <CardDescription className="text-left">
                  Neuro-ophthalmology • NAION • Visual field defects
                </CardDescription>
              </CardHeader>
              <CardContent className="text-left">
                <p className="text-muted-foreground mb-4">
                  A young software developer presents with sudden central visual field defect...
                </p>
                <Link to="/cases/case-1">
                  <Button variant="outline">View Case</Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-left">Progressive Visual Field Loss in a 65-Year-Old</CardTitle>
                <CardDescription className="text-left">
                  Glaucoma • Primary open-angle • IOP management
                </CardDescription>
              </CardHeader>
              <CardContent className="text-left">
                <p className="text-muted-foreground mb-4">
                  A retired teacher with gradual peripheral vision difficulties...
                </p>
                <Link to="/cases/case-2">
                  <Button variant="outline">View Case</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;