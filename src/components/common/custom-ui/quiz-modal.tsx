"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
  Clock,
  CheckCircle,
  XCircle,
  HelpCircle,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Trophy,
  AlertCircle,
} from "lucide-react"

interface QuizQuestion {
  id: number
  question: string
  type: "multiple-choice" | "true-false" | "fill-blank"
  options?: string[]
  correctAnswer: string | number
  explanation: string
  points: number
}

interface Quiz {
  id: number
  title: string
  description: string
  duration: string
  totalQuestions: number
  passingScore: number
  isCompleted: boolean
  userScore?: number
  attempts: number
  maxAttempts: number
  questions: QuizQuestion[]
}

interface QuizModalProps {
  quiz: Quiz
  isOpen: boolean
  onClose: () => void
  onQuizComplete: (score: number) => void
}

export function QuizModal({ quiz, isOpen, onClose, onQuizComplete }: QuizModalProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string | number>>({})
  const [showResults, setShowResults] = useState(false)
  const [timeLeft, setTimeLeft] = useState(0)
  const [quizStarted, setQuizStarted] = useState(false)
  const [score, setScore] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState(0)

  const currentQuestion = quiz.questions[currentQuestionIndex]
  const isLastQuestion = currentQuestionIndex === quiz.questions.length - 1
  const isFirstQuestion = currentQuestionIndex === 0

  // Initialize timer when quiz starts
  useEffect(() => {
    if (quizStarted && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else if (quizStarted && timeLeft === 0) {
      handleSubmitQuiz()
    }
  }, [timeLeft, quizStarted])

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentQuestionIndex(0)
      setAnswers({})
      setShowResults(false)
      setQuizStarted(false)
      setScore(0)
      setCorrectAnswers(0)
      // Convert duration string to seconds (assuming format like "10 min")
      const minutes = Number.parseInt(quiz.duration.split(" ")[0])
      setTimeLeft(minutes * 60)
    }
  }, [isOpen, quiz])

  const startQuiz = () => {
    setQuizStarted(true)
  }

  const handleAnswerChange = (questionId: number, answer: string | number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }))
  }

  const goToNextQuestion = () => {
    if (!isLastQuestion) {
      setCurrentQuestionIndex((prev) => prev + 1)
    }
  }

  const goToPreviousQuestion = () => {
    if (!isFirstQuestion) {
      setCurrentQuestionIndex((prev) => prev - 1)
    }
  }

  const calculateScore = () => {
    let correct = 0
    let totalPoints = 0

    quiz.questions.forEach((question) => {
      totalPoints += question.points
      const userAnswer = answers[question.id]

      if (question.type === "fill-blank") {
        // Case-insensitive comparison for fill-in-the-blank
        if (typeof userAnswer === "string" && typeof question.correctAnswer === "string") {
          if (userAnswer.toLowerCase().trim() === question.correctAnswer.toLowerCase().trim()) {
            correct += question.points
          }
        }
      } else {
        // Direct comparison for multiple choice and true/false
        if (userAnswer === question.correctAnswer) {
          correct += question.points
        }
      }
    })

    return Math.round((correct / totalPoints) * 100)
  }

  const handleSubmitQuiz = () => {
    const finalScore = calculateScore()
    const correctCount = quiz.questions.filter((question) => {
      const userAnswer = answers[question.id]
      if (question.type === "fill-blank") {
        return (
          typeof userAnswer === "string" &&
          typeof question.correctAnswer === "string" &&
          userAnswer.toLowerCase().trim() === question.correctAnswer.toLowerCase().trim()
        )
      }
      return userAnswer === question.correctAnswer
    }).length

    setScore(finalScore)
    setCorrectAnswers(correctCount)
    setShowResults(true)
    onQuizComplete(finalScore)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const getScoreColor = (score: number) => {
    if (score >= quiz.passingScore) return "text-green-600"
    if (score >= quiz.passingScore * 0.7) return "text-yellow-600"
    return "text-red-600"
  }

  const getScoreBadgeVariant = (score: number) => {
    if (score >= quiz.passingScore) return "default"
    return "destructive"
  }

  if (!quizStarted) {
    return (
      <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <HelpCircle className="h-6 w-6" />
              {quiz.title}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="text-center">
              <p className="text-muted-foreground mb-4">{quiz.description}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold">{quiz.totalQuestions}</div>
                  <div className="text-sm text-muted-foreground">Questions</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{quiz.duration}</div>
                  <div className="text-sm text-muted-foreground">Duration</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{quiz.passingScore}%</div>
                  <div className="text-sm text-muted-foreground">Pass Score</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{quiz.maxAttempts - quiz.attempts}</div>
                  <div className="text-sm text-muted-foreground">Attempts Left</div>
                </div>
              </div>

              {quiz.isCompleted && (
                <div className="bg-muted/50 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Trophy className="h-5 w-5 text-yellow-500" />
                    <span className="font-semibold">Previous Best Score</span>
                  </div>
                  <div className={`text-2xl font-bold ${getScoreColor(quiz.userScore || 0)}`}>{quiz.userScore}%</div>
                </div>
              )}

              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
                <AlertCircle className="h-4 w-4" />
                <span>Make sure you have a stable internet connection before starting</span>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button onClick={startQuiz} className="min-w-[120px]">
                Start Quiz
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  if (showResults) {
    return (
      <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Trophy className="h-6 w-6" />
              Quiz Results
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            {/* Score Summary */}
            <Card>
              <CardHeader className="text-center">
                <div className="space-y-2">
                  <div className={`text-4xl font-bold ${getScoreColor(score)}`}>{score}%</div>
                  <Badge variant={getScoreBadgeVariant(score)} className="text-sm">
                    {score >= quiz.passingScore ? "PASSED" : "FAILED"}
                  </Badge>
                  <div className="text-sm text-muted-foreground">
                    {correctAnswers} out of {quiz.questions.length} questions correct
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Progress value={score} className="h-3 mb-2" />
                <div className="text-center text-sm text-muted-foreground">Passing score: {quiz.passingScore}%</div>
              </CardContent>
            </Card>

            {/* Question Review */}
            <Card>
              <CardHeader>
                <CardTitle>Question Review</CardTitle>
              </CardHeader>
              <CardContent className="max-h-96 overflow-y-auto space-y-4">
                {quiz.questions.map((question, index) => {
                  const userAnswer = answers[question.id]
                  const isCorrect =
                    question.type === "fill-blank"
                      ? typeof userAnswer === "string" &&
                        typeof question.correctAnswer === "string" &&
                        userAnswer.toLowerCase().trim() === question.correctAnswer.toLowerCase().trim()
                      : userAnswer === question.correctAnswer

                  return (
                    <div key={question.id} className="border rounded-lg p-4">
                      <div className="flex items-start gap-3 mb-3">
                        {isCorrect ? (
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                        )}
                        <div className="flex-1">
                          <h4 className="font-medium mb-2">
                            Question {index + 1}: {question.question}
                          </h4>

                          {question.type === "multiple-choice" && question.options && (
                            <div className="space-y-1 mb-3">
                              {question.options.map((option, optionIndex) => (
                                <div
                                  key={optionIndex}
                                  className={`p-2 rounded text-sm ${
                                    optionIndex === question.correctAnswer
                                      ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                                      : optionIndex === userAnswer
                                        ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                                        : "bg-muted"
                                  }`}
                                >
                                  {option}
                                  {optionIndex === question.correctAnswer && " ✓"}
                                  {optionIndex === userAnswer && optionIndex !== question.correctAnswer && " ✗"}
                                </div>
                              ))}
                            </div>
                          )}

                          {question.type === "true-false" && question.options && (
                            <div className="space-y-1 mb-3">
                              {question.options.map((option, optionIndex) => (
                                <div
                                  key={optionIndex}
                                  className={`p-2 rounded text-sm ${
                                    optionIndex === question.correctAnswer
                                      ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                                      : optionIndex === userAnswer
                                        ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                                        : "bg-muted"
                                  }`}
                                >
                                  {option}
                                  {optionIndex === question.correctAnswer && " ✓"}
                                  {optionIndex === userAnswer && optionIndex !== question.correctAnswer && " ✗"}
                                </div>
                              ))}
                            </div>
                          )}

                          {question.type === "fill-blank" && (
                            <div className="space-y-2 mb-3">
                              <div className="text-sm">
                                <span className="text-muted-foreground">Your answer: </span>
                                <span className={isCorrect ? "text-green-600" : "text-red-600"}>
                                  {userAnswer || "No answer"}
                                </span>
                              </div>
                              <div className="text-sm">
                                <span className="text-muted-foreground">Correct answer: </span>
                                <span className="text-green-600">{question.correctAnswer}</span>
                              </div>
                            </div>
                          )}

                          <div className="text-sm text-muted-foreground bg-muted/50 p-2 rounded">
                            <strong>Explanation:</strong> {question.explanation}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            <div className="flex justify-center gap-4">
              <Button variant="outline" onClick={onClose}>
                Close
              </Button>
              {quiz.attempts < quiz.maxAttempts && score < quiz.passingScore && (
                <Button
                  onClick={() => {
                    setShowResults(false)
                    setQuizStarted(false)
                    setCurrentQuestionIndex(0)
                    setAnswers({})
                  }}
                >
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Retake Quiz
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="flex items-center gap-2">
              <HelpCircle className="h-6 w-6" />
              {quiz.title}
            </DialogTitle>
            <div className="flex items-center gap-4">
              <Badge variant="outline">
                {currentQuestionIndex + 1} of {quiz.questions.length}
              </Badge>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4" />
                <span className={timeLeft < 60 ? "text-red-500 font-semibold" : ""}>{formatTime(timeLeft)}</span>
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Progress Bar */}
          <Progress value={((currentQuestionIndex + 1) / quiz.questions.length) * 100} className="h-2" />

          {/* Question */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                Question {currentQuestionIndex + 1}: {currentQuestion.question}
              </CardTitle>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">{currentQuestion.points} points</Badge>
                <Badge variant="outline" className="capitalize">
                  {currentQuestion.type.replace("-", " ")}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {currentQuestion.type === "multiple-choice" && currentQuestion.options && (
                <RadioGroup
                  value={answers[currentQuestion.id]?.toString()}
                  onValueChange={(value) => handleAnswerChange(currentQuestion.id, Number.parseInt(value))}
                >
                  {currentQuestion.options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                      <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              )}

              {currentQuestion.type === "true-false" && currentQuestion.options && (
                <RadioGroup
                  value={answers[currentQuestion.id]?.toString()}
                  onValueChange={(value) => handleAnswerChange(currentQuestion.id, Number.parseInt(value))}
                >
                  {currentQuestion.options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <RadioGroupItem value={index.toString()} id={`tf-${index}`} />
                      <Label htmlFor={`tf-${index}`} className="flex-1 cursor-pointer">
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              )}

              {currentQuestion.type === "fill-blank" && (
                <div className="space-y-2">
                  <Label htmlFor="fill-blank">Your Answer:</Label>
                  <Input
                    id="fill-blank"
                    placeholder="Type your answer here..."
                    value={answers[currentQuestion.id]?.toString() || ""}
                    onChange={(e) => handleAnswerChange(currentQuestion.id, e.target.value)}
                  />
                </div>
              )}
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <Button variant="outline" onClick={goToPreviousQuestion} disabled={isFirstQuestion}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>

            <div className="text-sm text-muted-foreground">
              {Object.keys(answers).length} of {quiz.questions.length} answered
            </div>

            {isLastQuestion ? (
              <Button onClick={handleSubmitQuiz} disabled={Object.keys(answers).length !== quiz.questions.length}>
                Submit Quiz
              </Button>
            ) : (
              <Button onClick={goToNextQuestion}>
                Next
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
