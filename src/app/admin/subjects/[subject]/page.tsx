"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Main, Scroll, Section } from "@/components/common"
import { useParams, useRouter } from "next/navigation"
import { ADMIN_ROUTES } from "@/constants/routes"
import { useQuery } from "@tanstack/react-query"
import { apiHandler } from "@/utils/apiHandler"
import { MoreHorizontal, Edit, Trash2 } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

type IChapter = {
    id: string;
    name: string;
    code: string;
    subjectId: string;
    termId: string;
    isActive: boolean;
    description: string;
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
    subject: {
      id: string;
      name: string;
      code: string;
      description: string;
      classId: string;
      createdAt: string;
      updatedAt: string;
    };
    term: {
      id: string;
      name: string;
      code: string;
      description: string;
      isActive: boolean;
      classId: string | null;
      createdAt: string;
      updatedAt: string;
    };
  };
  

const Chapters = () => {



  const router = useRouter()

  const {subject} = useParams()

  function onCreateClick(subject:string) {
    router.push(ADMIN_ROUTES.createChapter(subject))
  }

  const { data, isLoading } = useQuery({
    queryKey: ["chapters"],
    queryFn: () => apiHandler({ method: "GET", url: "/chapter/all" }),
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
        <Button className="ml-auto" onClick={()=>onCreateClick(subject as string)}>
          Create Chapter
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
                    <TableHead>Subject</TableHead>
                    <TableHead>Term</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="overflow-y-scroll h-full">
                  {
                    data?.data?.map((chapter: IChapter) => (
                      <TableRow onClick={()=>onRowClick(chapter.name)} className="" key={chapter.id}>
                        <TableCell className="font-medium border-b border-border">{chapter.name}</TableCell>
                        <TableCell className="border-b border-border">
                          <Badge variant="outline" className="font-mono">
                            {chapter.code}
                          </Badge>
                        </TableCell>
                        <TableCell className="max-w-[300px] border-b border-border">
                          <div className="truncate" title={chapter?.description || "-"}>
                            {chapter?.description || "-"}
                          </div>
                        </TableCell>
                        <TableCell className="border-b border-border">
                          <Badge
                            variant={chapter.isActive ? "default" : "secondary"}
                            className={chapter.isActive ? "bg-green-100 text-green-800 hover:bg-green-100" : ""}
                          >
                            {chapter.isActive ? "Active" : "Inactive"}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-start border-b border-border">
                          <Badge variant="outline">{chapter?.subject?.name || "-"}</Badge>
                        </TableCell>
                        <TableCell className="text-start border-b border-border">
                          <Badge variant="outline">{chapter?.term?.name || "-"}</Badge>
                        </TableCell>
                        <TableCell className="text-start text-sm text-muted-foreground border-b border-border">
                          {formatDate(chapter.createdAt)}
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
                              <DropdownMenuItem onClick={() => handleEdit(chapter.id)}>
                                <Edit className="mr-2 h-4 w-4" />
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleDelete(chapter.id)} className="text-red-600">
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

export default Chapters
