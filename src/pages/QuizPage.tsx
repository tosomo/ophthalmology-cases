import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Header } from "@/components/layout/Header";
import { QuizQuestion } from "@/components/quiz/QuizQuestion";
import { getCaseById, getQuizByCaseId } from "@/data/cases";
import { ArrowLeft, CheckCircle, Trophy } from "lucide-react";

const QuizPage = () => {
  const { caseId } = useParams<{ caseId: string }>();
  const case_ = caseId ? getCaseById(caseId) : null;
  const quiz = caseId ? getQuizByCaseId(caseId) : null;
  
  const [answers, setAnswers] = useState<Record<string, { answer: string; isCorrect: boolean }>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  if (!case_ || !quiz) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Quiz Not Found</h1>
            <Link to="/cases">
              <Button variant="outline">Back to Case Library</Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const handleAnswer = (questionId: string, answer: string, isCorrect: boolean) => {
    const newAnswers = {
      ...answers,
      [questionId]: { answer, isCorrect }
    };
    setAnswers(newAnswers);
    
    // Check if quiz is completed
    if (Object.keys(newAnswers).length === quiz.questions.length) {
      setIsCompleted(true);
    }
  };

  const calculateScore = () => {
    const correctAnswers = Object.values(answers).filter(a => a.isCorrect).length;
    return Math.round((correctAnswers / quiz.questions.length) * 100);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-success";
    if (score >= 60) return "text-warning";
    return "text-destructive";
  };

  const progress = (Object.keys(answers).length / quiz.questions.length) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Navigation */}
        <div className="mb-6">
          <Link to={`/cases/${caseId}`} className="inline-flex items-center text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case
          </Link>
        </div>

        {/* Quiz Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Quiz: {case_.title}
          </h1>
          <p className="text-muted-foreground mb-4">
            Test your understanding of this case with {quiz.questions.length} questions.
          </p>
          
          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-muted-foreground">Progress</span>
              <span className="text-sm text-muted-foreground">
                {Object.keys(answers).length} / {quiz.questions.length} completed
              </span>
            </div>
            <Progress value={progress} className="w-full" />
          </div>
        </div>

        {/* Questions */}
        <div className="space-y-6 mb-8">
          {quiz.questions.map((question, index) => (
            <div key={question.id}>
              <h3 className="text-lg font-medium mb-4">
                Question {index + 1} of {quiz.questions.length}
              </h3>
              <QuizQuestion
                question={question}
                onAnswer={handleAnswer}
              />
            </div>
          ))}
        </div>

        {/* Results */}
        {isCompleted && (
          <Card className="bg-accent/10 border-accent/20">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                {calculateScore() >= 80 ? (
                  <Trophy className="w-16 h-16 text-success" />
                ) : (
                  <CheckCircle className="w-16 h-16 text-primary" />
                )}
              </div>
              <CardTitle className="text-2xl">Quiz Completed!</CardTitle>
              <CardDescription>
                <span className={`text-3xl font-bold ${getScoreColor(calculateScore())}`}>
                  {calculateScore()}%
                </span>
                <span className="block mt-2">
                  You got {Object.values(answers).filter(a => a.isCorrect).length} out of {quiz.questions.length} questions correct.
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Link to={`/cases/${caseId}`}>
                  <Button variant="outline" className="w-full">
                    Review Case
                  </Button>
                </Link>
                <Link to="/cases">
                  <Button className="w-full">
                    More Cases
                  </Button>
                </Link>
              </div>
              
              {calculateScore() < 80 && (
                <div className="bg-warning/10 border border-warning/20 rounded-lg p-4 mt-6">
                  <p className="text-sm text-warning-foreground">
                    💡 Consider reviewing the case details and explanations to improve your understanding.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
};

export default QuizPage;