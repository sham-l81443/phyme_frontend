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
import { ExpertProfile } from "@/components/ui/expert-profile"


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
    
      <section className="w-full py-20 relative overflow-hidden">
        
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-purple-50 opacity-70" />

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-rose-200 opacity-20 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-64 w-64 rounded-full bg-purple-200 opacity-20 blur-3xl" />
        <div className="absolute -top-45 left-0 right-0 rotate-180">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
                <path
                  fill="#ffffff"
                  stroke="currentColor"
                  strokeWidth="0"
                  d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
        </div>
        <div className="container relative mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <div className="inline-flex items-center rounded-full border border-rose-600/20 bg-rose-50 px-3 py-1 text-sm font-medium text-rose-600 shadow-sm">
              <span className="mr-1">👩‍🏫</span> Meet Our Experts
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Learn From{" "}
              <span className="bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
                Industry Leaders
              </span>
            </h2>
            <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
              Our expert instructors bring years of real-world experience to help you master new skills and achieve your
              goals
            </p>
          </div>

          <div className="space-y-16">
            {/* Expert 1 */}
            <ExpertProfile
              name="Dr. Sarah Johnson"
              title="Lead Data Science Instructor"
              specialty="Data Science Expert"
              description="With over 10 years of experience in data science and machine learning, Dr. Johnson has helped more than 5,000 students master complex concepts and build successful careers in the field. Her research has been published in leading journals and she previously led data teams at Fortune 500 companies."
              qualifications={[
                "Ph.D. in Computer Science from Stanford University",
                "10+ years of industry experience at top tech companies",
                "Published researcher with 20+ peer-reviewed papers",
                "Specialized in making complex algorithms accessible to beginners",
              ]}
              imageSrc="/images/learning-1.jpg"
              color="rose"
            />

            {/* Expert 2 */}
            {/* <ExpertProfile
              name="Professor Michael Chen"
              title="Senior Web Development Instructor"
              specialty="Coding & Development"
              description="Professor Chen brings 15 years of software engineering experience to the classroom. He's built applications used by millions of people and has a passion for teaching the next generation of developers. His teaching methodology focuses on practical, hands-on projects that prepare students for real-world challenges."
              qualifications={[
                "Master's in Software Engineering from MIT",
                "Former Lead Developer at multiple successful startups",
                "Created 15+ production web applications with millions of users",
                "Mentored over 200 junior developers throughout his career",
              ]}
              imageSrc="/images/learning-2.jpg"
              color="fuchsia"
            /> */}

            {/* Expert 3 */}
            {/* <ExpertProfile
              name="Dr. Amara Patel"
              title="Business Strategy Instructor"
              specialty="Business & Leadership"
              description="Dr. Patel combines academic excellence with practical business experience. As a former CEO and current business consultant, she helps students understand both the theoretical frameworks and practical applications of business strategy. Her courses consistently receive the highest ratings for their real-world relevance."
              qualifications={[
                "MBA and Ph.D. in Business Administration from Harvard",
                "Former CEO of a multinational corporation",
                "Board member for several successful companies",
                "Author of 3 bestselling books on business strategy",
              ]}
              imageSrc="/images/learning-3.jpg"
              color="purple"
            /> */}
          </div>

          {/* <div className="mt-16 flex justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700"
            >
              Meet All Instructors
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div> */}
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



// import Link from "next/link"
// import Image from "next/image"
// import { ChevronRight, Star, CheckCircle, Clock, Award, Users, BookOpen } from "lucide-react"

// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// export default function Home() {
//   return (
//     <div className="flex min-h-screen flex-col">
//       <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//         <div className="container flex h-16 items-center justify-between">
//           <div className="flex items-center gap-2">
//             <BookOpen className="h-6 w-6 text-blue-600" />
//             <span className="text-xl font-bold">PhysicsAce</span>
//           </div>
//           <nav className="hidden md:flex gap-6">
//             <Link href="#about" className="text-sm font-medium hover:text-blue-600 transition-colors">
//               About
//             </Link>
//             <Link href="#why-choose-us" className="text-sm font-medium hover:text-blue-600 transition-colors">
//               Why Choose Us
//             </Link>
//             <Link href="#curriculum" className="text-sm font-medium hover:text-blue-600 transition-colors">
//               Curriculum
//             </Link>
//             <Link href="#reviews" className="text-sm font-medium hover:text-blue-600 transition-colors">
//               Reviews
//             </Link>
//             <Link href="#pricing" className="text-sm font-medium hover:text-blue-600 transition-colors">
//               Pricing
//             </Link>
//             <Link href="#faq" className="text-sm font-medium hover:text-blue-600 transition-colors">
//               FAQ
//             </Link>
//           </nav>
//           <Button className="hidden md:inline-flex">Contact Us</Button>
//           <Button variant="outline" size="icon" className="md:hidden">
//             <span className="sr-only">Toggle menu</span>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="h-6 w-6"
//             >
//               <line x1="4" x2="20" y1="12" y2="12" />
//               <line x1="4" x2="20" y1="6" y2="6" />
//               <line x1="4" x2="20" y1="18" y2="18" />
//             </svg>
//           </Button>
//         </div>
//       </header>
//       <main className="flex-1"> 
//       <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-blue-100">
//           <div className="container px-4 md:px-6">
//             <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
//               <div className="space-y-4">
//                 <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
//                   Class 9 Physics Tuition
//                 </div>
//                 <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
//                   Master Physics with Expert Online Tuition for Class 9
//                 </h1>
//                 <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                   Personalized online classes to help you excel in Physics. Build a strong foundation with our experienced tutors.
//                 </p>
//                 <div className="flex flex-col gap-2 min-[400px]:flex-row">
//                   <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
//                     Join Now <ChevronRight className="ml-1 h-4 w-4" />
//                   </Button>
//                   <Button size="lg" variant="outline">
//                     Book a Free Demo
//                   </Button>
//                 </div>
//                 <div className="flex items-center gap-4 pt-4">
//                   <div className="flex items-center gap-1">
//                     <Award className="h-5 w-5 text-yellow-500" />
//                     <span className="text-sm font-medium">5+ Years Experience</span>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <Users className="h-5 w-5 text-blue-500" />
//                     <span className="text-sm font-medium">1000+ Students Taught</span>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <CheckCircle className="h-5 w-5 text-green-500" />
//                     <span className="text-sm font-medium">Board-Specific</span>
//                   </div>
//                 </div>
//               </div>
//               <div className="mx-auto lg:mx-0 relative">
//                 <Image
//                   src="/placeholder.svg?height=400&width=600"
//                   width={600}
//                   height={400}
//                   alt="Physics class illustration"
//                   className="rounded-lg object-cover shadow-lg"
//                   priority
//                 />
//               </div>
//             </div>
//           </div>
//         </section>
//         <section id="about" className="w-full py-12 md:py-24 lg:py-32">
//           <div className="container px-4 md:px-6">
//             <div className="flex flex-col items-center justify-center space-y-4 text-center">
//               <div className="space-y-2">
//                 <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
//                   About the Tutor
//                 </div>
//                 <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
//                   Meet Your Physics Expert
//                 </h2>
//                 <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                   Learn from an experienced educator dedicated to helping students excel in Physics
//                 </p>
//               </div>
//             </div>
//             <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
//               <div className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last">
//                 <Image
//                   src="/placeholder.svg?height=400&width=400"
//                   width={400}
//                   height={400}
//                   alt="Physics Tutor"
//                   className="rounded-full object-cover shadow-lg"
//                 />
//               </div>
//               <div className="flex flex-col justify-center space-y-4">
//                 <h3 className="text-2xl font-bold">Dr. Rajesh Kumar</h3>
//                 <p className="text-gray-500">
//                   With over 5 years of teaching experience and a Ph.D. in Physics, Dr. Kumar has helped more than 1000 students achieve excellence in their board exams and competitive tests.
//                 </p>
//                 <ul className="grid gap-2">
//                   <li className="flex items-center gap-2">
//                     <CheckCircle className="h-5 w-5 text-green-500" />
//                     <span>Ph.D. in Physics from IIT Delhi</span>
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <CheckCircle className="h-5 w-5 text-green-500" />
//                     <span>5+ years of teaching experience</span>
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <CheckCircle className="h-5 w-5 text-green-500" />
//                     <span>Specialized in simplifying complex concepts</span>
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <CheckCircle className="h-5 w-5 text-green-500" />
//                     <span>Proven track record of student success</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </section>
//         <section id="why-choose-us" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
//           <div className="container px-4 md:px-6">
//             <div className="flex flex-col items-center justify-center space-y-4 text-center">
//               <div className="space-y-2">
//                 <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
//                   Why Choose Us
//                 </div>
//                 <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
//                   The PhysicsAce Advantage
//                 </h2>
//                 <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                   What makes our online Physics tuition stand out from the rest
//                 </p>
//               </div>
//             </div>
//             <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
//               <Card>
//                 <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
//                   <div className="rounded-full bg-blue-100 p-3">
//                     <Users className="h-6 w-6 text-blue-600" />
//                   </div>
//                   <h3 className="text-xl font-bold">Personalized Learning</h3>
//                   <p className="text-gray-500">
//                     Customized teaching approach based on your learning style and pace
//                   </p>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
//                   <div className="rounded-full bg-blue-100 p-3">
//                     <BookOpen className="h-6 w-6 text-blue-600" />
//                   </div>
//                   <h3 className="text-xl font-bold">Board-Specific Preparation</h3>
//                   <p className="text-gray-500">
//                     Tailored curriculum aligned with your specific board requirements
//                   </p>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
//                   <div className="rounded-full bg-blue-100 p-3">
//                     <Clock className="h-6 w-6 text-blue-600" />
//                   </div>
//                   <h3 className="text-xl font-bold">Flexible Schedules</h3>
//                   <p className="text-gray-500">
//                     Choose class timings that work best for your schedule
//                   </p>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
//                   <div className="rounded-full bg-blue-100 p-3">
//                     <Award className="h-6 w-6 text-blue-600" />
//                   </div>
//                   <h3 className="text-xl font-bold">Regular Assessments</h3>
//                   <p className="text-gray-500">
//                     Frequent tests and feedback to track your progress
//                   </p>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
//                   <div className="rounded-full bg-blue-100 p-3">
//                     <CheckCircle className="h-6 w-6 text-blue-600" />
//                   </div>
//                   <h3 className="text-xl font-bold">Doubt Clearing Sessions</h3>
//                   <p className="text-gray-500">
//                     Dedicated time for resolving your questions and difficulties
//                   </p>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
//                   <div className="rounded-full bg-blue-100 p-3">
//                     <BookOpen className="h-6 w-6 text-blue-600" />
//                   </div>
//                   <h3 className="text-xl font-bold">Study Materials</h3>
//                   <p className="text-gray-500">
//                     Comprehensive notes, practice problems, and visual aids
//                   </p>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </section>
//         <section id="curriculum" className="w-full py-12 md:py-24 lg:py-32">
//           <div className="container px-4 md:px-6">
//             <div className="flex flex-col items-center justify-center space-y-4 text-center">
//               <div className="space-y-2">
//                 <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
//                   Course Curriculum
//                 </div>
//                 <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
//                   Class 9 Physics Topics Covered
//                 </h2>
//                 <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                   Comprehensive coverage of the entire Class 9 Physics syllabus
//                 </p>
//               </div>
//             </div>
//             <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
//               <Card>
//                 <CardContent className="p-6">
//                   <h3 className="text-xl font-bold mb-4">Motion</h3>
//                   <ul className="space-y-2">
//                     <li className="flex items-center gap-2">
//                       <CheckCircle className="h-5 w-5 text-green-500" />
//                       <span>Distance and displacement</span>
//                     </li>
//                     <li className="flex items-center gap-2">
//                       <CheckCircle className="h-5 w-5 text-green-500" />
//                       <span>Velocity and speed</span>
//                     </li>
//                     <li className="flex items-center gap-2">
//                       <CheckCircle className="h-5 w-5 text-green-500" />
//                       <span>Acceleration and equations of motion</span>
//                     </li>
//                     <li className="flex items-center gap-2">
//                       <CheckCircle className="h-5 w-5 text-green-500" />
//                       <span>Graphical representation of motion</span>
//                     </li>
//                   </ul>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardContent className="p-6">
//                   <h3 className="text-xl font-bold mb-4">Force and Laws of Motion</h3>
//                   <ul className="space-y-2">
//                     <li className="flex items-center gap-2">
//                       <CheckCircle className="h-5 w-5 text-green-500" />
//                       <span>Balanced and unbalanced forces</span>
//                     </li>
//                     <li className="flex items-center gap-2">
//                       <CheckCircle className="h-5 w-5 text-green-500" />
//                       <span>Newton's first law of motion</span>
//                     </li>
//                     <li className="flex items-center gap-2">
//                       <CheckCircle className="h-5 w-5 text-green-500" />
//                       <span>Newton's second law of motion</span>
//                     </li>
//                     <li className="flex items-center gap-2">
//                       <CheckCircle className="h-5 w-5 text-green-500" />
//                       <span>Newton's third law of motion</span>
//                     </li>
//                   </ul>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardContent className="p-6">
//                   <h3 className="text-xl font-bold mb-4">Gravitation</h3>
//                   <ul className="space-y-2">
//                     <li className="flex items-center gap-2">
//                       <CheckCircle className="h-5 w-5 text-green-500" />
//                       <span>Universal law of gravitation</span>
//                     </li>
//                     <li className="flex items-center gap-2">
//                       <CheckCircle className="h-5 w-5 text-green-500" />
//                       <span>Free fall and acceleration due to gravity</span>
//                     </li>
//                     <li className="flex items-center gap-2">
//                       <CheckCircle className="h-5 w-5 text-green-500" />
//                       <span>Mass and weight</span>
//                     </li>
//                     <li className="flex items-center gap-2">
//                       <CheckCircle className="h-5 w-5 text-green-500" />
//                       <span>Floatation and Archimedes' principle</span>
//                     </li>
//                   </ul>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardContent className="p-6">
//                   <h3 className="text-xl font-bold mb-4">Work and Energy</h3>
//                   <ul className="space-y-2">
//                     <li className="flex items-center gap-2">
//                       <CheckCircle className="h-5 w-5 text-green-500" />
//                       <span>Work done by a force</span>
//                     </li>
//                     <li className="flex items-center gap-2">
//                       <CheckCircle className="h-5 w-5 text-green-500" />
//                       <span>Energy and its forms</span>
//                     </li>
//                     <li className="flex items-center gap-2">
//                       <CheckCircle className="h-5 w-5 text-green-500" />
//                       <span>Law of conservation of energy</span>
//                     </li>
//                     <li className="flex items-center gap-2">
//                       <CheckCircle className="h-5 w-5 text-green-500" />
//                       <span>Power and commercial unit of energy</span>
//                     </li>
//                   </ul>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardContent className="p-6">
//                   <h3 className="text-xl font-bold mb-4">Sound</h3>
//                   <ul className="space-y-2">
//                     <li className="flex items-center gap-2">
//                       <CheckCircle className="h-5 w-5 text-green-500" />
//                       <span>Production and propagation of sound</span>
//                     </li>
//                     <li className="flex items-center gap-2">
//                       <CheckCircle className="h-5 w-5 text-green-500" />
//                       <span>Characteristics of sound waves</span>
//                     </li>
//                     <li className="flex items-center gap-2">
//                       <CheckCircle className="h-5 w-5 text-green-500" />
//                       <span>Reflection of sound and echo</span>
//                     </li>
//                     <li className="flex items-center gap-2">
//                       <CheckCircle className="h-5 w-5 text-green-500" />
//                       <span>Range of hearing and applications of ultrasound</span>
//                     </li>
//                   </ul>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardContent className="p-6">
//                   <h3 className="text-xl font-bold mb-4">Additional Topics</h3>
//                   <ul className="space-y-2">
//                     <li className="flex items-center gap-2">
//                       <CheckCircle className="h-5 w-5 text-green-500" />
//                       <span>Practical applications of Physics</span>
//                     </li>
//                     <li className="flex items-center gap-2">
//                       <CheckCircle className="h-5 w-5 text-green-500" />
//                       <span>Numerical problem solving</span>
//                     </li>
//                     <li className="flex items-center gap-2">
//                       <CheckCircle className="h-5 w-5 text-green-500" />
//                       <span>Exam preparation strategies</span>
//                     </li>
//                     <li className="flex items-center gap-2">
//                       <CheckCircle className="h-5 w-5 text-green-500" />
//                       <span>Board-specific question patterns</span>
//                     </li>
//                   </ul>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </section>
//         <section id="reviews" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
//           <div className="container px-4 md:px-6">
//             <div className="flex flex-col items-center justify-center space-y-4 text-center">
//               <div className="space-y-2">
//                 <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
//                   Student Reviews
//                 </div>
//                 <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
//                   What Our Students Say
//                 </h2>
//                 <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                   Hear from our students who have excelled in their Physics exams
//                 </p>
//               </div>
//             </div>
//             <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
//               <Card>
//                 <CardContent className="p-6">
//                   <div className="flex items-center gap-2 mb-4">
//                     <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
//                     <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
//                     <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
//                     <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
//                     <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
//                   </div>
//                   <p className="text-gray-500 mb-4">
//                     "Dr. Kumar's teaching method made Physics so much easier to understand. I went from struggling with concepts to scoring 95% in my finals!"
//                   </p>
//                   <div className="flex items-center gap-4">
//                     <div className="rounded-full bg-gray-100 p-1">
//                       <Image
//                         src="/placeholder.svg?height=40&width=40"
//                         width={40}
//                         height={40}
//                         alt="Student"
//                         className="rounded-full"
//                       />
//                     </div>
//                     <div>
//                       <h4 className="font-medium">Ananya Sharma</h4>
//                       <p className="text-sm text-gray-500">Class 9 Student</p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardContent className="p-6">
//                   <div className="flex items-center gap-2 mb-4">
//                     <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
//                     <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
//                     <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
//                     <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
//                     <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
//                   </div>
//                   <p className="text-gray-500 mb-4">
//                     "The personalized attention and flexible schedule helped my son improve significantly. The visual teaching aids and practical examples made learning enjoyable."
//                   </p>
//                   <div className="flex items-center gap-4">
//                     <div className="rounded-full bg-gray-100 p-1">
//                       <Image
//                         src="/placeholder.svg?height=40&width=40"
//                         width={40}
//                         height={40}
//                         alt="Parent"
//                         className="rounded-full"
//                       />
//                     </div>
//                     <div>
//                       <h4 className="font-medium">Rajiv Mehta</h4>
//                       <p className="text-sm text-gray-500">Parent</p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardContent className="p-6">
//                   <div className="flex items-center gap-2 mb-4">
//                     <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
//                     <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
//                     <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
//                     <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
//                     <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
//                   </div>
//                   <p className="text-gray-500 mb-4">
//                     "I used to fear Physics, but after joining these classes, I've developed a genuine interest in the subject. The doubt-clearing sessions are particularly helpful."
//                   </p>
//                   <div className="flex items-center gap-4">
//                     <div className="rounded-full bg-gray-100 p-1">
//                       <Image
//                         src="/placeholder.svg?height=40&width=40"
//                         width={40}
//                         height={40}
//                         alt="Student"
//                         className="rounded-full"
//                       />
//                     </div>
//                     <div>
//                       <h4 className="font-medium">Arjun Singh</h4>
//                       <p className="text-sm text-gray-500">Class 9 Student</p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </section>
//         <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
//           <div className="container px-4 md:px-6">
//             <div className="flex flex-col items-center justify-center space-y-4 text-center">
//               <div className="space-y-2">
//                 <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
//                   Pricing Plans
//                 </div>
//                 <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
//                   Simple, Transparent Pricing
//                 </h2>
//                 <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                   Choose the plan that works best for your learning needs
//                 </p>
//               </div>
//             </div>
//             <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
//               <Card className="border-2 border-blue-100">
//                 <CardContent className="p-6">
//                   <div className="mb-4 text-center">
//                     <h3 className="text-2xl font-bold">Basic</h3>
//                     <p className="text-gray-500">For occasional learners</p>
//                     <div className="mt-4 text-4xl font-bold">₹1,500<span className="text-base font-normal text-gray-500">/month</span></div>
//                   </div>
//                   <ul className="space-y-2 mb-6">
//                     <li className="flex items-center gap-2">
//                       <CheckCircle className="h-5 w-5 text-green-500" />
//                       <span>4 classes per month</span>
//                     </li>
//                     <li className="flex items-center gap-2">
//                       <CheckCircle className="h-5 w-5 text-green-500" />
//                       <span>Basic study materials</span>
//                     </li>
//                     <li className="flex items-center gap-2">
//                       <CheckCircle className="h-5 w-5 text-green-500" />
//                       <span>Email support</span>
//                     </li>
//                     <li className="flex items-center gap-2">
//                       <CheckCircle className="h-5 w-5 text-green-500" />
//                       <span>Monthly progress report</span>
//                     </li>
//                   </ul>
//                   <Button className="w-full">Get Started</Button>
//                 </CardContent>
//               </Card>
//               <Card className="border-2 border-blue-600 shadow-lg">
//                 <CardContent className="p-6">
//                   <div className="absolute -top-4 right-0 left-0 mx-auto w-fit rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
//                     Most Popular
//                   </div>
//                   <div className="mb-4 text-center">
//                     <h3 className="text-2xl font-bold">Standard</h3>
//                     <p className="text-gray-500">For regular students</p>
//                     <div className="mt-4 text-4xl font-bold">₹2,500<span className="text-base font-normal text-gray-500">/month</span></div>
//                   </div>
//                   <ul className="space-y-2 mb-6">
//                     <li className="flex items-center gap-2">
//                       <CheckCircle className="h-5 w-5 text-green-500" />
//                       <span>8 classes per month</span>
//                     </li>
//                     <li className="flex items-center gap-2">
//                       <CheckCircle className="h-5 w-5 text-green-500" />
//                       <span>Comprehensive study materials</span>
//                     </li>
//                     <li className="flex items-center gap-2">
//                       <CheckCircle className="h-5 w-5 text-green-500" />
//                       <span>Weekly doubt clearing sessions</span>
//                     </li>
//                     <li className="flex items-center gap-2">
//                       <CheckCircle className="h-5 w-5 text-green-500" />
//                       <span>WhatsApp & email support</span>
//                     </li>
//                     <li className="flex items-center gap-2">
//                       <CheckCircle className="h-5 w-5 text-green-500" />
//                       <span>Bi-weekly progress reports</span>
//                     </li>
//                   </ul>
//                   <Button className="w-full bg-blue-600 hover:bg-blue-700">Get Started</Button>
//                 </CardContent>
//               </Card>
//               <Card className="border-2 border-blue-100">
//                 <CardContent className="p-6">
//                   <div className="mb-4 text-center">
//                     <h3 className="text-2xl font-bold">Premium</h3>
//                     <p className="text-gray-500">For serious learners</p>
//                     <div className="mt-4 text-4xl font-bold">₹4,000<span className="text-base font-normal text-gray-500">/month</span></div>
//                   </div>
//                   <ul className="space-y-2 mb-6">
//                     <li className="flex items-center gap-2">
//                       <CheckCircle className="h-5 w-5 text-green-500" />
//                       <span>12 classes per month</span>
//                     </li>
//                     <li className="flex items-center gap-2">
//                       <CheckCircle className="h-5 w-5 text-green-500" />
//                       <span>Premium study materials & practice tests</span>
//                     </li>
//                     <li className="flex items-center gap-2">
//                       <CheckCircle className="h-5 w-5 text-green-500" />
//                       <span>Unlimited doubt clearing sessions</span>
//                     </li>
//                     <li className="flex items-center gap-2">
//                       <CheckCircle className="h-5 w-5 text-green-500" />
//                       <span>Priority WhatsApp, email & phone support</span>
//                     </li>
//                     <li className="flex items-center gap-2">
//                       <CheckCircle className="h-5 w-5 text-green-500" />
//                       <span>Weekly progress reports & parent meetings</span>
//                     </li>
//                   </ul>
//                   <Button className="w-full">Get Started</Button>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </section>
//         <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
//           <div className="container px-4 md:px-6">
//             <div className="flex flex-col items-center justify-center space-y-4 text-center">
//               <div className="space-y-2">
//                 <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
//                   FAQ
//                 </div>
//                 <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
//                   Frequently Asked Questions
//                 </h2>
//                 <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                   Find answers to common questions about our Physics tuition classes
//                 </p>
//               </div>
//             </div>
//             <div className="mx-auto max-w-3xl py-12">
//               <Accordion type="single" collapsible className="w-full">
//                 <AccordionItem value="item-1">
//                   <AccordionTrigger>How are the online classes conducted?</AccordionTrigger>
//                   <AccordionContent>
//                     Our online classes are conducted via Zoom or Google Meet. We use digital whiteboards, interactive presentations, and simulations to make learning engaging and effective. All sessions are recorded and made available to students for revision.
//                   </AccordionContent>
//                 </AccordionItem>
//                 <AccordionItem value="item-2">
//                   <AccordionTrigger>Can I get a free demo class before enrolling?</AccordionTrigger>
//                   <AccordionContent>
//                     Yes, we offer a free 30-minute demo class to help you understand our teaching methodology and approach. This allows you to make an informed decision before committing to a plan.
//                   </AccordionContent>
//                 </AccordionItem>
//                 <AccordionItem value="item-3">
//                   <AccordionTrigger>What if I miss a scheduled class?</AccordionTrigger>
//                   <AccordionContent>
//                     If you inform us at least 24 hours in advance, we can reschedule the class. All classes are recorded and shared with students, so you can always catch up on missed content. We also offer additional doubt-clearing sessions.
//                   </AccordionContent>
//                 </AccordionItem>
//                 <AccordionItem value="item-4">
//                   <AccordionTrigger>Do you cover the syllabus for all boards (CBSE, ICSE, State Boards)?</AccordionTrigger>
//                   <AccordionContent>
//                     Yes, our curriculum is adaptable to different board requirements. We customize the teaching approach and content based on your specific board syllabus, ensuring comprehensive coverage of all topics.
//                   </AccordionContent>
//                 </AccordionItem>
//                 <AccordionItem value="item-5">
//                   <AccordionTrigger>How do you track student progress?</AccordionTrigger>
//                   <AccordionContent>
//                     We conduct regular assessments, quizzes, and tests to evaluate understanding. Detailed progress reports are shared with parents, highlighting strengths and areas for improvement. We also schedule parent-teacher meetings to discuss progress.
//                   </AccordionContent>
//                 </AccordionItem>
//                 <AccordionItem value="item-6">
//                   <AccordionTrigger>What is the class size?</AccordionTrigger>
//                   <AccordionContent>
//                     We believe in personalized attention, so our classes typically have a maximum of 4-5 students. We also offer one-on-one sessions for students who prefer individual attention.
//                   </AccordionContent>
//                 </AccordionItem>
//               </Accordion>
//             </div>
//           </div>
//         </section>
//         <section className="w-full py-12 md:py-24 lg:py-32">
//           <div className="container px-4 md:px-6">
//             <div className="flex flex-col items-center justify-center space-y-4 text-center">
//               <div className="space-y-2">
//                 <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
//                   Design Options
//                 </div>
//                 <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
//                   Choose Your Preferred Style
//                 </h2>
//                 <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                   Select a design variation that best represents your teaching style
//                 </p>
//               </div>
//             </div>
//             <div className="mx-auto max-w-5xl py-12">
//               <Tabs defaultValue="premium" className="w-full">
//                 <TabsList className="grid w-full grid-cols-3">
//                   <TabsTrigger value="premium">Premium Look</TabsTrigger>
//                   <TabsTrigger value="youthful">Fun & Youthful</TabsTrigger>
//                   <TabsTrigger value="exam">Exam-Focused</TabsTrigger>
//                 </TabsList>
//                 <TabsContent value="premium" className="mt-6">
//                   <Card>
//                     <CardContent className="p-6">
//                       <div className="flex flex-col space-y-4">
//                         <h3 className="text-xl font-bold">Premium Design</h3>
//                         <p className="text-gray-500">
//                           An elegant, sophisticated design with ample white space, professional imagery, and subtle animations. Perfect for conveying high-quality education and expertise.
//                         </p>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                           <div>
//                             <h4 className="font-medium mb-2">Features:</h4>
//                             <ul className="space-y-1">
//                               <li className="flex items-center gap-2">
//                                 <CheckCircle className="h-4 w-4 text-green-500" />
//                                 <span>Elegant serif fonts for headings</span>
//                               </li>
//                               <li className="flex items-center gap-2">
//                                 <CheckCircle className="h-4 w-4 text-green-500" />
//                                 <span>Sophisticated navy and gold color scheme</span>
//                               </li>
//                               <li className="flex items-center gap-2">
//                                 <CheckCircle className="h-4 w-4 text-green-500" />
//                                 <span>Professional photography</span>
//                               </li>
//                               <li className="flex items-center gap-2">
//                                 <CheckCircle className="h-4 w-4 text-green-500" />
//                                 <span>Subtle animations and transitions</span>
//                               </li>
//                             </ul>
//                           </div>
//                           <div>
//                             <h4 className="font-medium mb-2">Best for:</h4>
//                             <ul className="space-y-1">
//                               <li className="flex items-center gap-2">
//                                 <CheckCircle className="h-4 w-4 text-green-500" />
//                                 <span>Experienced educators</span>
//                               </li>
//                               <li className="flex items-center gap-2">
//                                 <CheckCircle className="h-4 w-4 text-green-500" />
//                                 <span>Premium pricing strategy</span>
//                               </li>
//                               <li className="flex items-center gap-2">
//                                 <CheckCircle className="h-4 w-4 text-green-500" />
//                                 <span>Targeting parents as decision-makers</span>
//                               </li>
//                               <li className="flex items-center gap-2">
//                                 <CheckCircle className="h-4 w-4 text-green-500" />
//                                 <span>Emphasizing quality and expertise</span>
//                               </li>
//                             </ul>
//                           </div>
//                         </div>
//                         <Button className="w-full md:w-auto">Select Premium Design</Button>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </TabsContent>
//                 <TabsContent value="youthful" className="mt-6">
//                   <Card>
//                     <CardContent className="p-6">
//                       <div className="flex flex-col space-y-4">
//                         <h3 className="text-xl font-bold">Fun & Youthful Design</h3>
//                         <p className="text-gray-500">
//                           A vibrant, playful design with bright colors, fun illustrations, and engaging elements. Perfect for connecting with younger students and making learning enjoyable.
//                         </p>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                           <div>
//                             <h4 className="font-medium mb-2">Features:</h4>
//                             <ul className="space-y-1">
//                               <li className="flex items-center gap-2">
//                                 <CheckCircle className="h-4 w-4 text-green-500" />
//                                 <span>Playful, rounded fonts</span>
//                               </li>
//                               <li className="flex items-center gap-2">
//                                 <CheckCircle className="h-4 w-4 text-green-500" />
//                                 <span>Bright color palette (blue, green, yellow)</span>
//                               </li>
//                               <li className="flex items-center gap-2">
//                                 <CheckCircle className="h-4 w-4 text-green-500" />
//                                 <span>Cartoon illustrations of physics concepts</span>
//                               </li>
//                               <li className="flex items-center gap-2">
//                                 <CheckCircle className="h-4 w-4 text-green-500" />
//                                 <span>Interactive elements and animations</span>
//                               </li>
//                             </ul>
//                           </div>
//                           <div>
//                             <h4 className="font-medium mb-2">Best for:</h4>
//                             <ul className="space-y-1">
//                               <li className="flex items-center gap-2">
//                                 <CheckCircle className="h-4 w-4 text-green-500" />
//                                 <span>Engaging directly with students</span>
//                               </li>
//                               <li className="flex items-center gap-2">
//                                 <CheckCircle className="h-4 w-4 text-green-500" />
//                                 <span>Making physics fun and approachable</span>
//                               </li>
//                               <li className="flex items-center gap-2">
//                                 <CheckCircle className="h-4 w-4 text-green-500" />
//                                 <span>Emphasizing enjoyable learning experience</span>
//                               </li>
//                               <li className="flex items-center gap-2">
//                                 <CheckCircle className="h-4 w-4 text-green-500" />
//                                 <span>Appealing to visual learners</span>
//                               </li>
//                             </ul>
//                           </div>
//                         </div>
//                         <Button className="w-full md:w-auto">Select Youthful Design</Button>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </TabsContent>
//                 <TabsContent value="exam" className="mt-6">
//                   <Card>
//                     <CardContent className="p-6">
//                       <div className="flex flex-col space-y-4">
//                         <h3 className="text-xl font-bold">Exam-Focused Design</h3>
//                         <p className="text-gray-500">
//                           A sharp, focused design emphasizing results and exam preparation. Perfect for students and parents prioritizing academic achievement and exam success.
//                         </p>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                           <div>
//                             <h4 className="font-medium mb-2">Features:</h4>
//                             <ul className="space-y-1">
//                               <li className="flex items-center gap-2">
//                                 <CheckCircle className="h-4 w-4 text-green-500" />
//                                 <span>Clean, sharp typography</span>
//                               </li>
//                               <li className="flex items-center gap-2">
//                                 <CheckCircle className="h-4 w-4 text-green-500" />
//                                 <span>High-contrast color scheme</span>
//                               </li>
//                               <li className="flex items-center gap-2">
//                                 <CheckCircle className="h-4 w-4 text-green-500" />
//                                 <span>Result-focused imagery and graphics</span>
//                               </li>
//                               <li className="flex items-center gap-2">
//                                 <CheckCircle className="h-4 w-4 text-green-500" />
//                                 <span>Urgency-driven call-to-actions</span>
//                               </li>
//                             </ul>
//                           </div>
//                           <div>
//                             <h4 className="font-medium mb-2">Best for:</h4>
//                             <ul className="space-y-1">
//                               <li className="flex items-center gap-2">
//                                 <CheckCircle className="h-4 w-4 text-green-500" />
//                                 <span>Exam preparation focus</span>
//                               </li>
//                               <li className="flex items-center gap-2">
//                                 <CheckCircle className="h-4 w-4 text-green-500" />
//                                 <span>Highlighting result improvements</span>
//                               </li>
//                               <li className="flex items-center gap-2">
//                                 <CheckCircle className="h-4 w-4 text-green-500" />
//                                 <span>Creating a sense of urgency</span>
//                               </li>
//                               <li className="flex items-center gap-2">
//                                 <CheckCircle className="h-4 w-4 text-green-500" />
//                                 <span>Appealing to achievement-oriented students</span>
//                               </li>
//                             </ul>
//                           </div>
//                         </div>
//                         <Button className="w-full md:w-auto">Select Exam-Focused Design</Button>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </TabsContent>
//               </Tabs>
//             </div>
//           </div>
//         </section>
//         <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
//           <div className="container px-4 md:px-6">
//             <div className="flex flex-col items-center justify-center space-y-4 text-center">
//               <div className="space-y-2">
//                 <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
//                   Contact Us
//                 </div>
//                 <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
//                   Get in Touch
//                 </h2>
//                 <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                   Have questions? We're here to help. Fill out the form below and we'll get back to you soon.
//                 </p>
//               </div>
//             </div>
//             <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 lg:grid-cols-2">
//               <div className="flex flex-col gap-4">
//                 <div className="flex items-center gap-2">
//                   <div className="rounded-full bg-blue-100 p-2">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="h-5 w-5 text-blue-600"
//                     >
//                       <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="font-medium">Phone</h3>
//                     <p className="text-gray-500">+91 98765 43210</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <div className="rounded-full bg-blue-100 p-2">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="h-5 w-5 text-blue-600"
//                     >
//                       <rect width="20" height="16" x="2" y="4" rx="2" />
//                       <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="font-medium">Email</h3>
//                     <p className="text-gray-500">info@physicsace.com</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <div className="rounded-full bg-blue-100 p-2">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="h-5 w-5 text-blue-600"
//                     >
//                       <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z" />
//                       <path d="M12 6v6l4 2" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="font-medium">Office Hours</h3>
//                     <p className="text-gray-500">Monday - Saturday: 9AM - 7PM</p>
//                   </div>
//                 </div>
//                 <div className="mt-6">
//                   <h3 className="font-medium mb-2">Follow Us</h3>
//                   <div className="flex gap-4">
//                     <Link href="#" className="rounded-full bg-blue-100 p-2">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="h-5 w-5 text-blue-600"
//                       >
//                         <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
//                       </svg>
//                       <span className="sr-only">Facebook</span>
//                     </Link>
//                     <Link href="#" className="rounded-full bg-blue-100 p-2">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="h-5 w-5 text-blue-600"
//                       >
//                         <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
//                         <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
//                         <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
//                       </svg>
//                       <span className="sr-only">Instagram</span>
//                     </Link>
//                     <Link href="#" className="rounded-full bg-blue-100 p-2">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="h-5 w-5 text-blue-600"
//                       >
//                         <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
//                       </svg>
//                       <span className="sr-only">Twitter</span>
//                     </Link>
//                     <Link href="#" className="rounded-full bg-blue-100 p-2">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="h-5 w-5 text-blue-600"
//                       >
//                         <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
//                         <rect width="4" height="12" x="2" y="9" />
//                         <circle cx="4" cy="4" r="2" />
//                       </svg>
//                       <span className="sr-only">LinkedIn</span>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//               <div className="space-y-4">
//                 <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//                   <div className="space-y-2">
//                     <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
//                       Name
//                     </label>
//                     <input
//                       id="name"
//                       className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//                       placeholder="Enter your name"
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
//                       Email
//                     </label>
//                     <input
//                       id="email"
//                       type="email"
//                       className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//                       placeholder="Enter your email"
//                     />
//                   </div>
//                 </div>
//                 <div className="space-y-2">
//                   <label htmlFor="phone" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
//                     Phone
//                   </label>
//                   <input
//                     id="phone"
//                     type="tel"
//                     className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//                     placeholder="Enter your phone number"
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
//                     Message
//                   </label>
//                   <textarea
//                     id="message"
//                     className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//                     placeholder="Enter your message"
//                   />
//                 </div>
//                 <Button className="w-full bg-blue-600 hover:bg-blue-700">Send Message</Button>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>

     
//       <footer className="w-full border-t py-6 md:py-0">
//         <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
//           <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
//             © 2025 PhysicsAce. All rights reserved.
//           </p>
//           <nav className="flex gap-4 sm:gap-6">
//             <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
//               Terms
//             </Link>
//             <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
//               Privacy
//             </Link>
//             <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
//               Cookies
//             </Link>
//           </nav>
//         </div>
//       </footer>
//     </div>
//   )
// }
