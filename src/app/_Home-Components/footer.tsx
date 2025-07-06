import { Input } from "@/components/ui/input"
import {
  GraduationCap,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const Footer = () => {
  return (
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
                  PhysicsHub
                </span>
              </div>
              <p className="text-gray-300">
                Making Class 9 Physics simple, engaging, and successful. Join hundreds of students who have mastered
                physics concepts and excelled in their academic journey with our MOE-aligned approach.
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
              <h3 className="text-lg font-semibold mb-6 text-white">Physics Program</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2 text-rose-400" />
                    Class 9 Physics Topics
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2 text-rose-400" />
                    Laboratory Experiments
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2 text-rose-400" />
                    Exam Preparation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2 text-rose-400" />
                    Practice Problems
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2 text-rose-400" />
                    Study Groups
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2 text-rose-400" />
                    Progress Tracking
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Support */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Student Support</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2 text-fuchsia-400" />
                    Physics Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2 text-fuchsia-400" />
                    Common Questions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2 text-fuchsia-400" />
                    Contact Teachers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2 text-fuchsia-400" />
                    Parent Portal
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2 text-fuchsia-400" />
                    Enrollment Info
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2 text-fuchsia-400" />
                    Class Schedules
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Physics Updates</h3>
              <p className="text-gray-300 mb-4">
                Get the latest physics tips, exam updates, and learning resources delivered to your inbox.
              </p>
              <div className="space-y-4">
                <div className="flex flex-col space-y-2">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-rose-400"
                  />
                  <Button className="bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white">
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-gray-400">
                  Get weekly physics tips, exam strategies, and study resources. Unsubscribe anytime.
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
                <a href="mailto:info@physicshub.edu.sg" className="text-gray-300 hover:text-rose-400 transition-colors">
                  info@physicshub.edu.sg
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="h-5 w-5 mr-3 text-fuchsia-400 mt-0.5" />
              <div>
                <h4 className="text-sm font-medium text-white">Call Us</h4>
                <a href="tel:+6591234567" className="text-gray-300 hover:text-rose-400 transition-colors">
                  +65 9123 4567
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <MapPin className="h-5 w-5 mr-3 text-purple-400 mt-0.5" />
              <div>
                <h4 className="text-sm font-medium text-white">Visit Us</h4>
                <p className="text-gray-300">123 Education Hub, Orchard Road, Singapore 238123</p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} PhysicsHub. All rights reserved.</p>
            <div className="flex justify-center space-x-6 mt-4">
              <a href="#" className="text-gray-400 hover:text-rose-400 text-xs">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-400 text-xs">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-400 text-xs">
                Refund Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-400 text-xs">
                MOE Compliance
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer