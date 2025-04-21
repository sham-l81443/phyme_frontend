import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function BookTuition() {
  return (
    <div>
      {/* Book Your Tuition */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col items-center mb-12">
              <div className="inline-flex items-center justify-center rounded-full bg-[#C084fc]/20 px-4 py-1.5 mb-4">
                <span className="text-sm font-medium text-[#C54bbc]">Make the Leap</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-center">
                🌈 Let their potential unfold—one session at a time.
              </h2>
              <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
                "A journey of a thousand miles begins with a single step." – Lao Tzu
              </p>
              <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#C084fc] to-[#C54bbc]"></div>
            </div>

            <Card className="border-none shadow-xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 "></div>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">
                        Full Name
                      </label>
                      <Input id="name" placeholder="Enter your full name" className="h-12 rounded-lg" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="Enter your email" className="h-12 rounded-lg" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <Input id="phone" placeholder="Enter your phone number" className="h-12 rounded-lg" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="grade" className="text-sm font-medium text-gray-700">
                        Grade/Class
                      </label>
                      <Input id="grade" placeholder="Enter your grade/class" className="h-12 rounded-lg" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your requirements"
                      rows={4}
                      className="rounded-lg resize-none"
                    />
                  </div>

                  <Button className="w-full rounded-full bg-gradient-to-r from-appPrimary-dark to-[#C54bbc] hover:opacity-90 transition-opacity border-none h-auto text-base">
                    Begin Your Physics Journey
                  </Button>

                  <p className="text-center text-sm text-gray-500 mt-4">Just one session can change everything.</p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
