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

interface IClassData {
  id: string
  name: string
  code: string
  description: string
  academicYear: string
  isActive: boolean
  syllabus: {
    name: string
  }
  createdAt: string
  updatedAt: string
  _count: {
    users: number
    subjects: number
    terms: number
  }
}

const Classes = () => {

  const router = useRouter()

  function onCreateClick() {
    router.push(ADMIN_ROUTES.createClass)
  }

  const { data, isLoading } = useQuery({
    queryKey: ['classes'],
    queryFn: () => apiHandler({ method: 'GET', url: '/class/all' }),

  })


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
          Create Class
        </Button>
      </div>
      <Section direction="column" className=" rounded-sm border border-border">
        {
          isLoading ? <Main loading={true}></Main> : <Main className="flex-col">
            <Section className="">
              <Table className="">
                <TableHeader >
                  <TableRow>
                    {[
                      "Name",
                      "Code",
                      "Description",
                      "Syllabus",
                      "Subjects",
                      "Users",
                      "Terms",
                      "Status",
                      "Created",
                      "Actions",
                    ].map((header) => (
                      <TableHead className="py-4 border border-border">{header}</TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody className="overflow-y-scroll h-full">
                  {
                    data?.data?.map((syllabus: IClassData) => (
                      <TableRow key={syllabus.id} className="">
                        <TableCell className="py-4 border border-border font-medium">{syllabus.name}</TableCell>
                        <TableCell className="py-4 border border-border">
                          <Badge variant="outline" className="font-mono">
                            {syllabus.code}
                          </Badge>
                        </TableCell>
                        <TableCell className="py-4 border border-border max-w-[300px]">
                          <div className="truncate" title={syllabus.description}>
                            {syllabus.description}
                          </div>
                        </TableCell>
                        <TableCell className="py-4 border border-border">{syllabus.syllabus.name}</TableCell>
                        <TableCell className="py-4 border border-border">
                          <Badge variant="outline">{syllabus._count.subjects}</Badge></TableCell>
                        <TableCell className="py-4 border border-border">
                          <Badge variant="outline">{syllabus._count.users}</Badge></TableCell>
                        <TableCell className="py-4 border border-border">
                          <Badge variant="outline">{syllabus._count.terms}</Badge></TableCell>
                        <TableCell className="py-4 border border-border">
                          <Badge
                            variant={syllabus.isActive ? "default" : "secondary"}
                            className={syllabus.isActive ? "bg-green-100 text-green-800 hover:bg-green-100" : ""}
                          >
                            {syllabus.isActive ? "Active" : "Inactive"}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm py-4 border border-border text-muted-foreground">
                          {formatDate(syllabus.createdAt)}
                        </TableCell>
                        <TableCell className="py-4 border border-border">
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

export default Classes
