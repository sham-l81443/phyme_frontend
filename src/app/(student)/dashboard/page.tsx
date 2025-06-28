'use client'
import { Section } from "@/components/common"
import useStudentStore from "@/store/student/studentStore"

const StudentDashboard = () => {

    const test = useStudentStore((state) => state.studentStore.persist.name)

    console.log(test)

    return (
        <Section className="center">{test}</Section>
    )
}

export default StudentDashboard