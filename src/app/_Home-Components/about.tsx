import { APP_2, APP_4, APP_3 } from "@/assets/png"
import { Button } from "@/components/ui/button"
import { Atom, Zap, Target, ArrowRight } from "lucide-react"
import Image from "next/image"

const AboutUs = () => {
  return (
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
                      src={APP_2 || "/placeholder.svg?height=400&width=300"}
                      alt="Physics laboratory experiments"
                      width={300}
                      height={400}
                      className="h-auto w-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg relative">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <Image
                      src={APP_4 || "/placeholder.svg?height=300&width=300"}
                      alt="Class 9 physics students"
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
                      src={APP_3 || "/placeholder.svg?height=300&width=300"}
                      alt="Modern physics classroom"
                      width={300}
                      height={300}
                      className="h-auto w-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg relative">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <Image
                      src={APP_2 || "/placeholder.svg?height=400&width=300"}
                      alt="Interactive physics learning"
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
              <span className="mr-1">⚛️</span> Physics Excellence
            </div>

            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6 bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
              Mastering Physics Since <span className="">2015</span>
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              We specialize in making Class 9 Physics concepts crystal clear and engaging. Our MOE-aligned approach has
              helped thousands of students excel in their physics journey and build a strong foundation for advanced
              studies.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-rose-100">
                  <Atom className="h-5 w-5 text-rose-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">Our Approach</h3>
                  <p className="text-gray-700">
                    Transform complex physics concepts into simple, understandable ideas through hands-on experiments
                    and real-world applications that align with MOE curriculum standards.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-fuchsia-100">
                  <Zap className="h-5 w-5 text-fuchsia-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">Our Method</h3>
                  <p className="text-gray-700">
                    Interactive learning experiences that make physics exciting - from motion and forces to energy and
                    waves, every topic becomes an adventure in discovery.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                  <Target className="h-5 w-5 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">Our Goal</h3>
                  <p className="text-gray-700">
                    Build confident, curious physicists who not only excel in exams but develop a genuine love for
                    understanding how the world works.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">2000+</div>
                <div className="text-sm text-gray-700">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-700">Pass Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-700">Topics Covered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">8+</div>
                <div className="text-sm text-gray-700">Years Experience</div>
              </div>
            </div>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-none bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white"
            >
              Explore Our Physics Program
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
