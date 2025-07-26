import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Header } from "@/components/layout/Header";
import { getCaseById } from "@/data/cases";
import { ArrowLeft, User, Calendar, Briefcase, Eye, Stethoscope, TestTube, Target, Clipboard } from "lucide-react";

const CaseDetail = () => {
  const { caseId } = useParams<{ caseId: string }>();
  const case_ = caseId ? getCaseById(caseId) : null;

  if (!case_) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Case Not Found</h1>
            <Link to="/cases">
              <Button variant="outline">Back to Case Library</Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="mb-6">
          <Link to="/cases" className="inline-flex items-center text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Library
          </Link>
        </div>

        {/* Case Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-4xl font-bold text-foreground">{case_.title}</h1>
            <Badge variant="secondary" className="text-sm">
              {case_.category.replace('-', ' ')}
            </Badge>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Patient Demographics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="w-5 h-5 mr-2 text-primary" />
                  Patient Demographics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-muted-foreground" />
                    <span>Age: {case_.demographics.age} years</span>
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2 text-muted-foreground" />
                    <span>Gender: {case_.demographics.gender}</span>
                  </div>
                  {case_.demographics.occupation && (
                    <div className="flex items-center col-span-2">
                      <Briefcase className="w-4 h-4 mr-2 text-muted-foreground" />
                      <span>Occupation: {case_.demographics.occupation}</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* History of Presenting Complaint */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clipboard className="w-5 h-5 mr-2 text-primary" />
                  History of Presenting Complaint
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">{case_.presentingComplaint}</p>
              </CardContent>
            </Card>

            {/* Past Medical History */}
            <Card>
              <CardHeader>
                <CardTitle>Past Medical History</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {case_.pastMedicalHistory.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Examination Findings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Eye className="w-5 h-5 mr-2 text-primary" />
                  Examination Findings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">Visual Acuity</h4>
                  <p className="text-muted-foreground">{case_.examinationFindings.visualAcuity}</p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-medium mb-1">Pupils</h4>
                  <p className="text-muted-foreground">{case_.examinationFindings.pupils}</p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-medium mb-1">Extraocular Movements</h4>
                  <p className="text-muted-foreground">{case_.examinationFindings.extraocularMovements}</p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-medium mb-1">Anterior Segment</h4>
                  <p className="text-muted-foreground">{case_.examinationFindings.anteriorSegment}</p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-medium mb-1">Posterior Segment</h4>
                  <p className="text-muted-foreground">{case_.examinationFindings.posteriorSegment}</p>
                </div>
                {case_.examinationFindings.intraocularPressure && (
                  <>
                    <Separator />
                    <div>
                      <h4 className="font-medium mb-1">Intraocular Pressure</h4>
                      <p className="text-muted-foreground">{case_.examinationFindings.intraocularPressure}</p>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            {/* Investigations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TestTube className="w-5 h-5 mr-2 text-primary" />
                  Investigations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {case_.investigations.map((investigation, index) => (
                  <div key={index}>
                    <h4 className="font-medium mb-2 text-foreground">{investigation.description}</h4>
                    <p className="text-muted-foreground mb-4">{investigation.findings}</p>
                    
                    {investigation.images && investigation.images.length > 0 && (
                      <div className="space-y-4">
                        {investigation.images.map((image, imgIndex) => (
                          <div key={imgIndex} className="bg-muted/30 p-4 rounded-lg">
                            <div className="relative group cursor-pointer">
                              <img 
                                src={image.url} 
                                alt={image.caption}
                                className="w-full max-w-md mx-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                                style={{ maxHeight: '400px', objectFit: 'contain' }}
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200 rounded-lg flex items-center justify-center">
                                <Eye className="w-8 h-8 text-white opacity-0 group-hover:opacity-80 transition-opacity duration-200" />
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground mt-2 text-center italic">
                              {image.caption}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {index < case_.investigations.length - 1 && <Separator className="mt-6" />}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Diagnosis */}
            <Card className="bg-accent/20 border-accent">
              <CardHeader>
                <CardTitle className="flex items-center text-accent-foreground">
                  <Target className="w-5 h-5 mr-2" />
                  Diagnosis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium text-accent-foreground">{case_.diagnosis}</p>
              </CardContent>
            </Card>

            {/* Management Plan */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Stethoscope className="w-5 h-5 mr-2 text-primary" />
                  Management Plan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {case_.managementPlan.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full text-sm flex items-center justify-center mt-0 mr-3 flex-shrink-0">
                        {index + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Ready to Test Your Knowledge?</CardTitle>
                <CardDescription>
                  Take the interactive quiz for this case to reinforce your learning.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to={`/quiz/${case_.id}`} className="block">
                  <Button className="w-full" size="lg">
                    Take Quiz
                  </Button>
                </Link>
                <p className="text-xs text-muted-foreground mt-3 text-center">
                  3 questions • Multiple choice & short answer
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CaseDetail;