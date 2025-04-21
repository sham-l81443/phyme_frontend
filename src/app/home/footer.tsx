import Link from "next/link"
import { AtomIcon, Facebook, Instagram, Youtube, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-[#C084fc] to-[#C54bbc] rounded-full opacity-30"></div>
                <AtomIcon className="h-6 w-6 text-[#C084fc] relative z-10" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-[#C084fc] to-[#C54bbc] bg-clip-text text-transparent">
                PhysicsHub
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              We are dedicated to making physics education accessible, engaging, and effective for students of all
              levels.
            </p>
            <p className="text-gray-500 italic text-sm mb-6">
              "The beautiful thing about learning is that no one can take it away from you." – B.B. King
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="group">
                <div className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-[#C084fc]/20 transition-colors">
                  <Facebook className="h-5 w-5 text-gray-400 group-hover:text-[#C084fc] transition-colors" />
                </div>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="group">
                <div className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-[#C084fc]/20 transition-colors">
                  <Instagram className="h-5 w-5 text-gray-400 group-hover:text-[#C084fc] transition-colors" />
                </div>
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="group">
                <div className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-[#C084fc]/20 transition-colors">
                  <Youtube className="h-5 w-5 text-gray-400 group-hover:text-[#C084fc] transition-colors" />
                </div>
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Quick Links
              <div className="absolute -bottom-2 left-0 h-1 w-10 rounded-full bg-gradient-to-r from-[#C084fc] to-[#C54bbc]"></div>
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span>Home</span>
                  <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transform -translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span>Courses</span>
                  <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transform -translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span>Study Material</span>
                  <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transform -translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span>YouTube Channel</span>
                  <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transform -translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span>Book Tuition</span>
                  <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transform -translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Help & Support
              <div className="absolute -bottom-2 left-0 h-1 w-10 rounded-full bg-gradient-to-r from-[#C084fc] to-[#C54bbc]"></div>
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span>FAQs</span>
                  <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transform -translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span>Privacy Policy</span>
                  <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transform -translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span>Terms of Service</span>
                  <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transform -translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span>Student Support</span>
                  <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transform -translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span>Parent Resources</span>
                  <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transform -translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Contact Us
              <div className="absolute -bottom-2 left-0 h-1 w-10 rounded-full bg-gradient-to-r from-[#C084fc] to-[#C54bbc]"></div>
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start group">
                <div className="mr-3 mt-1 h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-[#C084fc]/20 transition-colors">
                  <Phone className="h-4 w-4 text-gray-400 group-hover:text-[#C084fc] transition-colors" />
                </div>
                <span className="text-gray-400 group-hover:text-white transition-colors">+1 (123) 456-7890</span>
              </li>
              <li className="flex items-start group">
                <div className="mr-3 mt-1 h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-[#C084fc]/20 transition-colors">
                  <Mail className="h-4 w-4 text-gray-400 group-hover:text-[#C084fc] transition-colors" />
                </div>
                <span className="text-gray-400 group-hover:text-white transition-colors">contact@physicshub.edu</span>
              </li>
              <li className="flex items-start group">
                <div className="mr-3 mt-1 h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-[#C084fc]/20 transition-colors">
                  <MapPin className="h-4 w-4 text-gray-400 group-hover:text-[#C084fc] transition-colors" />
                </div>
                <span className="text-gray-400 group-hover:text-white transition-colors">
                  123 Education Street, Science City, SC 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} PhysicsHub. All rights reserved.</p>
          <p className="mt-2 italic">
            "Time is a created thing. To say 'I don't have time' is to say 'I don't want to'." – Lao Tzu
          </p>
        </div>
      </div>
    </footer>
  )
}
