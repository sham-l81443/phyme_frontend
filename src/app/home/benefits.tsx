import { BookOpen, Youtube, FileText, Video, Users, Star, ArrowRight } from "lucide-react"


export default function Benefits() {
    return (
        <div>
     {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <div className="inline-flex items-center justify-center rounded-full bg-[#C084fc]/20 px-4 py-1.5 mb-4">
              <span className="text-sm font-medium text-[#C54bbc]">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-center">Benefits</h2>
            <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#C084fc] to-[#C54bbc]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#C084fc] to-[#C54bbc] text-white transform group-hover:scale-110 transition-transform duration-300">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-[#C54bbc] transition-colors">
                Comprehensive Notes
              </h3>
              <p className="text-gray-600">
                Access detailed notes for all physics topics with examples and illustrations
              </p>
            </div>

            <div className="group p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#C084fc] to-[#C54bbc] text-white transform group-hover:scale-110 transition-transform duration-300">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-[#C54bbc] transition-colors">
                Interactive Classes
              </h3>
              <p className="text-gray-600">Join live interactive classes with experienced physics teachers</p>
            </div>

            <div className="group p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#C084fc] to-[#C54bbc] text-white transform group-hover:scale-110 transition-transform duration-300">
                <Youtube className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-[#C54bbc] transition-colors">
                YouTube Material
              </h3>
              <p className="text-gray-600">Access our library of educational videos explaining complex concepts</p>
            </div>

            <div className="group p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#C084fc] to-[#C54bbc] text-white transform group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-[#C54bbc] transition-colors">
                Practice Problems
              </h3>
              <p className="text-gray-600">Strengthen your understanding with our curated practice problems</p>
            </div>
          </div>
        </div>
      </section>

        </div>
    );
}