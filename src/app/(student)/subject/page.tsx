import { Section,Scroll } from '@/components/common'
import CustomCard1 from '@/components/common/custom-ui/custom-card'
import React from 'react'

// Define a list of color pairs (light & dark mode)
const colorPalette = [
  { lightBg: 'bg-red-100', lightText: 'text-red-800', darkBg: 'dark:bg-red-950', darkText: 'dark:text-red-200' },
  { lightBg: 'bg-blue-100', lightText: 'text-blue-800', darkBg: 'dark:bg-blue-950', darkText: 'dark:text-blue-200' },
  { lightBg: 'bg-green-100', lightText: 'text-green-800', darkBg: 'dark:bg-green-950', darkText: 'dark:text-green-200' },
  { lightBg: 'bg-yellow-100', lightText: 'text-yellow-800', darkBg: 'dark:bg-yellow-950', darkText: 'dark:text-yellow-200' },
  { lightBg: 'bg-purple-100', lightText: 'text-purple-800', darkBg: 'dark:bg-purple-950', darkText: 'dark:text-purple-200' },
  { lightBg: 'bg-pink-100', lightText: 'text-pink-800', darkBg: 'dark:bg-pink-950', darkText: 'dark:text-pink-200' },
  { lightBg: 'bg-indigo-100', lightText: 'text-indigo-800', darkBg: 'dark:bg-indigo-950', darkText: 'dark:text-indigo-200' },
  { lightBg: 'bg-orange-100', lightText: 'text-orange-800', darkBg: 'dark:bg-orange-950', darkText: 'dark:text-orange-200' },
]

const SubjectPage = () => {
  const subjects = [
    {
      id:'1',
      title: "Physics",
      description: "Explore the fundamental principles of matter, energy, and their interactions in the physical universe.",
      chapters: 12,
      href: (id:string)=>`/subject/${id}`
    },
    {
      id:'2',
      title: "English",
      description: "Master language skills, literature analysis, and effective communication through comprehensive study.",
      chapters: 15,
      href: (id:string)=>`/subject/${id}`
    },
    {
      id:'3',
      title: "Mathematics",
      description: "Develop problem-solving skills through algebra, geometry, calculus, and statistical analysis.",
      chapters: 18,
      href: (id:string)=>`/subject/${id}`
    },
    {
      id:'4',
      title: "Biology",
      description: "Study living organisms, their structure, function, growth, and evolution in various environments.",
      chapters: 14,
      href: (id:string)=>`/subject/${id}`
    },
    {
      id:'5',
      title: "Chemistry",
      description: "Understand the composition, structure, properties, and reactions of matter at molecular level.",
      chapters: 16,
      href: (id:string)=>`/subject/${id}`
    }
  ]

  return (
    <Section direction='column' className='p-4'>
        <Scroll direction='column' className="">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {subjects.map((subject, index) => {
            const color = colorPalette[index % colorPalette.length] // Loop through palette
            return (
              <CustomCard1
              cardClass='!border-1 !border-border'
                key={index}
                href={subject.href(subject.id)}
                title={subject.title}
                description={subject.description}
                footerLabel="Chapters"
                footerValue={subject.chapters}
                headerClass={`${color.lightBg} ${color.darkBg}`}
                headerTextClass={`${color.lightText} ${color.darkText}`}
              />
            )
          })}
            </div>
        </Scroll>
    </Section>
  )
}

export default SubjectPage
