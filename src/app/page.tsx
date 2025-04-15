"use client"
import { Book, Factory } from "lucide-react";
import Benefits from "./home/benefits";
import Carousel from "./home/carosal";
import Navbar from "./home/navebar";
import BookTuition from "./home/book-tution";
import Footer from "./home/footer";
import FAQ from "./home/faq";

export default function Home() {
    return (
        <main className="">
             <div className="w-full bg-primary pb-10">
        <div className='parent relative  '>
          <Navbar />

          {/* Hero Carousel */}
          <section className=" mx-auto py-10">
            <Carousel />
          </section>
<section className="bg-gradient-to-r from-[#C084fc] to-[#C54bbc] h-1 w-full">
    <Benefits />
    <BookTuition />
    <FAQ />
    <footer className="bg-gray-900 text-white">
    <Footer />
    </footer>
</section>
        </div>
      </div>
        </main>        
    );
}
