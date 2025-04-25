import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ADMIN_ROUTES } from "@/constants/routes";
import { getClassList } from "@/services/admin/class";
import { getSyllabusList } from "@/services/admin/syllabus";
import { useQuery } from "@tanstack/react-query";
// import { setNonPersistedDataById } from "@/store/store";
import { useRouter } from "next/navigation";
import React from "react";

const Class = () => {
  const chapters = [];

  const zeroChapters = chapters.length < 1;

  const router = useRouter();

  function onCreateClick() {
    router.push(ADMIN_ROUTES.createClass);
  }

  const { data: classList, isPending: isClassFetchingLoading } = useQuery({
    queryKey: ['class-list'],
    queryFn: getClassList,
  })


  return (
    <Card className="min-h-full max-h-full flex flex-col overflow-hidden">
      <CardHeader className="flex justify-between flex-row">
        <CardTitle className="text-2xl">Classes</CardTitle>
        <Button className="ml-auto" onClick={onCreateClick}>
          Create Class
        </Button>
      </CardHeader>
      {zeroChapters ? (
        <CardContent className="flex-1 h-full flex justify-center items-center overflow-auto">
          <p>No ClassClass Found </p>
        </CardContent>
      ) : (
        <CardContent className="flex-1 h-full overflow-auto">
          <p>No Class Found </p>
        </CardContent>
      )}
    </Card>
  );
};

export default Class;
