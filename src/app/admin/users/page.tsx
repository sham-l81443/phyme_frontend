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

interface IUserData {
  id: string
  email: string
  name: string
  phone: string | null
  hasAcceptedTerms: boolean
  role: string
  isTermsAccepted: boolean
  classId: string | null
  isVerified: boolean
  registrationType: string
  syllabusId: string | null
  createdAt: string
  updatedAt: string
  class: {
    id: string
    name: string
    code: string
    description?: string
    isActive: boolean
    syllabusId: string
    createdAt: string
    updatedAt: string
  }
  syllabus:
  {
    id: string,
    name: string,
    code: string,
    isActive: boolean,
    createdAt: string,
    updatedAt: string,
    description?: string
}
 
}

const Users = () => {



  const router = useRouter()

  function onCreateClick() {
    router.push(ADMIN_ROUTES.createTerm)
  }

  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: () => apiHandler({ method: "GET", url: "/users/all" }),
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
          Create Term
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
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Class</TableHead>
                    <TableHead>Syllabus</TableHead>
                    <TableHead>Verified</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="overflow-y-scroll h-full">
                  {
                    data?.data?.map((user: IUserData) => (
                      <TableRow onClick={()=>{router.push(ADMIN_ROUTES.userDetails(user.id))}} key={user.id}>
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell>
                          {user.email}
                        </TableCell>
                        <TableCell>
                          {user.phone || "-"}
                        </TableCell>
                        <TableCell className="max-w-[300px]">
                          <div className="truncate" title={user?.role || "-"}>
                            {user?.role || "-"}
                          </div>
                        </TableCell>
                        <TableCell className="text-start">
                          <Badge variant="outline">{user?.class?.name || "-"}</Badge>
                        </TableCell>
                        <TableCell className="text-start">
                          <Badge variant="outline">{user?.syllabus?.name || "-"}</Badge>
                        </TableCell>
                        <TableCell className="text-start text-sm text-muted-foreground">
                          <Badge variant={user?.isVerified ? "secondary" : "destructive"}>{user?.isVerified ? "Yes" : "No"}</Badge>
                        </TableCell>
                        <TableCell className="text-start text-sm text-muted-foreground">
                          {formatDate(user.updatedAt)}
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
                              <DropdownMenuItem onClick={() => handleEdit(user.id)}>
                                <Edit className="mr-2 h-4 w-4" />
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleDelete(user.id)} className="text-red-600">
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

export default Users
