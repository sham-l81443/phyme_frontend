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

export interface ISubject {
  id: string
  name: string
  code: string
  description?: string
  isActive: boolean
  createdAt: string
  updatedAt: string
 
  class:{
    name:string
    syllabus:{
      name:string
    }
  }
  _count: {
    chapters: number
  }
}

const Subjects = () => {



  const router = useRouter()

  function onCreateClick() {
    router.push(ADMIN_ROUTES.createSubject)
  }

  const { data, isLoading } = useQuery({
    queryKey: ["subjects"],
    queryFn: () => apiHandler({ method: "GET", url: "/subject/all" }),
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

  function onRowClick(subject:string){
    router.push(ADMIN_ROUTES.subject(subject))
  }


  return (
    <Section direction="column" className="p-4">
      <div className=" pb-4 bg-background border-b border-background w-full flex">
        <Button className="ml-auto" onClick={onCreateClick}>
          Create Subject
        </Button>
      </div>
      <Section direction="column" className=" rounded-sm border border-border">
        {
          isLoading ? <Main loading={true}></Main> : <Main className="flex-col">
            <Section className="">
              <Table className="">
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Code</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Class</TableHead>
                    <TableHead>Syllabus</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="overflow-y-scroll h-full">
                  {
                    data?.data?.map((subject: ISubject) => (
                      <TableRow onClick={()=>onRowClick(subject.name)} className="" key={subject.id}>
                        <TableCell className="font-medium border-b border-border">{subject.name}</TableCell>
                        <TableCell className="border-b border-border">
                          <Badge variant="outline" className="font-mono">
                            {subject.code}
                          </Badge>
                        </TableCell>
                        <TableCell className="max-w-[300px] border-b border-border">
                          <div className="truncate" title={subject?.description || "-"}>
                            {subject?.description || "-"}
                          </div>
                        </TableCell>
                        <TableCell className="border-b border-border">
                          <Badge
                            variant={subject.isActive ? "default" : "secondary"}
                            className={subject.isActive ? "bg-green-100 text-green-800 hover:bg-green-100" : ""}
                          >
                            {subject.isActive ? "Active" : "Inactive"}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-start border-b border-border">
                          <Badge variant="outline">{subject?.class?.name || "-"}</Badge>
                        </TableCell>
                        <TableCell className="text-start border-b border-border">
                          <Badge variant="outline">{subject?.class?.syllabus?.name || "-"}</Badge>
                        </TableCell>
                        <TableCell className="text-start text-sm text-muted-foreground border-b border-border">
                          {formatDate(subject.createdAt)}
                        </TableCell>
                        <TableCell className="border-b border-border">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem onClick={() => handleEdit(subject.id)}>
                                <Edit className="mr-2 h-4 w-4" />
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleDelete(subject.id)} className="text-red-600">
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

export default Subjects
