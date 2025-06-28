"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, ThumbsUp, Send, Filter, Clock, HelpCircle, MessageSquare, Reply, Flag, MoreVertical } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Scroll } from "../scroll-wrapper"

interface VideoReview {
  id: string
  content: string
  rating?: number
  timestamp: number
  type: "review" | "question"
  isHelpful?: boolean
  helpfulCount: number
  createdAt: Date
  author: {
    name: string
    avatar?: string
  }
  replies?: VideoReview[]
  isResolved?: boolean
}

interface VideoReviewSystemProps {
  currentTime: number
  onSeekToTimestamp: (timestamp: number) => void
}

export function VideoReviewSystem({ currentTime, onSeekToTimestamp }: VideoReviewSystemProps) {
  const [reviews, setReviews] = useState<VideoReview[]>([
    {
      id: "1",
      content: "This video really helped me understand the concept! The explanation at 5:30 was particularly clear.",
      rating: 5,
      timestamp: 330,
      type: "review",
      helpfulCount: 12,
      createdAt: new Date("2024-01-15"),
      author: {
        name: "Sarah Johnson",
        avatar: "/placeholder.svg?height=32&width=32",
      },
    },
    {
      id: "2",
      content: "I'm confused about the part at 8:45. Could someone explain how the formula is derived?",
      timestamp: 525,
      type: "question",
      helpfulCount: 3,
      createdAt: new Date("2024-01-16"),
      author: {
        name: "Mike Chen",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      isResolved: false,
      replies: [
        {
          id: "2-1",
          content:
            "The formula comes from the basic principle we learned in the previous chapter. If you substitute the values step by step, it becomes clearer.",
          timestamp: 525,
          type: "review",
          helpfulCount: 5,
          createdAt: new Date("2024-01-16"),
          author: {
            name: "Dr. Smith",
            avatar: "/placeholder.svg?height=32&width=32",
          },
        },
      ],
    },
    {
      id: "3",
      content: "Great video overall, but the audio quality could be improved. Sometimes it's hard to hear clearly.",
      rating: 4,
      timestamp: 0,
      type: "review",
      helpfulCount: 8,
      createdAt: new Date("2024-01-17"),
      author: {
        name: "Alex Rivera",
        avatar: "/placeholder.svg?height=32&width=32",
      },
    },
    {
      id: "4",
      content: "What software was used to create the animations shown at 12:20? They look really professional!",
      timestamp: 740,
      type: "question",
      helpfulCount: 2,
      createdAt: new Date("2024-01-18"),
      author: {
        name: "Emma Wilson",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      isResolved: true,
    },
  ])

  const [newReview, setNewReview] = useState("")
  const [reviewType, setReviewType] = useState<"review" | "question">("review")
  const [rating, setRating] = useState(5)
  const [filterType, setFilterType] = useState<"all" | "review" | "question">("all")
  const [sortBy, setSortBy] = useState<"newest" | "oldest" | "helpful">("newest")
  const [replyingTo, setReplyingTo] = useState<string | null>(null)
  const [replyContent, setReplyContent] = useState("")

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  }

  const addReview = () => {
    if (newReview.trim() === "") return

    const newReviewObj: VideoReview = {
      id: Date.now().toString(),
      content: newReview,
      rating: reviewType === "review" ? rating : undefined,
      timestamp: currentTime,
      type: reviewType,
      helpfulCount: 0,
      createdAt: new Date(),
      author: {
        name: "You",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      isResolved: reviewType === "question" ? false : undefined,
    }

    setReviews([newReviewObj, ...reviews])
    setNewReview("")
    setRating(5)
  }

  const addReply = (parentId: string) => {
    if (replyContent.trim() === "") return

    const newReply: VideoReview = {
      id: `${parentId}-${Date.now()}`,
      content: replyContent,
      timestamp: currentTime,
      type: "review",
      helpfulCount: 0,
      createdAt: new Date(),
      author: {
        name: "You",
        avatar: "/placeholder.svg?height=32&width=32",
      },
    }

    setReviews(
      reviews.map((review) => {
        if (review.id === parentId) {
          return {
            ...review,
            replies: [...(review.replies || []), newReply],
          }
        }
        return review
      }),
    )

    setReplyContent("")
    setReplyingTo(null)
  }

  const toggleHelpful = (reviewId: string) => {
    setReviews(
      reviews.map((review) => {
        if (review.id === reviewId) {
          return {
            ...review,
            isHelpful: !review.isHelpful,
            helpfulCount: review.isHelpful ? review.helpfulCount - 1 : review.helpfulCount + 1,
          }
        }
        return review
      }),
    )
  }

  const markAsResolved = (reviewId: string) => {
    setReviews(
      reviews.map((review) => {
        if (review.id === reviewId && review.type === "question") {
          return { ...review, isResolved: !review.isResolved }
        }
        return review
      }),
    )
  }

  const filteredAndSortedReviews = reviews
    .filter((review) => filterType === "all" || review.type === filterType)
    .sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        case "oldest":
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        case "helpful":
          return b.helpfulCount - a.helpfulCount
        default:
          return 0
      }
    })

  const reviewStats = {
    total: reviews.length,
    reviews: reviews.filter((r) => r.type === "review").length,
    questions: reviews.filter((r) => r.type === "question").length,
    resolved: reviews.filter((r) => r.type === "question" && r.isResolved).length,
    avgRating:
      reviews.filter((r) => r.rating).reduce((acc, r) => acc + (r.rating || 0), 0) /
        reviews.filter((r) => r.rating).length || 0,
  }

  const StarRating = ({
    rating,
    onRatingChange,
    readonly = false,
  }: { rating: number; onRatingChange?: (rating: number) => void; readonly?: boolean }) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} ${!readonly ? "cursor-pointer hover:text-yellow-400" : ""}`}
            onClick={() => !readonly && onRatingChange?.(star)}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="h-full flex flex-col">
      {/* Stats Header */}
      <div className="p-4 border-b bg-muted/30">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold">{reviewStats.total}</div>
            <div className="text-xs text-muted-foreground">Total Feedback</div>
          </div>
          <div>
            <div className="flex items-center justify-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-2xl font-bold">{reviewStats.avgRating.toFixed(1)}</span>
            </div>
            <div className="text-xs text-muted-foreground">Average Rating</div>
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-3 text-sm">
          <div className="flex items-center gap-1">
            <MessageSquare className="h-3 w-3 text-blue-500" />
            <span>{reviewStats.reviews} Reviews</span>
          </div>
          <div className="flex items-center gap-1">
            <HelpCircle className="h-3 w-3 text-orange-500" />
            <span>{reviewStats.questions} Questions</span>
          </div>
          <div className="flex items-center gap-1">
            <Badge variant="outline" className="h-4 px-1 text-xs">
              {reviewStats.resolved}/{reviewStats.questions} Resolved
            </Badge>
          </div>
        </div>
      </div>

      <Tabs defaultValue="add" className="flex-1 flex flex-col">
        <div className="border-b px-4">
          <TabsList className="w-full justify-start border-b-0 pt-2">
            <TabsTrigger value="add" className="data-[state=active]:bg-muted">
              Add Feedback
            </TabsTrigger>
            <TabsTrigger value="browse" className="data-[state=active]:bg-muted">
              Browse ({reviewStats.total})
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="add" className="flex-1 p-4 flex flex-col">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-3">Share Your Feedback</h3>

              {/* Type Selection */}
              <div className="flex gap-2 mb-4">
                <Button
                  variant={reviewType === "review" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setReviewType("review")}
                  className="flex items-center gap-2"
                >
                  <MessageSquare className="h-4 w-4" />
                  Review
                </Button>
                <Button
                  variant={reviewType === "question" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setReviewType("question")}
                  className="flex items-center gap-2"
                >
                  <HelpCircle className="h-4 w-4" />
                  Question
                </Button>
              </div>

              {/* Rating (only for reviews) */}
              {reviewType === "review" && (
                <div className="mb-4">
                  <label className="text-sm font-medium mb-2 block">Rating</label>
                  <StarRating rating={rating} onRatingChange={setRating} />
                </div>
              )}

              {/* Timestamp */}
              <div className="flex items-center gap-2 mb-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1"
                  onClick={() => setNewReview(`${newReview}[${formatTime(currentTime)}] `)}
                >
                  <Clock className="h-3 w-3" />
                  Add Timestamp
                </Button>
                <div className="text-sm text-muted-foreground">Current: {formatTime(currentTime)}</div>
              </div>

              {/* Content */}
              <Textarea
                placeholder={
                  reviewType === "review"
                    ? "Share your thoughts about this video..."
                    : "Ask a question about the content..."
                }
                value={newReview}
                onChange={(e) => setNewReview(e.target.value)}
                className="min-h-[100px] mb-3"
              />

              <Button onClick={addReview} className="w-full">
                <Send className="h-4 w-4 mr-2" />
                {reviewType === "review" ? "Post Review" : "Ask Question"}
              </Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="browse" className="flex-1 p-0 flex flex-col">
          {/* Filters */}
          <div className="p-4 border-b">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <Select value={filterType} onValueChange={(value: any) => setFilterType(value)}>
                  <SelectTrigger className="w-[120px] h-8">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="review">Reviews</SelectItem>
                    <SelectItem value="question">Questions</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Select value={sortBy} onValueChange={(value: any) => setSortBy(value)}>
                <SelectTrigger className="w-[120px] h-8">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="oldest">Oldest</SelectItem>
                  <SelectItem value="helpful">Most Helpful</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Reviews List */}
          <Scroll className="flex-1">
            {filteredAndSortedReviews.length === 0 ? (
              <div className="p-8 text-center">
                <div className="text-muted-foreground">
                  {filterType === "all" ? "No feedback yet." : `No ${filterType}s yet.`}
                </div>
              </div>
            ) : (
              <div className="p-4 space-y-4">
                {filteredAndSortedReviews.map((review) => (
                  <Card key={review.id} className="overflow-hidden">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={review.author.avatar || "/placeholder.svg"} alt={review.author.name} />
                            <AvatarFallback>
                              {review.author.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-medium text-sm">{review.author.name}</span>
                              <Badge variant={review.type === "review" ? "default" : "secondary"} className="text-xs">
                                {review.type === "review" ? (
                                  <>
                                    <MessageSquare className="h-3 w-3 mr-1" />
                                    Review
                                  </>
                                ) : (
                                  <>
                                    <HelpCircle className="h-3 w-3 mr-1" />
                                    Question
                                  </>
                                )}
                              </Badge>
                              {review.type === "question" && (
                                <Badge variant={review.isResolved ? "default" : "destructive"} className="text-xs">
                                  {review.isResolved ? "Resolved" : "Open"}
                                </Badge>
                              )}
                            </div>
                            {review.rating && (
                              <div className="flex items-center gap-2 mb-2">
                                <StarRating rating={review.rating} readonly />
                              </div>
                            )}
                          </div>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Flag className="mr-2 h-4 w-4" />
                              Report
                            </DropdownMenuItem>
                            {review.type === "question" && (
                              <DropdownMenuItem onClick={() => markAsResolved(review.id)}>
                                {review.isResolved ? "Mark as Open" : "Mark as Resolved"}
                              </DropdownMenuItem>
                            )}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm leading-relaxed">{review.content}</p>

                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-4">
                          <span>{new Date(review.createdAt).toLocaleDateString()}</span>
                          {review.timestamp > 0 && (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-6 px-2 text-xs"
                              onClick={() => onSeekToTimestamp(review.timestamp)}
                            >
                              <Clock className="h-3 w-3 mr-1" />
                              {formatTime(review.timestamp)}
                            </Button>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-6 px-2 text-xs"
                            onClick={() => toggleHelpful(review.id)}
                          >
                            <ThumbsUp className={`h-3 w-3 mr-1 ${review.isHelpful ? "fill-current" : ""}`} />
                            {review.helpfulCount}
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-6 px-2 text-xs"
                            onClick={() => setReplyingTo(review.id)}
                          >
                            <Reply className="h-3 w-3 mr-1" />
                            Reply
                          </Button>
                        </div>
                      </div>

                      {/* Replies */}
                      {review.replies && review.replies.length > 0 && (
                        <div className="ml-6 space-y-3 pt-3 border-t">
                          {review.replies.map((reply) => (
                            <div key={reply.id} className="flex items-start gap-2">
                              <Avatar className="h-6 w-6">
                                <AvatarImage src={reply.author.avatar || "/placeholder.svg"} alt={reply.author.name} />
                                <AvatarFallback className="text-xs">
                                  {reply.author.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="font-medium text-xs">{reply.author.name}</span>
                                  <span className="text-xs text-muted-foreground">
                                    {new Date(reply.createdAt).toLocaleDateString()}
                                  </span>
                                </div>
                                <p className="text-xs text-muted-foreground">{reply.content}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Reply Input */}
                      {replyingTo === review.id && (
                        <div className="ml-6 pt-3 border-t">
                          <div className="flex gap-2">
                            <Textarea
                              placeholder="Write a reply..."
                              value={replyContent}
                              onChange={(e) => setReplyContent(e.target.value)}
                              className="min-h-[60px] text-sm"
                            />
                          </div>
                          <div className="flex justify-end gap-2 mt-2">
                            <Button variant="ghost" size="sm" onClick={() => setReplyingTo(null)}>
                              Cancel
                            </Button>
                            <Button size="sm" onClick={() => addReply(review.id)}>
                              Reply
                            </Button>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </Scroll>
        </TabsContent>
      </Tabs>
    </div>
  )
}
