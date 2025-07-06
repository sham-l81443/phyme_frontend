import { BookOpen, CheckCircle, Users, Lightbulb, Calculator, ArrowRight, FlaskConical, Target } from "lucide-react"
import { Button } from "@/components/ui/button"

const PremiumService = () => {
  return (
    <section className="w-full py-20 bg-white z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-flex items-center rounded-full border border-rose-600/20 bg-rose-50 px-3 py-1 text-sm font-medium text-rose-600 shadow-sm">
            <span className="mr-1">⚛️</span> What We Offer
          </div>

          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent ">
            Our <span className="">Physics Learning</span> Experience
          </h2>

          <p className="max-w-[800px] text-gray-700 md:text-xl/relaxed ">
            Comprehensive Class 9 Physics support designed to make complex concepts clear and help you excel in your MOE
            curriculum
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
              <h3 className="mb-2 text-xl font-bold text-black">Interactive Physics Lessons</h3>
              <p className="mb-4 text-gray-700">
                Engaging video lessons covering all Class 9 Physics topics with clear explanations and visual
                demonstrations.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-rose-500" />
                  <span className="text-sm text-gray-700">MOE syllabus aligned</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-rose-500" />
                  <span className="text-sm text-gray-700">Visual animations</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-rose-500" />
                  <span className="text-sm text-gray-700">Step-by-step solutions</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Service 2 */}
          <div className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all hover:shadow-xl">
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-fuchsia-100 to-fuchsia-200 opacity-70 blur-2xl transition-all group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-fuchsia-600 text-white">
                <FlaskConical className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-black">Laboratory Experiments</h3>
              <p className="mb-4 text-gray-700">
                Hands-on physics experiments to understand concepts like motion, forces, energy, and waves practically.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-fuchsia-500" />
                  <span className="text-sm text-gray-700">Safe guided experiments</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-fuchsia-500" />
                  <span className="text-sm text-gray-700">Real-world applications</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-fuchsia-500" />
                  <span className="text-sm text-gray-700">Lab report guidance</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Service 3 */}
          <div className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all hover:shadow-xl">
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 opacity-70 blur-2xl transition-all group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-black">Exam Preparation</h3>
              <p className="mb-4 text-gray-700">
                Comprehensive exam preparation with past papers, mock tests, and targeted practice for Class 9 Physics
                assessments.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-purple-500" />
                  <span className="text-sm text-gray-700">Past year papers</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-purple-500" />
                  <span className="text-sm text-gray-700">Timed mock tests</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-purple-500" />
                  <span className="text-sm text-gray-700">Performance analysis</span>
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
              <h3 className="mb-2 text-xl font-bold text-black">Personal Tutoring</h3>
              <p className="mb-4 text-gray-700">
                One-on-one physics tutoring sessions to address individual learning needs and clarify difficult
                concepts.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-rose-500" />
                  <span className="text-sm text-gray-700">Customized learning pace</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-rose-500" />
                  <span className="text-sm text-gray-700">Doubt clearing sessions</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-rose-500" />
                  <span className="text-sm text-gray-700">Progress tracking</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Service 5 */}
          <div className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all hover:shadow-xl">
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-fuchsia-100 to-purple-100 opacity-70 blur-2xl transition-all group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-500 text-white">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-black">Study Groups</h3>
              <p className="mb-4 text-gray-700">
                Collaborative learning sessions where Class 9 students work together to solve physics problems and share
                insights.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-fuchsia-500" />
                  <span className="text-sm text-gray-700">Peer learning support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-fuchsia-500" />
                  <span className="text-sm text-gray-700">Group problem solving</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-fuchsia-500" />
                  <span className="text-sm text-gray-700">Discussion forums</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Service 6 */}
          <div className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all hover:shadow-xl">
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-purple-100 to-rose-100 opacity-70 blur-2xl transition-all group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-rose-500 text-white">
                <Calculator className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-black">Practice Problems</h3>
              <p className="mb-4 text-gray-700">
                Extensive collection of physics problems with varying difficulty levels to strengthen problem-solving
                skills.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-purple-500" />
                  <span className="text-sm text-gray-700">Graded difficulty levels</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-purple-500" />
                  <span className="text-sm text-gray-700">Detailed solutions</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-purple-500" />
                  <span className="text-sm text-gray-700">Topic-wise practice</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white"
          >
            Explore Physics Program
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default PremiumService
