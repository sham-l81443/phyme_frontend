"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scroll } from "@/components/common";
// import { setNonPersistedDataById } from "@/store/store";
import { useRouter } from "next/navigation";
import React from "react";
import { ADMIN_ROUTES } from "@/constants/routes";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getSyllabusList } from "@/services/admin/syllabus";

const Syllabus = () => {
  const chapters = [];

  const zeroChapters = chapters.length < 1;

  const router = useRouter();

  function onCreateClick() {
    router.push(ADMIN_ROUTES.createSyllabus);
  }

  const { data: syllabusList, isPending: isSyllabusFetchingLoading } = useQuery({
    queryKey: ['syllabus-list'],
    queryFn: getSyllabusList,
  })

  console.log(syllabusList)

  return (
    <>
      <div className="py-3 px-3 bg-white border-b border-background  w-full flex">
        <Button className="ml-auto" onClick={onCreateClick}>
          Create Syllabus
        </Button>
      </div>

      <Scroll className="px-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 py-5">

     
       {
        syllabusList?.data?.map((syllabus: any) => (
          <Card key={syllabus.id}>
            <CardHeader>
              <CardTitle>{syllabus.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{syllabus.description}</p>
            </CardContent>
          </Card>
        ))
       }
          </div>
      </Scroll>

    </>
  );
};

export default Syllabus;
