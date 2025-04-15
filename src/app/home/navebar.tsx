"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, AtomIcon } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
      setScrolled(currentScrollPos > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
      } ${!visible ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="container mx-auto flex h-16 sm:h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center shrink-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#C084fc] to-[#C54bbc] rounded-full opacity-20"></div>
            <AtomIcon className="h-5 w-5 sm:h-6 sm:w-6 text-[#C54bbc] relative z-10" />
          </div>
          <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-[#C084fc] to-[#C54bbc] bg-clip-text text-transparent">
            PhysicsHub
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-10">
          <Link
            href="/"
            className="text-sm lg:text-[.9rem] font-medium transition-colors relative group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#C084fc] to-[#C54bbc] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          <Link
            href="#"
            className="text-sm lg:text-[.9rem] font-medium transition-colors relative group"
          >
            Courses
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#C084fc] to-[#C54bbc] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          <Link
            href="#"
            className="text-sm lg:text-[.9rem] font-medium transition-colors relative group"
          >
            Study Material
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#C084fc] to-[#C54bbc] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          <Link
            href="#"
            className="text-sm lg:text-[.9rem] font-medium transition-colors relative group"
          >
            YouTube
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#C084fc] to-[#C54bbc] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          <Link
            href="#"
            className="text-sm lg:text-[.9rem] font-medium transition-colors relative group"
          >
            About Us
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#C084fc] to-[#C54bbc] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          <Link
            href="#"
            className="text-sm lg:text-[.9rem] font-medium transition-colors relative group"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#C084fc] to-[#C54bbc] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-3 lg:gap-4">
          <Button
            variant="ghost"
            className="rounded-full hover:bg-transparent hover:text-[#C54bbc] transition-colors text-sm lg:text-base h-9 lg:h-10"
          >
            Login
          </Button>
          <Button className="rounded-full bg-gradient-to-r from-[#C084fc] to-[#C54bbc] hover:opacity-90 transition-opacity border-none text-sm lg:text-base h-9 lg:h-10">
            Sign Up
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full h-9 w-9 hover:bg-transparent hover:text-[#C54bbc]"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-[300px] p-0 border-l-0">
            <div className="flex flex-col h-full p-6">
              <div className="flex items-center justify-between pb-4">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                  <div className="relative w-8 h-8 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#C084fc] to-[#C54bbc] rounded-full opacity-20"></div>
                    <AtomIcon className="h-5 w-5 text-[#C54bbc] relative z-10" />
                  </div>
                  <span className="text-lg font-bold bg-gradient-to-r from-[#C084fc] to-[#C54bbc] bg-clip-text text-transparent">
                    PhysicsHub
                  </span>
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="rounded-full h-8 w-8 hover:bg-transparent hover:text-[#C54bbc]"
                >
                  {/* <X className="h-5 w-5" /> */}
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>

              <nav className="flex flex-col gap-4 py-6">
                {[
                  "Home",
                  "Courses",
                  "Study Material",
                  "YouTube",
                  "About Us",
                  "Contact",
                ].map((item) => (
                  <Link
                    key={item}
                    href={item === "Home" ? "/" : "#"}
                    className="text-sm font-medium transition-colors flex items-center px-2 py-1.5 rounded-lg hover:bg-accent"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C54bbc] mr-3"></div>
                    {item}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-3 pt-6">
                <Button
                  variant="outline"
                  className="w-full rounded-full h-9"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Button>
                <Button
                  className="w-full rounded-full bg-gradient-to-r from-[#C084fc] to-[#C54bbc] hover:opacity-90 transition-opacity border-none h-9"
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}