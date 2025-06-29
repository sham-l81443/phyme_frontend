"use client"
import React from 'react'
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lock, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import CustomCard1 from '@/components/common/custom-ui/custom-card'
import { Section,Scroll } from '@/components/common'
import { useParams } from 'next/navigation'

const ChaptersPage = () => {

    const {subject} = useParams()
    console.log(subject)

    const terms = [
        {
            id: 1,
            name: "Term 1",
            isLocked: false,
            chapters: [
                {
                    id: 1,
                    title: "Introduction to Physics",
                    description: "Basic concepts and fundamental principles of physics",
                    lessons: 8,
                    color: "bg-blue-100 dark:bg-blue-900/30",
                    textColor: "text-blue-800 dark:text-blue-200",
                    
                },
                {
                    id: 2,
                    title: "Motion and Forces",
                    description: "Understanding velocity, acceleration, and Newton's laws",
                    lessons: 12,
                    color: "bg-green-100 dark:bg-green-900/30",
                    textColor: "text-green-800 dark:text-green-200",
                },
                {
                    id: 3,
                    title: "Energy and Work",
                    description: "Kinetic energy, potential energy, and conservation laws",
                    lessons: 10,
                    color: "bg-purple-100 dark:bg-purple-900/30",
                    textColor: "text-purple-800 dark:text-purple-200",
                },
                {
                    id: 4,
                    title: "Waves and Sound",
                    description: "Wave properties, sound waves, and acoustic phenomena",
                    lessons: 9,
                    color: "bg-orange-100 dark:bg-orange-900/30",
                    textColor: "text-orange-800 dark:text-orange-200",
                },
            ],
        },
        {
            id: 2,
            name: "Term 2",
            isLocked: false,
            chapters: [
                {
                    id: 5,
                    title: "Electricity and Magnetism",
                    description: "Electric fields, magnetic fields, and electromagnetic induction",
                    lessons: 15,
                    color: "bg-rose-100 dark:bg-rose-900/30",
                    textColor: "text-rose-800 dark:text-rose-200",
                },
                {
                    id: 6,
                    title: "Light and Optics",
                    description: "Reflection, refraction, lenses, and optical instruments",
                    lessons: 11,
                    color: "bg-cyan-100 dark:bg-cyan-900/30",
                    textColor: "text-cyan-800 dark:text-cyan-200",
                },
                {
                    id: 7,
                    title: "Thermodynamics",
                    description: "Heat, temperature, and laws of thermodynamics",
                    lessons: 13,
                    color: "bg-amber-100 dark:bg-amber-900/30",
                    textColor: "text-amber-800 dark:text-amber-200",
                },
                {
                    id: 8,
                    title: "Atomic Structure",
                    description: "Atoms, electrons, and quantum mechanical principles",
                    lessons: 14,
                    color: "bg-indigo-100 dark:bg-indigo-900/30",
                    textColor: "text-indigo-800 dark:text-indigo-200",
                },
                {
                    id: 11,
                    title: "Astrophysics",
                    description: "Stars, galaxies, and the structure of the universe",
                    lessons: 12,
                    color: "bg-teal-100 dark:bg-teal-900/30",
                    textColor: "text-teal-800 dark:text-teal-200",
                },
                {
                    id: 12,
                    title: "Advanced Topics",
                    description: "Cutting-edge physics research and applications",
                    lessons: 20,
                    color: "bg-pink-100 dark:bg-pink-900/30",
                    textColor: "text-pink-800 dark:text-pink-200",
                },
            ],
        },
        {
            id: 3,
            name: "Term 3",
            isLocked: true,
            chapters: [
                {
                    id: 9,
                    title: "Nuclear Physics",
                    description: "Radioactivity, nuclear reactions, and particle physics",
                    lessons: 16,
                    color: "bg-emerald-100 dark:bg-emerald-900/30",
                    textColor: "text-emerald-800 dark:text-emerald-200",
                },
                {
                    id: 10,
                    title: "Modern Physics",
                    description: "Relativity, quantum mechanics, and contemporary theories",
                    lessons: 18,
                    color: "bg-violet-100 dark:bg-violet-900/30",
                    textColor: "text-violet-800 dark:text-violet-200",
                },
                {
                    id: 11,
                    title: "Astrophysics",
                    description: "Stars, galaxies, and the structure of the universe",
                    lessons: 12,
                    color: "bg-teal-100 dark:bg-teal-900/30",
                    textColor: "text-teal-800 dark:text-teal-200",
                },
                {
                    id: 12,
                    title: "Advanced Topics",
                    description: "Cutting-edge physics research and applications",
                    lessons: 20,
                    color: "bg-pink-100 dark:bg-pink-900/30",
                    textColor: "text-pink-800 dark:text-pink-200",
                },

            ],
        },
    ]
    return (
        <Section direction='column' className='!p-0'>
            <Section direction='row' className="p-4 grid grid-cols-1 flex-1 md:grid-cols-3 gap-6">
                {terms.map((term) => (
                    <Section direction='column' key={term.id} className="relative border-2 border-border h-full rounded-lg p-0">
                        {/* Term Header */}
                        <div className="mb-4 flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-100/10">
                            <h2 className="text-xl font-bold">{term.name}</h2>
                            {term.isLocked && (
                                <Badge variant="secondary" className="flex items-center gap-1">
                                    <Lock className="h-3 w-3" />
                                    Locked
                                </Badge>
                            )}
                        </div>

                        {/* Chapters Column */}
                        <Scroll className="flex flex-col gap-4 gap-y-6 relative p-4 hide-scrollbar">
                            {term.isLocked && (
                                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-10 rounded-lg flex items-center justify-center">
                                    <div className="text-center p-6">
                                        <Lock className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                                        <h3 className="text-lg font-semibold mb-2">Premium Content</h3>
                                        <p className="text-sm text-muted-foreground mb-4">
                                            Subscribe to access Term 3 chapters and advanced content
                                        </p>
                                        <Button size="sm">Upgrade Now</Button>
                                    </div>
                                </div>
                            )}

                            {term.chapters.map((chapter) => (
                                <CustomCard1
                                    key={chapter.id}
                                    href={`/subjects/${subject}/chapter/${chapter.title.split(" ").join("-")}`}
                                    cardClass='border-2 border-secondary'
                                    title={chapter.title}
                                    description={chapter.description}
                                    footerLabel="Lessons"
                                    footerValue={chapter.lessons}
                                    headerClass={`${chapter.color} ${chapter.textColor}`}
                                    headerTextClass={`${chapter.textColor}`}
                                />
                            ))}
                        </Scroll>
                    </Section>
                ))}
            </Section>
        </Section>
    )
}

export default ChaptersPage