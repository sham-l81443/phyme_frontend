"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
    User,
    Mail,
    Phone,
    Calendar,
    BookOpen,
    GraduationCap,
    Shield,
    CheckCircle,
    XCircle,
    Settings,
} from "lucide-react"
import { Scroll, Section } from "@/components/common"
import { useQuery } from "@tanstack/react-query"
import { apiHandler } from "@/utils/apiHandler"
import { TermData } from "../../term/page"

interface IUserData {
    id: string
    email: string
    name: string
    phone: string | null
    hasAcceptedTerms: boolean
    role: string
    isTermsAccepted: boolean
    classId: string | null
    isVerified: boolean
    registrationType: string
    syllabusId: string | null
    createdAt: string
    updatedAt: string
    class: {
        id: string
        name: string
        code: string
        description?: string
        isActive: boolean
        syllabusId: string
        createdAt: string
        updatedAt: string
    } | null
    syllabus: {
        id: string
        name: string
        code: string
        isActive: boolean
        createdAt: string
        updatedAt: string
        description?: string
    } | null
}

interface Term {
    id: string
    name: string
    code: string
    description: string
    isActive: boolean
    startDate: string
    endDate: string
    isEnrolled: boolean
}

// Mock user data
const mockUser: IUserData = {
    id: "user-123",
    email: "john.doe@example.com",
    name: "John Doe",
    phone: "+1 (555) 123-4567",
    hasAcceptedTerms: true,
    role: "student",
    isTermsAccepted: true,
    classId: "class-456",
    isVerified: true,
    registrationType: "email",
    syllabusId: "syllabus-789",
    createdAt: "2024-01-15T10:30:00Z",
    updatedAt: "2024-12-01T14:20:00Z",
    class: {
        id: "class-456",
        name: "Advanced Mathematics",
        code: "MATH-401",
        description: "Advanced calculus and linear algebra course",
        isActive: true,
        syllabusId: "syllabus-789",
        createdAt: "2024-01-01T00:00:00Z",
        updatedAt: "2024-01-01T00:00:00Z",
    },
    syllabus: {
        id: "syllabus-789",
        name: "Mathematics Curriculum 2024",
        code: "MATH-2024",
        isActive: true,
        createdAt: "2024-01-01T00:00:00Z",
        updatedAt: "2024-01-01T00:00:00Z",
        description: "Comprehensive mathematics curriculum for advanced students",
    },
}

// Mock terms data
const mockTerms: Term[] = [
    {
        id: "term-1",
        name: "Fall 2024",
        code: "FALL-2024",
        description: "Fall semester covering advanced topics in mathematics",
        isActive: true,
        startDate: "2024-09-01",
        endDate: "2024-12-15",
        isEnrolled: true,
    },
    {
        id: "term-2",
        name: "Spring 2025",
        code: "SPRING-2025",
        description: "Spring semester with practical applications and projects",
        isActive: true,
        startDate: "2025-01-15",
        endDate: "2025-05-15",
        isEnrolled: false,
    },
    {
        id: "term-3",
        name: "Summer 2025",
        code: "SUMMER-2025",
        description: "Intensive summer program for accelerated learning",
        isActive: true,
        startDate: "2025-06-01",
        endDate: "2025-08-15",
        isEnrolled: false,
    },
    {
        id: "term-4",
        name: "Fall 2025",
        code: "FALL-2025",
        description: "Advanced fall semester with research opportunities",
        isActive: false,
        startDate: "2025-09-01",
        endDate: "2025-12-15",
        isEnrolled: false,
    },
]

export default function UserDetailsPage() {
    const [user] = useState<IUserData>(mockUser)
    const [terms, setTerms] = useState<Term[]>(mockTerms)

    const handleTermEnrollment = (termId: string, isEnrolled: boolean) => {
        setTerms((prevTerms) => prevTerms.map((term) => (term.id === termId ? { ...term, isEnrolled } : term)))
    }

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        })
    }

    const getInitials = (name: string) => {
        return name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()
    }


  const { data, isLoading } = useQuery({
    queryKey: ["term"],
    queryFn: () => apiHandler({ method: "GET", url: "/term/all" }),
  })

    return (
       

    <Section className="">
        <Scroll>

            <div className="grid gap-6 md:grid-cols-2 p-4">
                {/* User Profile Card */}
                <Card>
                    <CardHeader>
                        <div className="flex items-center space-x-4">
                            <Avatar className="h-16 w-16">
                                <AvatarFallback className="text-lg font-semibold">{getInitials(user.name)}</AvatarFallback>
                            </Avatar>
                            <div>
                                <CardTitle className="text-xl mb-1">{user.name}</CardTitle>
                                <CardDescription className="flex items-center gap-2 ">
                                    <Badge variant={user.isVerified ? "default" : "secondary"}>
                                        {user.isVerified ? (
                                            <>
                                                <CheckCircle className="h-3 w-3 mr-1" />
                                                Verified
                                            </>
                                        ) : (
                                            <>
                                                <XCircle className="h-3 w-3 mr-1" />
                                                Unverified
                                            </>
                                        )}
                                    </Badge>
                                    <Badge variant="outline" className="capitalize">
                                        {user.role}
                                    </Badge>
                                </CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid gap-3">
                            <div className="flex items-center gap-3">
                                <Mail className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">{user.email}</span>
                            </div>
                            {user.phone && (
                                <div className="flex items-center gap-3">
                                    <Phone className="h-4 w-4 text-muted-foreground" />
                                    <span className="text-sm">{user.phone}</span>
                                </div>
                            )}
                            <div className="flex items-center gap-3">
                                <User className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm capitalize">{user.registrationType} Registration</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Calendar className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">Joined {formatDate(user.createdAt)}</span>
                            </div>
                        </div>

                        <Separator />

                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">Terms Accepted</span>
                                <Badge variant={user.hasAcceptedTerms ? "default" : "destructive"}>
                                    {user.hasAcceptedTerms ? "Yes" : "No"}
                                </Badge>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Academic Information Card */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <GraduationCap className="h-5 w-5" />
                            Academic Information
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {user.class ? (
                            <div className="space-y-3">
                                <div>
                                    <Label className="text-sm font-medium">Current Class</Label>
                                    <div className="mt-1">
                                        <div className="flex items-center justify-between">
                                            <span className="font-medium">{user.class.name}</span>
                                            <Badge variant={user.class.isActive ? "default" : "secondary"}>
                                                {user.class.isActive ? "Active" : "Inactive"}
                                            </Badge>
                                        </div>
                                        <p className="text-sm text-muted-foreground">{user.class.code}</p>
                                        {user.class.description && (
                                            <p className="text-sm text-muted-foreground mt-1">{user.class.description}</p>
                                        )}
                                    </div>
                                </div>

                                <Separator />

                                {user.syllabus && (
                                    <div>
                                        <Label className="text-sm font-medium">Syllabus</Label>
                                        <div className="mt-1">
                                            <div className="flex items-center justify-between">
                                                <span className="font-medium">{user.syllabus.name}</span>
                                                <Badge variant={user.syllabus.isActive ? "default" : "secondary"}>
                                                    {user.syllabus.isActive ? "Active" : "Inactive"}
                                                </Badge>
                                            </div>
                                            <p className="text-sm text-muted-foreground">{user.syllabus.code}</p>
                                            {user.syllabus.description && (
                                                <p className="text-sm text-muted-foreground mt-1">{user.syllabus.description}</p>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="text-center py-6">
                                <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                                <p className="text-sm text-muted-foreground">No class assigned</p>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>

            {/* Terms Enrollment Card */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Shield className="h-5 w-5" />
                        Term Enrollments
                    </CardTitle>
                    <CardDescription>Manage your enrollment status for different academic terms</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {data?.data?.map((term: TermData) => (
                            <div key={term.id} className="flex items-center justify-between p-4 border rounded-lg">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h4 className="font-medium">{term.name}</h4>
                                        <Badge variant="outline">{term.code}</Badge>
                                        <Badge variant={term.isActive ? "default" : "secondary"}>
                                            {term.isActive ? "Available" : "Unavailable"}
                                        </Badge>
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-2">{term.description}</p>
                                    {/* <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                        <span>Start: {formatDate(term.startDate)}</span>
                                        <span>End: {formatDate(term.endDate)}</span>
                                    </div> */}
                                </div>
                                {/* <div className="flex items-center space-x-2">
                                    <Label htmlFor={`term-${term.id}`} className="text-sm font-medium">
                                        {term.isEnrolled ? "Enrolled" : "Enroll"}
                                    </Label>
                                    <Switch
                                        id={`term-${term.id}`}
                                        checked={term.isEnrolled}
                                        onCheckedChange={(checked) => handleTermEnrollment(term.id, checked)}
                                        disabled={!term.isActive}
                                    />
                                </div> */}
                            </div>
                        ))}
                    </div>

                    {terms.filter((term) => term.isEnrolled).length > 0 && (
                        <div className="mt-6 p-4 bg-muted rounded-lg">
                            <h5 className="font-medium mb-2">Enrolled Terms Summary</h5>
                            <div className="flex flex-wrap gap-2">
                                {terms
                                    .filter((term) => term.isEnrolled)
                                    .map((term) => (
                                        <Badge key={term.id} variant="default">
                                            {term.name}
                                        </Badge>
                                    ))}
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>
        </Scroll>
    </Section>           
    )
}
