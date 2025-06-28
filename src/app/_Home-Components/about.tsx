import { APP_2, APP_4, APP_3 } from "@/assets/png"
import { Button } from "@/components/ui/button"
import { Heart, Zap, PieChart, ArrowRight } from "lucide-react"
import Image from "next/image"

const AboutUs = ()=>{
    return(
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
    )
}

export default AboutUs;