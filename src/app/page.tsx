import Image from "next/image"
import {
  GraduationCap,
  BookOpen,
  Users,
  ArrowRight,
  CheckCircle,
  Award,
  Globe,
  Lightbulb,
  Code,
  PieChart,
  Zap,
  Heart,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ChevronRight,
  Search
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { APP_1, APP_2, APP_3, APP_4, HERO_1 } from "@/assets/png"
import { Input } from "@/components/ui/input"
import { FaqAccordion } from "@/components/common/faq-accordion"


const faqs = [
  {
    question: "How do I get started with the learning platform?",
    answer:
      "Getting started is easy! Simply create an account, browse our course catalog, and enroll in any course that interests you. You can start learning immediately after enrollment. We recommend beginning with our free introductory courses to get familiar with our platform.",
    category: "general",
  },
  {
    question: "What types of courses do you offer?",
    answer:
      "We offer a wide range of courses across various disciplines including technology, business, creative arts, personal development, and more. Our courses range from beginner to advanced levels and include both self-paced and instructor-led options.",
    category: "courses",
  },
  {
    question: "Are the certificates recognized by employers?",
    answer:
      "Yes, our certificates are industry-recognized and valued by employers worldwide. Many of our courses are developed in partnership with leading companies and educational institutions to ensure the content meets industry standards and expectations.",
    category: "certification",
  },
  {
    question: "How much does it cost to take a course?",
    answer:
      "Course pricing varies depending on the type and length of the course. We offer free courses, subscription-based access to our full library, and premium individual courses. We also provide financial aid and scholarships for eligible students.",
    category: "pricing",
  },
  {
    question: "Can I access courses on mobile devices?",
    answer:
      "Our platform is fully responsive and optimized for mobile learning. You can access all course content, complete assignments, and track your progress on any device through our website or dedicated mobile app available for iOS and Android.",
    category: "technical",
  },
  {
    question: "How long do I have access to a course after purchasing?",
    answer:
      "Once you purchase a course, you have lifetime access to the course materials. This allows you to learn at your own pace and revisit the content whenever you need a refresher. For subscription-based access, you'll have access as long as your subscription is active.",
    category: "courses",
  },
  {
    question: "Do you offer refunds if I'm not satisfied?",
    answer:
      "Yes, we offer a 30-day money-back guarantee for most courses. If you're not completely satisfied with your learning experience, you can request a full refund within 30 days of purchase, no questions asked.",
    category: "pricing",
  },
  {
    question: "How do I get help if I'm stuck on a course?",
    answer:
      "We provide multiple support channels for our learners. You can post questions in the course discussion forums, join live Q&A sessions with instructors, connect with fellow students in our community, or contact our dedicated support team for technical assistance.",
    category: "technical",
  },
]
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="w-full relative">
        <div className="relative">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-fuchsia-50 to-violet-100 opacity-70" />

          <div className="container relative mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
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
                <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-rose-500/20 to-purple-600/20 blur-xl" />

                {/* Carousel replacing the static image */}
                <div className="relative w-full max-w-md overflow-hidden rounded-xl shadow-2xl">
                  <Carousel className="w-full" opts={{ loop: true, duration: 50 }}>
                    <CarouselContent>
                      <CarouselItem>
                        <div className="relative aspect-square overflow-hidden rounded-xl">
                          <Image
                            src={APP_4}
                            alt="Students collaborating on a project"
                            fill
                            className="object-cover"
                            priority
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-xl font-bold text-white">Collaborative Learning</h3>
                            <p className="text-sm text-white/80">Work together to solve real-world problems</p>
                          </div>
                        </div>
                      </CarouselItem>
                      <CarouselItem>
                        <div className="relative aspect-square overflow-hidden rounded-xl">
                          <Image
                            src={APP_2}
                            alt="Group study session"
                            fill
                            className="object-cover"
                            priority
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-xl font-bold text-white">Group Study Sessions</h3>
                            <p className="text-sm text-white/80">Learn faster with peer support</p>
                          </div>
                        </div>
                      </CarouselItem>
                      <CarouselItem>
                        <div className="relative aspect-square overflow-hidden rounded-xl">
                          <Image
                            src={APP_3}
                            alt="Modern workspace for learning"
                            fill
                            className="object-cover"
                            priority
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-xl font-bold text-white">Modern Workspaces</h3>
                            <p className="text-sm text-white/80">Designed for productivity and focus</p>
                          </div>
                        </div>
                      </CarouselItem>
                      <CarouselItem>
                        <div className="relative aspect-square overflow-hidden rounded-xl">
                          <Image
                            src={APP_1}
                            alt="Student studying with laptop"
                            fill
                            className="object-cover"
                            priority
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-xl font-bold text-white">Flexible Learning</h3>
                            <p className="text-sm text-white/80">Study anytime, anywhere at your own pace</p>
                          </div>
                        </div>
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="left-3 h-9 w-9 bg-white/80 hover:bg-white" />
                    <CarouselNext className="right-3 h-9 w-9 bg-white/80 hover:bg-white" />
                  </Carousel>

                  {/* Stats card */}
                  <div className="absolute -bottom-5 -right-5 rounded-lg bg-white/90 p-4 shadow-lg backdrop-blur-sm sm:bottom-5 sm:right-5 z-10">
                    <div className="flex flex-col items-center justify-center space-y-1 text-center">
                      <span className="text-2xl font-bold text-gray-900">97%</span>
                      <span className="text-xs text-gray-600">Completion Rate</span>
                    </div>
                  </div>

                  {/* Floating elements for visual interest */}
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-rose-400/30 blur-xl" />
                  <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-purple-400/30 blur-xl" />
                </div>
              </div>
            </div>

            {/* Wave divider */}
            
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

      {/* Our Services Section */}
      <section className="w-full py-20 bg-white z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center rounded-full border border-rose-600/20 bg-rose-50 px-3 py-1 text-sm font-medium text-rose-600 shadow-sm">
              <span className="mr-1">✨</span> What We Offer
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our{" "}
              <span className="bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
                Premium
              </span>{" "}
              Services
            </h2>
            <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
              Comprehensive learning solutions designed to help you achieve your educational and career goals
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Service 1 */}
            <div className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all hover:shadow-xl">
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-rose-100 to-rose-200 opacity-70 blur-2xl transition-all group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-rose-600 text-white">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Online Courses</h3>
                <p className="mb-4 text-muted-foreground">
                  Access over 500 professionally designed courses taught by industry experts.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-rose-500" />
                    <span className="text-sm">Self-paced learning</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-rose-500" />
                    <span className="text-sm">HD video content</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-rose-500" />
                    <span className="text-sm">Downloadable resources</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 2 */}
            <div className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all hover:shadow-xl">
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-fuchsia-100 to-fuchsia-200 opacity-70 blur-2xl transition-all group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-fuchsia-600 text-white">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Live Workshops</h3>
                <p className="mb-4 text-muted-foreground">
                  Interactive sessions with instructors and peers to deepen your understanding.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-fuchsia-500" />
                    <span className="text-sm">Real-time interaction</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-fuchsia-500" />
                    <span className="text-sm">Hands-on exercises</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-fuchsia-500" />
                    <span className="text-sm">Collaborative projects</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 3 */}
            <div className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all hover:shadow-xl">
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 opacity-70 blur-2xl transition-all group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Certification Programs</h3>
                <p className="mb-4 text-muted-foreground">
                  Industry-recognized certifications to validate your skills and boost your resume.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-purple-500" />
                    <span className="text-sm">Accredited certificates</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-purple-500" />
                    <span className="text-sm">Exam preparation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-purple-500" />
                    <span className="text-sm">Career advancement</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 4 */}
            <div className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all hover:shadow-xl">
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-rose-100 to-fuchsia-100 opacity-70 blur-2xl transition-all group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-fuchsia-500 text-white">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Personalized Mentorship</h3>
                <p className="mb-4 text-muted-foreground">
                  One-on-one guidance from industry professionals to accelerate your learning.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-rose-500" />
                    <span className="text-sm">Custom learning plans</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-rose-500" />
                    <span className="text-sm">Regular feedback</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-rose-500" />
                    <span className="text-sm">Career coaching</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 5 */}
            <div className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all hover:shadow-xl">
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-fuchsia-100 to-purple-100 opacity-70 blur-2xl transition-all group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-500 text-white">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Global Community</h3>
                <p className="mb-4 text-muted-foreground">
                  Connect with learners worldwide to share knowledge and build your network.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-fuchsia-500" />
                    <span className="text-sm">Discussion forums</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-fuchsia-500" />
                    <span className="text-sm">Networking events</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-fuchsia-500" />
                    <span className="text-sm">Study groups</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 6 */}
            <div className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all hover:shadow-xl">
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-purple-100 to-rose-100 opacity-70 blur-2xl transition-all group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-rose-500 text-white">
                  <Code className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Hands-On Projects</h3>
                <p className="mb-4 text-muted-foreground">
                  Apply your knowledge to real-world projects that showcase your skills to employers.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-purple-500" />
                    <span className="text-sm">Portfolio building</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-purple-500" />
                    <span className="text-sm">Real-world scenarios</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-purple-500" />
                    <span className="text-sm">Expert review</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700"
            >
              Explore All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="w-full py-20 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-purple-50 opacity-70" />

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-rose-200 opacity-20 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-64 w-64 rounded-full bg-purple-200 opacity-20 blur-3xl" />

        <div className="container relative mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-rose-500/10 to-purple-600/10 blur-xl" />
                <div className="relative grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="overflow-hidden rounded-lg relative">
                      <div className="absolute inset-0 bg-black/20"></div>
                      <Image
                        src={APP_2}
                        alt="Our campus"
                        width={300}
                        height={400}
                        className="h-auto w-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <div className="overflow-hidden rounded-lg relative">
                      <div className="absolute inset-0 bg-black/20"></div>
                      <Image
                        src={APP_4}
                        alt="Our students"
                        width={300}
                        height={300}
                        className="h-auto w-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="overflow-hidden rounded-lg relative">
                      <div className="absolute inset-0 bg-black/20"></div>  
                      <Image
                        src={APP_3}
                        alt="Our facilities"
                        width={300}
                        height={300}
                        className="h-auto w-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <div className="overflow-hidden rounded-lg relative">
                      <div className="absolute inset-0 bg-black/20"></div>  
                      <Image
                        src={APP_2}
                        alt="Learning environment"
                        width={300}
                        height={400}
                        className="h-auto w-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center rounded-full border border-rose-600/20 bg-rose-50 px-3 py-1 text-sm font-medium text-rose-600 shadow-sm mb-6">
                <span className="mr-1">🏆</span> About Us
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
                Transforming Education Since{" "}
                <span className="bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">2010</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We started with a simple mission: make high-quality education accessible to everyone. Today, we've
                helped over 1 million students transform their lives through learning.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-rose-100">
                    <Heart className="h-5 w-5 text-rose-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Our Mission</h3>
                    <p className="text-muted-foreground">
                      To empower individuals worldwide with the skills and knowledge they need to achieve their personal
                      and professional goals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-fuchsia-100">
                    <Zap className="h-5 w-5 text-fuchsia-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Our Vision</h3>
                    <p className="text-muted-foreground">
                      A world where anyone, anywhere has the power to transform their life through high-quality learning
                      experiences.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                    <PieChart className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Our Values</h3>
                    <p className="text-muted-foreground">
                      Excellence, innovation, inclusivity, and student success drive everything we do.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">1M+</div>
                  <div className="text-sm text-muted-foreground">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-muted-foreground">Courses</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">200+</div>
                  <div className="text-sm text-muted-foreground">Instructors</div>
                </div>
              </div>

              <Button size="lg" variant="outline" className="border-2">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="w-full py-20 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-40 right-0 h-80 w-80 rounded-full bg-rose-100 opacity-20 blur-3xl" />
        <div className="absolute bottom-40 left-0 h-80 w-80 rounded-full bg-purple-100 opacity-20 blur-3xl" />

        <div className="container relative mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center rounded-full border border-rose-600/20 bg-rose-50 px-3 py-1 text-sm font-medium text-rose-600 shadow-sm">
              <span className="mr-1">❓</span> Got Questions?
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
              Find answers to common questions about our learning platform, courses, and services
            </p>
          </div>

          <div className="grid  mx-auto max-w-5xl">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-rose-500/5 to-purple-600/5 blur-xl" />
              <div className="relative flex items-center justify-center w-full">
                <FaqAccordion
                  faqs={faqs.filter(
                    (faq) => faq.category === "general" || faq.category === "courses" || faq.category === "technical",
                  )}
                />
              </div>
            </div>

            {/* <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-purple-600/5 to-rose-500/5 blur-xl" />
              <div className="relative">
                <div className="flex items-center space-x-2 mb-6">
                  <Award className="h-5 w-5 text-purple-500" />
                  <h3 className="text-xl font-semibold">Pricing & Certification</h3>
                </div>
                <FaqAccordion
                  faqs={faqs.filter((faq) => faq.category === "pricing" || faq.category === "certification")}
                />
              </div>
            </div> */}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">
              Still have questions? We're here to help you every step of the way.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700"
            >
              Contact Support
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
      <footer className="w-full bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-500 via-fuchsia-500 to-purple-600" />
          <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-rose-500 opacity-5 blur-3xl" />
          <div className="absolute bottom-20 right-10 h-64 w-64 rounded-full bg-purple-500 opacity-5 blur-3xl" />

          <div className="container mx-auto px-4 py-16 relative">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 mb-12">
              {/* Column 1: About */}
              <div className="space-y-6">
                <div className="flex items-center space-x-2">
                  <GraduationCap className="h-8 w-8 text-rose-400" />
                  <span className="text-2xl font-bold bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent">
                    EduPlatform
                  </span>
                </div>
                <p className="text-gray-300">
                  Transforming lives through accessible, high-quality education. Join our global community of learners
                  and unlock your full potential.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors">
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors">
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors">
                    <Youtube className="h-5 w-5" />
                    <span className="sr-only">YouTube</span>
                  </a>
                </div>
              </div>

              {/* Column 2: Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors flex items-center">
                      <ChevronRight className="h-4 w-4 mr-2 text-rose-400" />
                      Courses
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors flex items-center">
                      <ChevronRight className="h-4 w-4 mr-2 text-rose-400" />
                      Certifications
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors flex items-center">
                      <ChevronRight className="h-4 w-4 mr-2 text-rose-400" />
                      Workshops
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors flex items-center">
                      <ChevronRight className="h-4 w-4 mr-2 text-rose-400" />
                      For Business
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors flex items-center">
                      <ChevronRight className="h-4 w-4 mr-2 text-rose-400" />
                      Become an Instructor
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors flex items-center">
                      <ChevronRight className="h-4 w-4 mr-2 text-rose-400" />
                      Career Services
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 3: Support */}
              <div>
                <h3 className="text-lg font-semibold mb-6 text-white">Support</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors flex items-center">
                      <ChevronRight className="h-4 w-4 mr-2 text-fuchsia-400" />
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors flex items-center">
                      <ChevronRight className="h-4 w-4 mr-2 text-fuchsia-400" />
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors flex items-center">
                      <ChevronRight className="h-4 w-4 mr-2 text-fuchsia-400" />
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors flex items-center">
                      <ChevronRight className="h-4 w-4 mr-2 text-fuchsia-400" />
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors flex items-center">
                      <ChevronRight className="h-4 w-4 mr-2 text-fuchsia-400" />
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors flex items-center">
                      <ChevronRight className="h-4 w-4 mr-2 text-fuchsia-400" />
                      Accessibility
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 4: Newsletter */}
              <div>
                <h3 className="text-lg font-semibold mb-6 text-white">Stay Updated</h3>
                <p className="text-gray-300 mb-4">
                  Subscribe to our newsletter for the latest courses, events, and learning resources.
                </p>
                <div className="space-y-4">
                  <div className="flex flex-col space-y-2">
                    <Input
                      type="email"
                      placeholder="Your email address"
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-rose-400"
                    />
                    <Button className="bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700">
                      Subscribe
                    </Button>
                  </div>
                  <p className="text-xs text-gray-400">
                    By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-t border-gray-800">
              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-rose-400 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-white">Email Us</h4>
                  <a href="mailto:info@eduplatform.com" className="text-gray-300 hover:text-rose-400 transition-colors">
                    info@eduplatform.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-fuchsia-400 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-white">Call Us</h4>
                  <a href="tel:+1234567890" className="text-gray-300 hover:text-rose-400 transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-purple-400 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-white">Visit Us</h4>
                  <p className="text-gray-300">123 Learning Street, Education City, EC 12345</p>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="pt-8 border-t border-gray-800 text-center">
              <p className="text-gray-400 text-sm">© {new Date().getFullYear()} EduPlatform. All rights reserved.</p>
              <div className="flex justify-center space-x-6 mt-4">
                <a href="#" className="text-gray-400 hover:text-rose-400 text-xs">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-rose-400 text-xs">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-rose-400 text-xs">
                  Cookie Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-rose-400 text-xs">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
