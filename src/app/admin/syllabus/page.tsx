"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Main, Scroll, Section } from "@/components/common"
import { useRouter } from "next/navigation"
import { ADMIN_ROUTES } from "@/constants/routes"
import { useQuery } from "@tanstack/react-query"
import { apiHandler } from "@/utils/apiHandler"
import { MoreHorizontal, Edit, Trash2 } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface SyllabusData {
  id: string
  name: string
  code: string
  description: string
  academicYear: string
  isActive: boolean
  createdAt: string
  updatedAt: string
  _count: {
    classes: number
    users: number
  }
}

const Syllabus = () => {



  const router = useRouter()

  function onCreateClick() {
    router.push(ADMIN_ROUTES.createSyllabus)
  }

  const { data, isLoading } = useQuery({
    queryKey: ["syllabus"],
    queryFn: () => apiHandler({ method: "GET", url: "/syllabus/all" }),
  })

  console.log(data?.data)

  const handleEdit = (syllabusId: string) => {
    // Add your edit logic here
    console.log("Edit syllabus:", syllabusId)
  }

  const handleDelete = (syllabusId: string) => {
    // Add your delete logic here
    console.log("Delete syllabus:", syllabusId)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }


  return (
    <Section direction="column" className="p-4">
      <div className=" pb-4 bg-background border-b border-background w-full flex">
        <Button className="ml-auto" onClick={onCreateClick}>
          Create Syllabus
        </Button>
      </div>
      <Section direction="column" className=" rounded-sm border border-border relative">
        {
          isLoading ? <Main loading={true}></Main> :
           <Main className="flex-col">
            <Section className="">
              <Table className="">
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Code</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Academic Year</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Classes</TableHead>
                    <TableHead>Users</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="overflow-y-scroll h-full ">
                  {
                    data?.data?.length === 0 ? <TableRow>
                      <TableCell colSpan={9} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                        No syllabus found
                      </TableCell>
                    </TableRow>
                    :
                    data?.data?.map((syllabus: SyllabusData) => (
                      <TableRow key={syllabus.id}>
                        <TableCell className="font-medium">{syllabus.name}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="font-mono">
                            {syllabus.code}
                          </Badge>
                        </TableCell>
                        <TableCell className="max-w-[300px]">
                          <div className="truncate" title={syllabus.description}>
                            {syllabus.description}
                          </div>
                        </TableCell>
                        <TableCell>{syllabus.academicYear}</TableCell>
                        <TableCell>
                          <Badge
                            variant={syllabus.isActive ? "default" : "secondary"}
                            className={syllabus.isActive ? "bg-green-100 text-green-800 hover:bg-green-100" : ""}
                          >
                            {syllabus.isActive ? "Active" : "Inactive"}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-center">
                          <Badge variant="outline">{syllabus._count.classes}</Badge>
                        </TableCell>
                        <TableCell className="text-center">
                          <Badge variant="outline">{syllabus._count.users}</Badge>
                        </TableCell>
                        <TableCell className="text-center text-sm text-muted-foreground">
                          {formatDate(syllabus.createdAt)}
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem onClick={() => handleEdit(syllabus.id)}>
                                <Edit className="mr-2 h-4 w-4" />
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleDelete(syllabus.id)} className="text-red-600">
                                <Trash2 className="mr-2 h-4 w-4" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))
                  }
                </TableBody>  
              </Table>
            </Section>
          </Main>
        }

      </Section>
    </Section>
  )
}

export default Syllabus
