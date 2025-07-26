import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle, XCircle } from "lucide-react";

export interface QuizQuestionProps {
  question: {
    id: string;
    type: 'multiple-choice' | 'true-false' | 'short-answer';
    question: string;
    options?: string[];
    correctAnswer: string;
    explanation: string;
  };
  onAnswer: (questionId: string, answer: string, isCorrect: boolean) => void;
}

export const QuizQuestion = ({ question, onAnswer }: QuizQuestionProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleSubmit = () => {
    if (!selectedAnswer.trim()) return;
    
    const correct = question.type === 'short-answer' 
      ? selectedAnswer.toLowerCase().trim().includes(question.correctAnswer.toLowerCase().trim())
      : selectedAnswer === question.correctAnswer;
    
    setIsCorrect(correct);
    setSubmitted(true);
    onAnswer(question.id, selectedAnswer, correct);
  };

  const renderAnswerInput = () => {
    switch (question.type) {
      case 'multiple-choice':
        return (
          <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
            {question.options?.map((option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={`option-${index}`} />
                <Label htmlFor={`option-${index}`} className="cursor-pointer">{option}</Label>
              </div>
            ))}
          </RadioGroup>
        );
      
      case 'true-false':
        return (
          <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="true" id="true" />
              <Label htmlFor="true" className="cursor-pointer">True</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="false" id="false" />
              <Label htmlFor="false" className="cursor-pointer">False</Label>
            </div>
          </RadioGroup>
        );
      
      case 'short-answer':
        return (
          <Textarea
            value={selectedAnswer}
            onChange={(e) => setSelectedAnswer(e.target.value)}
            placeholder="Enter your answer..."
            className="w-full"
            rows={3}
          />
        );
      
      default:
        return null;
    }
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="text-lg">{question.question}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {renderAnswerInput()}
        
        {!submitted && (
          <Button 
            onClick={handleSubmit} 
            disabled={!selectedAnswer.trim()}
            className="w-full"
          >
            Submit Answer
          </Button>
        )}
        
        {submitted && (
          <div className={`p-4 rounded-lg ${isCorrect ? 'bg-success/10 border border-success/20' : 'bg-destructive/10 border border-destructive/20'}`}>
            <div className="flex items-center space-x-2 mb-2">
              {isCorrect ? (
                <CheckCircle className="w-5 h-5 text-success" />
              ) : (
                <XCircle className="w-5 h-5 text-destructive" />
              )}
              <span className={`font-medium ${isCorrect ? 'text-success' : 'text-destructive'}`}>
                {isCorrect ? 'Correct!' : 'Incorrect'}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">{question.explanation}</p>
            {!isCorrect && question.type !== 'short-answer' && (
              <p className="text-sm mt-2 font-medium">
                Correct answer: {question.correctAnswer}
              </p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};