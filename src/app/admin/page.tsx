"use client"

import { useRouter } from "next/navigation"
import { use, useEffect } from "react"

const Student = () => {
    const router = useRouter()

    useEffect(() => {
        router.push("/student/dashboard")
    }, [])

    return (
        <></>
    )
}

export default Student

