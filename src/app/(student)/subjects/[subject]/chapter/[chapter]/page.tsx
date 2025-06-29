"use client"

import { useState } from "react"
import { SidebarInset } from "@/components/ui/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Play,
  FileText,
  CheckCircle,
  Circle,
  Clock,
  Video,
  Download,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
} from "lucide-react"
import { VideoPlayerModal } from "@/components/common/custom-ui/video-player-modal"
import { QuizModal } from "@/components/common/custom-ui/quiz-modal"
import { Scroll } from "@/components/common"
import { chapterData } from "./_data"

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

interface QuizQuestion {
  id: number
  question: string
  type: "multiple-choice" | "true-false" | "fill-blank"
  options?: string[]
  correctAnswer: string | number
  explanation: string
  points: number
}

export default function ChapterPage({ params }: { params: { chapterId: string } }) {
  const [selectedLessonId, setSelectedLessonId] = useState(1)
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState<any>(null)
  const [quizModalOpen, setQuizModalOpen] = useState(false)
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null)
  const [showRightbar, setShowRightbar] = useState(true)
  // Mock data - in real app, this would come from API/database
  

  const selectedLesson = chapterData.lessons.find((lesson) => lesson.id === selectedLessonId)
  const progressPercentage = (chapterData.completedLessons / chapterData.totalLessons) * 100

  const goToNextLesson = () => {
    const currentIndex = chapterData.lessons.findIndex((lesson) => lesson.id === selectedLessonId)
    if (currentIndex < chapterData.lessons.length - 1) {
      setSelectedLessonId(chapterData.lessons[currentIndex + 1].id)
    }
  }

  const goToPreviousLesson = () => {
    const currentIndex = chapterData.lessons.findIndex((lesson) => lesson.id === selectedLessonId)
    if (currentIndex > 0) {
      setSelectedLessonId(chapterData.lessons[currentIndex - 1].id)
    }
  }

  const handleVideoClick = (video: any) => {
    setSelectedVideo(video)
    setVideoModalOpen(true)
  }

  const handleQuizClick = (quiz: Quiz) => {
    setSelectedQuiz(quiz)
    setQuizModalOpen(true)
  }

  return (
    <SidebarInset>
      

      <div className="flex flex-1 h-[calc(100vh-4rem)]">
        {/* Lessons Sidebar */}
        

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {selectedLesson && (
            <>
              {/* Lesson Header */}
              <div className="py-4 px-6 border-b bg-background">
                <div className="flex items-center justify-between mb-1.5">
                  <div>
                    <h1 className="text-2xl font-bold">{selectedLesson.title}</h1>
                    <div className="flex items-center gap-4 mt-2">
                      <Badge variant={selectedLesson.isCompleted ? "default" : "secondary"}>
                        {selectedLesson.isCompleted ? "Completed" : "In Progress"}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {selectedLesson.duration}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={goToPreviousLesson}
                      disabled={selectedLessonId === chapterData.lessons[0].id}
                    >
                      <ChevronLeft className="h-4 w-4 mr-1" />
                      Previous
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={goToNextLesson}
                      disabled={selectedLessonId === chapterData.lessons[chapterData.lessons.length - 1].id}
                    >
                      Next
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Lesson Content */}
              <div className="flex-1 p-6">
                <Tabs defaultValue="videos" className="h-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="videos" className="flex items-center gap-2">
                      <Video className="h-4 w-4" />
                      Videos ({selectedLesson.videos.length})
                    </TabsTrigger>
                    <TabsTrigger value="notes" className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Notes ({selectedLesson.notes.length})
                    </TabsTrigger>
                    <TabsTrigger value="quizzes" className="flex items-center gap-2">
                      <HelpCircle className="h-4 w-4" />
                      Quizzes ({selectedLesson.quizzes?.length || 0})
                    </TabsTrigger>
                    <TabsTrigger value="all-videos" className="flex items-center gap-2">
                      <Video className="h-4 w-4" />
                      All Videos (
                      {selectedLesson.videos.length +
                        selectedLesson.notes.reduce((acc, note) => acc + (note.videos?.length || 0), 0)}
                      )
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="videos" className="mt-6 h-full">
                    <div className="grid gap-6 md:grid-cols-3">
                      {selectedLesson.videos.map((video) => (
                        <Card
                          key={video.id}
                          className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                          onClick={() => handleVideoClick(video)}
                        >
                          <div className="relative">
                            <img
                              src={video.thumbnail || "/placeholder.svg"}
                              alt={video.title}
                              className="w-full h-48 object-cover"
                            />
                            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                              <Button size="lg" className="rounded-full">
                                <Play className="h-6 w-6" />
                              </Button>
                            </div>
                            <Badge className="absolute top-2 right-2 bg-black/70">{video.duration}</Badge>
                          </div>
                          <CardContent className="p-4">
                            <h3 className="font-semibold">{video.title}</h3>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="notes" className="mt-6 h-full">
                    <Scroll className="h-full">
                      <div className="space-y-6 pb-6">
                        {selectedLesson.notes.map((note) => (
                          <Card key={note.id} className="overflow-hidden">
                            <CardHeader className="pb-3">
                              <div className="flex items-center justify-between">
                                <CardTitle className="text-lg">{note.title}</CardTitle>
                                <Button variant="outline" size="sm">
                                  <Download className="h-4 w-4 mr-2" />
                                  Download
                                </Button>
                              </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                              <p className="text-muted-foreground leading-relaxed">{note.content}</p>

                              {/* Related Videos for this Note */}
                              {note.videos && note.videos.length > 0 && (
                                <div className="pt-4 border-t">
                                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                                    <Video className="h-4 w-4" />
                                    Related Videos ({note.videos.length})
                                  </h4>
                                  <div className="grid gap-4 sm:grid-cols-2">
                                    {note.videos.map((video) => (
                                      <Card
                                        key={video.id}
                                        className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                                        onClick={() => handleVideoClick(video)}
                                      >
                                        <div className="relative">
                                          <img
                                            src={video.thumbnail || "/placeholder.svg"}
                                            alt={video.title}
                                            className="w-full h-32 object-cover"
                                          />
                                          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                            <Button size="sm" className="rounded-full">
                                              <Play className="h-4 w-4" />
                                            </Button>
                                          </div>
                                          <Badge className="absolute top-2 right-2 bg-black/70 text-xs">
                                            {video.duration}
                                          </Badge>
                                        </div>
                                        <CardContent className="p-3">
                                          <h5 className="font-medium text-sm leading-tight">{video.title}</h5>
                                        </CardContent>
                                      </Card>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </Scroll>
                  </TabsContent>

                  <TabsContent value="quizzes" className="mt-6 h-full">
                    <Scroll className="h-full">
                      <div className="space-y-6 pb-6">
                        {selectedLesson.quizzes && selectedLesson.quizzes.length > 0 ? (
                          selectedLesson.quizzes.map((quiz) => (
                            <Card key={quiz.id} className="overflow-hidden">
                              <CardHeader>
                                <div className="flex items-center justify-between">
                                  <div>
                                    <CardTitle className="flex items-center gap-2">
                                      <HelpCircle className="h-5 w-5" />
                                      {quiz.title}
                                    </CardTitle>
                                    <p className="text-sm text-muted-foreground mt-1">{quiz.description}</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    {quiz.isCompleted && (
                                      <Badge
                                        variant="default"
                                        className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                                      >
                                        Completed
                                      </Badge>
                                    )}
                                    {quiz.userScore && <Badge variant="secondary">Score: {quiz.userScore}%</Badge>}
                                  </div>
                                </div>
                              </CardHeader>
                              <CardContent className="space-y-4">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                  <div className="flex items-center gap-2">
                                    <Clock className="h-4 w-4 text-muted-foreground" />
                                    <span>{quiz.duration}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <HelpCircle className="h-4 w-4 text-muted-foreground" />
                                    <span>{quiz.totalQuestions} questions</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Badge variant="outline" className="text-xs">
                                      Pass: {quiz.passingScore}%
                                    </Badge>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <span className="text-xs text-muted-foreground">
                                      {quiz.attempts}/{quiz.maxAttempts} attempts
                                    </span>
                                  </div>
                                </div>

                                {quiz.isCompleted && quiz.userScore && (
                                  <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                      <span>Your Score</span>
                                      <span
                                        className={
                                          quiz.userScore >= quiz.passingScore ? "text-green-600" : "text-red-600"
                                        }
                                      >
                                        {quiz.userScore}%
                                      </span>
                                    </div>
                                    <Progress
                                      value={quiz.userScore}
                                      className={`h-2 ${quiz.userScore >= quiz.passingScore ? "bg-green-100" : "bg-red-100"}`}
                                    />
                                  </div>
                                )}

                                <div className="flex items-center justify-between pt-2">
                                  <div className="text-sm text-muted-foreground">
                                    {quiz.isCompleted
                                      ? `Completed with ${quiz.userScore}% score`
                                      : quiz.attempts > 0
                                        ? `${quiz.maxAttempts - quiz.attempts} attempts remaining`
                                        : "Ready to start"}
                                  </div>
                                  <Button
                                    onClick={() => handleQuizClick(quiz as any)}
                                    disabled={quiz.attempts >= quiz.maxAttempts && !quiz.isCompleted}
                                    variant={quiz.isCompleted ? "outline" : "default"}
                                  >
                                    {quiz.isCompleted
                                      ? "Review Quiz"
                                      : quiz.attempts > 0
                                        ? "Retake Quiz"
                                        : "Start Quiz"}
                                  </Button>
                                </div>
                              </CardContent>
                            </Card>
                          ))
                        ) : (
                          <div className="text-center py-12">
                            <HelpCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                            <h3 className="text-lg font-semibold mb-2">No Quizzes Available</h3>
                            <p className="text-muted-foreground">
                              There are no quizzes for this lesson yet. Check back later!
                            </p>
                          </div>
                        )}
                      </div>
                    </Scroll>
                  </TabsContent>

                  <TabsContent value="all-videos" className="mt-6 h-full">
                    <Scroll className="h-full">
                      <div className="space-y-6 pb-6">
                        {/* Lesson Videos Section */}
                        {selectedLesson.videos.length > 0 && (
                          <div>
                            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                              <Play className="h-5 w-5" />
                              Lesson Overview Videos
                            </h3>
                            <div className="grid gap-6 md:grid-cols-2">
                              {selectedLesson.videos.map((video) => (
                                <Card
                                  key={video.id}
                                  className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                                  onClick={() => handleVideoClick(video)}
                                >
                                  <div className="relative">
                                    <img
                                      src={video.thumbnail || "/placeholder.svg"}
                                      alt={video.title}
                                      className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                      <Button size="lg" className="rounded-full">
                                        <Play className="h-6 w-6" />
                                      </Button>
                                    </div>
                                    <Badge className="absolute top-2 right-2 bg-black/70">{video.duration}</Badge>
                                  </div>
                                  <CardContent className="p-4">
                                    <h3 className="font-semibold">{video.title}</h3>
                                  </CardContent>
                                </Card>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Note-specific Videos Sections */}
                        {selectedLesson.notes.map(
                          (note) =>
                            note.videos &&
                            note.videos.length > 0 && (
                              <div key={note.id}>
                                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                  <FileText className="h-5 w-5" />
                                  {note.title} - Related Videos
                                </h3>
                                <div className="grid gap-4 md:grid-cols-3">
                                  {note.videos.map((video) => (
                                    <Card
                                      key={video.id}
                                      className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                                      onClick={() => handleVideoClick(video)}
                                    >
                                      <div className="relative">
                                        <img
                                          src={video.thumbnail || "/placeholder.svg"}
                                          alt={video.title}
                                          className="w-full h-36 object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                          <Button size="sm" className="rounded-full">
                                            <Play className="h-4 w-4" />
                                          </Button>
                                        </div>
                                        <Badge className="absolute top-2 right-2 bg-black/70 text-xs">
                                          {video.duration}
                                        </Badge>
                                      </div>
                                      <CardContent className="p-3">
                                        <h4 className="font-medium text-sm leading-tight">{video.title}</h4>
                                      </CardContent>
                                    </Card>
                                  ))}
                                </div>
                              </div>
                            ),
                        )}
                      </div>
                    </Scroll>
                  </TabsContent>
                </Tabs>
              </div>
            </>
          )}
        </div>
        {showRightbar && <div className="w-80 border-l bg-muted/30 flex flex-col">
          <div className="p-4 border-b">
            <h3 className="font-semibold mb-2">Chapter Progress</h3>
            <Progress value={progressPercentage} className="mb-2" />
            <p className="text-sm text-muted-foreground">
              {chapterData.completedLessons} of {chapterData.totalLessons} lessons completed
            </p>
          </div>

          <Button onClick={() => setShowRightbar(false)}>Close</Button> 

          <Scroll className="flex-1">
            <div className="p-4 space-y-2">
              {chapterData.lessons.map((lesson) => (
                <Card
                  key={lesson.id}
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    selectedLessonId === lesson.id ? "ring-2 ring-primary" : ""
                  }`}
                  onClick={() => setSelectedLessonId(lesson.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1">
                        {lesson.isCompleted ? (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        ) : (
                          <Circle className="h-5 w-5 text-muted-foreground" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm leading-tight">{lesson.title}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <Clock className="h-3 w-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{lesson.duration}</span>
                        </div>
                        <div className="flex items-center gap-4 mt-2">
                          <div className="flex items-center gap-1">
                            <FileText className="h-3 w-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">{lesson.notes.length} notes</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Video className="h-3 w-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">{lesson.videos.length} videos</span>
                          </div>
                          {lesson.quizzes?.length && <div className="flex items-center gap-1">
                            <HelpCircle className="h-3 w-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">{lesson.quizzes?.length || 0} quizzes</span>
                          </div>}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Scroll>
        </div>}
        {!showRightbar && <Button onClick={() => setShowRightbar(true)}>Open</Button>}
      </div>

      {/* Video Player Modal */}
      {selectedVideo && (
        <VideoPlayerModal isOpen={videoModalOpen} onClose={() => setVideoModalOpen(false)} video={selectedVideo} />
      )}

      {/* Quiz Modal */}
      {selectedQuiz && (
        <QuizModal
          quiz={selectedQuiz}
          isOpen={quizModalOpen}
          onClose={() => {
            setQuizModalOpen(false)
            setSelectedQuiz(null)
          }}
          onQuizComplete={(score) => {
            // Handle quiz completion
            console.log("Quiz completed with score:", score)
          }}
        />
      )}
    </SidebarInset>
  )
}
