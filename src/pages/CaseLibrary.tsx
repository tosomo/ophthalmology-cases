import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { cases } from "@/data/cases";
import { Eye, Clock, User } from "lucide-react";

const CaseLibrary = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Case Library</h1>
          <p className="text-xl text-muted-foreground">
            Explore our collection of interactive ophthalmology cases designed to enhance your clinical knowledge.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Eye className="h-8 w-8 text-primary" />
                <div className="ml-4">
                  <p className="text-2xl font-bold">{cases.length}</p>
                  <p className="text-muted-foreground">Total Cases</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <User className="h-8 w-8 text-primary" />
                <div className="ml-4">
                  <p className="text-2xl font-bold">2</p>
                  <p className="text-muted-foreground">Specialties</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Clock className="h-8 w-8 text-primary" />
                <div className="ml-4">
                  <p className="text-2xl font-bold">~20 min</p>
                  <p className="text-muted-foreground">Avg. Study Time</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Cases Grid */}
        <div className="grid gap-6">
          {cases.map((case_) => (
            <Card key={case_.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl mb-2">{case_.title}</CardTitle>
                    <CardDescription className="text-base">
                      {case_.presentingComplaint.substring(0, 150)}...
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="ml-4">
                    {case_.category.replace('-', ' ')}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span>👤 {case_.demographics.age}yo {case_.demographics.gender}</span>
                    <span>📊 VA: {case_.examinationFindings.visualAcuity}</span>
                  </div>
                  <Link to={`/cases/${case_.id}`}>
                    <Button>Study Case</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coming Soon */}
        <Card className="mt-8 border-dashed">
          <CardContent className="text-center p-12">
            <h3 className="text-2xl font-semibold mb-4">More Cases Coming Soon</h3>
            <p className="text-muted-foreground mb-6">
              We're continuously adding new cases covering retinal diseases, corneal pathology, 
              pediatric ophthalmology, and more specialized areas.
            </p>
            <Badge variant="outline">Under Development</Badge>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default CaseLibrary;