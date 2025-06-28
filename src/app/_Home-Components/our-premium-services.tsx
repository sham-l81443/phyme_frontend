import { BookOpen, CheckCircle, Users, Award, Lightbulb, Globe, Code, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
const PremiumService = ()=>{
    return(
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
    )
}

export default PremiumService