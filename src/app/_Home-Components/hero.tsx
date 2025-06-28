import Image from "next/image"
import { Button } from "@/components/ui/button"
import { girl3d, group3d, teacher3d } from "@/assets/png"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { ArrowRight, GraduationCap, BookOpen, Users } from "lucide-react"
import Nav from "./nav"

const HeroSection = () => {
    return (
        <section className="w-full relative z-20">
            <div className="relative">

                <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-fuchsia-50 to-violet-100 opacity-70" />

               <Nav/>
                <div className="container relative mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:py-32 pt-0">


                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                        <div className="flex flex-col justify-center space-y-8">
                            <div className="space-y-4">
                                <div className="inline-flex items-center rounded-full border border-rose-600/20 bg-rose-50 px-3 py-1 text-sm font-medium text-rose-600 shadow-sm">
                                    <span className="animate-pulse mr-1">●</span> Now Enrolling for Summer 2025
                                </div>
                                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                                    <span className="block text-gray-900">Unlock Your</span>
                                    <span className="block bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
                                        Learning Potential
                                    </span>
                                </h1>
                                <p className="mt-6 max-w-lg text-xl text-gray-600 sm:max-w-xl">
                                    Transform your future with our cutting-edge courses designed to help you master new skills and
                                    advance your career.
                                </p>
                            </div>

                            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                                <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700"
                                >
                                    Start Learning Now
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                                <Button size="lg" variant="outline" className="border-2">
                                    Explore Courses
                                </Button>
                            </div>

                            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                                <div className="flex items-center space-x-2">
                                    <GraduationCap className="h-5 w-5 text-rose-500" />
                                    <span className="text-sm font-medium">500+ Courses</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <BookOpen className="h-5 w-5 text-purple-500" />
                                    <span className="text-sm font-medium">Expert Instructors</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Users className="h-5 w-5 text-fuchsia-500" />
                                    <span className="text-sm font-medium">50K+ Students</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center">
                            <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-rose-500/20 to-purple-600/20 blur-2xl" />

                            {/* Carousel replacing the static image */}
                            <div className="relative w-full max-w-md rounded-xl ">
                                <Carousel className="w-full" opts={{ loop: true, duration: 1 }}>
                                    <CarouselContent className="shadow-none border-none ">
                                        <CarouselItem className="bg-transparent shadow-none">
                                            <div className="relative aspect-square  rounded-xl">
                                                <Image
                                                    src={girl3d}
                                                    alt="Students collaborating on a project"
                                                    fill
                                                    className="object-cover"
                                                    priority
                                                />
                                                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" /> */}
                                                <div className="absolute bottom-4 left-4 right-4">
                                                    <h3 className="text-xl font-bold text-white">Collaborative Learning</h3>
                                                    <p className="text-sm text-white/80">Work together to solve real-world problems</p>
                                                </div>
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="relative aspect-square overflow-hidden rounded-xl">
                                                <Image
                                                    src={group3d}
                                                    alt="Group study session"
                                                    fill
                                                    className="object-cover"
                                                    priority
                                                />
                                                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" /> */}
                                                <div className="absolute bottom-4 left-4 right-4">
                                                    <h3 className="text-xl font-bold text-white">Group Study Sessions</h3>
                                                    <p className="text-sm text-white/80">Learn faster with peer support</p>
                                                </div>
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="relative aspect-square overflow-hidden rounded-xl">
                                                <Image
                                                    src={girl3d}
                                                    alt="Modern workspace for learning"
                                                    fill
                                                    className="object-cover"
                                                    priority
                                                />
                                                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" /> */}
                                                <div className="absolute bottom-0 left-0 right-0 backdrop-blur-2xl p-2 px-4 backdrop-opacity-80 rounded-xl">
                                                    <h3 className="text-xl font-bold block bg-gradient-to-r from-gray-100 to-purple-600 bg-clip-text text-transparent">Modern Workspaces</h3>
                                                    <p className="text-sm  block bg-gradient-to-r from-gray-100 to-purple-600 bg-clip-text text-transparent">Designed for productivity and focus</p>
                                                </div>
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="relative aspect-square overflow-hidden rounded-xl">
                                                <Image
                                                    src={teacher3d}
                                                    alt="Student studying with laptop"
                                                    fill
                                                    className="object-cover"
                                                    priority
                                                />
                                                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" /> */}
                                                <div className="absolute bottom-4 left-4 right-4">
                                                    <h3 className="text-xl font-bold text-white">Flexible Learning</h3>
                                                    <p className="text-sm text-white/80">Study anytime, anywhere at your own pace</p>
                                                </div>
                                            </div>
                                        </CarouselItem>
                                    </CarouselContent>
                                    {/* <CarouselPrevious className="left-3 h-9 w-9 bg-white/80 hover:bg-white" /> */}
                                    {/* <CarouselNext className="right-3 h-9 w-9 bg-white/80 hover:bg-white" /> */}
                                </Carousel>

                                {/* Stats card */}
                                {/* <div className="absolute -bottom-5 -right-5 rounded-lg bg-white/90 p-4 shadow-lg backdrop-blur-sm sm:bottom-5 sm:right-5 z-10">
                                    <div className="flex flex-col items-center justify-center space-y-1 text-center">
                                        <span className="text-2xl font-bold text-gray-900">97%</span>
                                        <span className="text-xs text-gray-600">Completion Rate</span>
                                    </div>
                                </div> */}

                                {/* Floating elements for visual interest */}
                                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-rose-400/30 blur-xl" />
                                <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-purple-400/30 blur-xl" />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <div className="absolute -bottom-40 left-0 right-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
                    <path
                        fill="#ffffff"
                        stroke="currentColor"
                        strokeWidth="0"
                        d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                </svg>
            </div>

        </section>
    )
}

export default HeroSection