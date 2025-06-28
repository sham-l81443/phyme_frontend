import { Input } from "@/components/ui/input"
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, Youtube, ChevronRight, Mail, Phone, MapPin } from "lucide-react"
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
        )

    }


    export default Footer ;