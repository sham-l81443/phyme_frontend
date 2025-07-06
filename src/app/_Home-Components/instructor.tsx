import { teacher3d } from "@/assets/png"
import { ExpertProfile } from "@/components/ui/expert-profile"

const Instructor = ()=>{
    return(
        <section className="w-full py-20 relative overflow-hidden z-20">

        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-purple-50 opacity-70" />

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-rose-200 opacity-20 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-64 w-64 rounded-full bg-purple-200 opacity-20 blur-3xl" />
        <div className="absolute -top-45 left-0 right-0 rotate-180">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path
              fill="#ffffff"
              stroke="currentColor"
              strokeWidth="0"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="container relative mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <div className="inline-flex items-center rounded-full border border-rose-600/20 bg-rose-50 px-3 py-1 text-sm font-medium text-rose-600 shadow-sm">
              <span className="mr-1">👩‍🏫</span> Meet Our Experts
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent ">
              Learn From{" "}
              <span className="bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
                Industry Leaders
              </span>
            </h2>
            <p className="max-w-[800px] md:text-xl/relaxed text-gray-700">
              Our expert instructors bring years of real-world experience to help you master new skills and achieve your
              goals
            </p>
          </div>

          <div className="space-y-16">
            {/* Expert 1 */}
            <ExpertProfile
              name="Dr. Sarah Johnson"
              title="Lead Data Science Instructor"
              specialty="Data Science Expert"
              description="With over 10 years of experience in data science and machine learning, Dr. Johnson has helped more than 5,000 students master complex concepts and build successful careers in the field. Her research has been published in leading journals and she previously led data teams at Fortune 500 companies."
              qualifications={[
                "Ph.D. in Computer Science from Stanford University",
                "10+ years of industry experience at top tech companies",
                "Published researcher with 20+ peer-reviewed papers",
                "Specialized in making complex algorithms accessible to beginners",
              ]}
              imageSrc={teacher3d}
              color="rose"
            />

            {/* Expert 2 */}

          </div>

        </div>
      </section>
    )
}

export default Instructor