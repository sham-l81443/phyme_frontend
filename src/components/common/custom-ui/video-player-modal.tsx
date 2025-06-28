"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Maximize,
  Clock,
  Flag,
  Save,
  Trash2,
  Edit,
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { VideoReviewSystem } from "./video-review-system"
import { Scroll } from "../scroll-wrapper"

interface VideoNote {
  id: string
  content: string
  timestamp: number
  importance: "low" | "medium" | "high"
  createdAt: Date
}

interface VideoReview {
  id: string
  content: string
  rating: number
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
}

interface VideoPlayerModalProps {
  isOpen: boolean
  onClose: () => void
  video: {
    id: number
    title: string
    duration: string
    thumbnail: string
    videoUrl: string
  }
}

export function VideoPlayerModal({ isOpen, onClose, video }: VideoPlayerModalProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(0.7)
  const [isMuted, setIsMuted] = useState(false)
  const [notes, setNotes] = useState<VideoNote[]>([])
  const [newNote, setNewNote] = useState("")
  const [importance, setImportance] = useState<"low" | "medium" | "high">("medium")
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null)
  const [editingNoteContent, setEditingNoteContent] = useState("")
  const [editingNoteImportance, setEditingNoteImportance] = useState<"low" | "medium" | "high">("medium")
  const [reviews, setReviews] = useState<VideoReview[]>([])
  const [newReview, setNewReview] = useState("")
  const [reviewType, setReviewType] = useState<"review" | "question">("review")
  const [rating, setRating] = useState(5)

  const videoRef = useRef<HTMLVideoElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)

  // Format time from seconds to MM:SS
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  }

  // Handle video time update
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime)
    }
  }

  // Handle video metadata loaded
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration)
    }
  }

  // Handle play/pause
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  // Handle seeking
  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (progressBarRef.current && videoRef.current) {
      const rect = progressBarRef.current.getBoundingClientRect()
      const pos = (e.clientX - rect.left) / rect.width
      videoRef.current.currentTime = pos * duration
    }
  }

  // Handle volume change
  const handleVolumeChange = (value: string) => {
    const newVolume = Number.parseFloat(value)
    setVolume(newVolume)
    if (videoRef.current) {
      videoRef.current.volume = newVolume
    }
    if (newVolume === 0) {
      setIsMuted(true)
    } else {
      setIsMuted(false)
    }
  }

  // Toggle mute
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  // Skip forward/backward
  const skip = (seconds: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime += seconds
    }
  }

  // Add a new note
  const addNote = () => {
    if (newNote.trim() === "") return

    const newNoteObj: VideoNote = {
      id: Date.now().toString(),
      content: newNote,
      timestamp: currentTime,
      importance,
      createdAt: new Date(),
    }

    setNotes([...notes, newNoteObj])
    setNewNote("")
    setImportance("medium")
  }

  // Delete a note
  const deleteNote = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id))
  }

  // Start editing a note
  const startEditNote = (note: VideoNote) => {
    setEditingNoteId(note.id)
    setEditingNoteContent(note.content)
    setEditingNoteImportance(note.importance)
  }

  // Save edited note
  const saveEditedNote = () => {
    if (!editingNoteId) return

    setNotes(
      notes.map((note) =>
        note.id === editingNoteId ? { ...note, content: editingNoteContent, importance: editingNoteImportance } : note,
      ),
    )
    setEditingNoteId(null)
  }

  // Seek to note timestamp
  const seekToTimestamp = (timestamp: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = timestamp
      if (!isPlaying) {
        videoRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  // Get importance badge color
  const getImportanceColor = (importance: "low" | "medium" | "high") => {
    switch (importance) {
      case "low":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
      case "medium":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
      case "high":
        return "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300"
    }
  }

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setIsPlaying(false)
      setCurrentTime(0)
    }
  }, [isOpen])

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="min-w-full h-full">
        <div className="flex flex-col lg:flex-row h-full">
          {/* Video Player Section */}
          <div className="lg:flex-1 lg:w-full bg-black">
            <div className="relative h-full flex flex-col">
              {/* Video Element */}
              <div className="flex-1 flex items-center justify-center">
                <video
                  ref={videoRef}
                  className="max-h-full max-w-full"
                  poster={video.thumbnail}
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                >
                  <source src={video.videoUrl || "https://example.com/sample-video.mp4"} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Video Controls */}
              <div className="bg-black/90 text-white p-4">
                <h3 className="text-lg font-semibold mb-2">{video.title}</h3>

                {/* Progress Bar */}
                <div
                  ref={progressBarRef}
                  className="h-2 bg-gray-700 rounded-full mb-2 cursor-pointer"
                  onClick={handleSeek}
                >
                  <div
                    className="h-full bg-primary rounded-full"
                    style={{ width: `${(currentTime / duration) * 100}%` }}
                  ></div>
                </div>

                {/* Time Display */}
                <div className="flex justify-between text-xs mb-2">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>

                {/* Control Buttons */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white hover:bg-white/20"
                      onClick={() => skip(-10)}
                    >
                      <SkipBack className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/20" onClick={togglePlay}>
                      {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white hover:bg-white/20"
                      onClick={() => skip(10)}
                    >
                      <SkipForward className="h-5 w-5" />
                    </Button>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/20" onClick={toggleMute}>
                      {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                    </Button>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={volume}
                      onChange={(e) => handleVolumeChange(e.target.value)}
                      className="w-20"
                    />
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                      <Maximize className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Notes Section */}
          <div className="lg:w-[30rem] border-l">
            <Tabs defaultValue="take-notes" className="h-full flex flex-col">
              <div className="border-b px-4">
                <TabsList className="w-full justify-start border-b-0 pt-2">
                  <TabsTrigger value="take-notes" className="data-[state=active]:bg-muted">
                    Take Notes
                  </TabsTrigger>
                  <TabsTrigger value="my-notes" className="data-[state=active]:bg-muted">
                    My Notes ({notes.length})
                  </TabsTrigger>
                  <TabsTrigger value="reviews" className="data-[state=active]:bg-muted">
                    Reviews & Questions
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="take-notes" className="flex-1 p-4 flex flex-col">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">Add Note</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-1"
                      onClick={() => setNewNote(`${newNote}[${formatTime(currentTime)}] `)}
                    >
                      <Clock className="h-3 w-3" />
                      Add Timestamp
                    </Button>
                    <div className="text-sm text-muted-foreground">Current: {formatTime(currentTime)}</div>
                  </div>
                  <Textarea
                    placeholder="Write your notes here..."
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                    className="min-h-[120px] mb-2"
                  />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Flag className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Importance:</span>
                      <Select value={importance} onValueChange={(value) => setImportance(value as any)}>
                        <SelectTrigger className="w-[120px] h-8">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button onClick={addNote}>
                      <Save className="h-4 w-4 mr-2" />
                      Save Note
                    </Button>
                  </div>
                </div>

                {/* Quick Notes Preview */}
                {notes.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-sm font-medium mb-2">Recent Notes</h4>
                    <div className="space-y-2">
                      {notes.slice(-3).map((note) => (
                        <div key={note.id} className="p-3 border rounded-md bg-muted/30 flex items-start gap-2">
                          <Badge
                            className={cn("shrink-0 cursor-pointer", getImportanceColor(note.importance))}
                            onClick={() => seekToTimestamp(note.timestamp)}
                          >
                            {formatTime(note.timestamp)}
                          </Badge>
                          <p className="text-sm line-clamp-2">{note.content}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="my-notes" className="flex-1 p-0 flex flex-col">
                <div className="p-4 border-b">
                  <h3 className="text-lg font-semibold">My Notes</h3>
                  <p className="text-sm text-muted-foreground">{notes.length} notes for this video</p>
                </div>

                <Scroll className="flex-1">
                  {notes.length === 0 ? (
                    <div className="p-8 text-center">
                      <p className="text-muted-foreground">No notes yet. Add notes while watching the video.</p>
                    </div>
                  ) : (
                    <div className="p-4 space-y-4">
                      {notes.map((note) => (
                        <div key={note.id} className="p-4 border rounded-md bg-card">
                          {editingNoteId === note.id ? (
                            <div className="space-y-3">
                              <Textarea
                                value={editingNoteContent}
                                onChange={(e) => setEditingNoteContent(e.target.value)}
                                className="min-h-[100px]"
                              />
                              <div className="flex items-center justify-between">
                                <Select
                                  value={editingNoteImportance}
                                  onValueChange={(value) => setEditingNoteImportance(value as any)}
                                >
                                  <SelectTrigger className="w-[120px] h-8">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="low">Low</SelectItem>
                                    <SelectItem value="medium">Medium</SelectItem>
                                    <SelectItem value="high">High</SelectItem>
                                  </SelectContent>
                                </Select>
                                <div className="flex gap-2">
                                  <Button variant="ghost" size="sm" onClick={() => setEditingNoteId(null)}>
                                    Cancel
                                  </Button>
                                  <Button size="sm" onClick={saveEditedNote}>
                                    Save
                                  </Button>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <>
                              <div className="flex items-center justify-between mb-2">
                                <Badge
                                  className={cn("cursor-pointer", getImportanceColor(note.importance))}
                                  onClick={() => seekToTimestamp(note.timestamp)}
                                >
                                  {formatTime(note.timestamp)}
                                </Badge>
                                <div className="flex items-center gap-1">
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8"
                                    onClick={() => startEditNote(note)}
                                  >
                                    <Edit className="h-4 w-4" />
                                  </Button>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8 text-destructive hover:text-destructive"
                                    onClick={() => deleteNote(note.id)}
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                </div>
                              </div>
                              <p className="text-sm whitespace-pre-wrap">{note.content}</p>
                              <div className="mt-2 text-xs text-muted-foreground">
                                {new Date(note.createdAt).toLocaleString()}
                              </div>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </Scroll>
              </TabsContent>
              <TabsContent value="reviews" className="flex-1 p-0 flex flex-col">
                <VideoReviewSystem currentTime={currentTime} onSeekToTimestamp={seekToTimestamp} />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
