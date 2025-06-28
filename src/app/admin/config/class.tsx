import { Scroll } from "@/components/common";
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


  const router = useRouter();

  function onCreateClick() {
    router.push(ADMIN_ROUTES.createClass);
  }

  const { data: classList, isPending: isClassFetchingLoading } = useQuery({
    queryKey: ['class-list'],
    queryFn: getClassList,
  })

  const zeroChapters = classList?.data?.length === 0;


  console.log(classList)

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
          <Scroll>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 py-5">
              {classList?.data?.map((chapter: any) => (
                <Card key={chapter?.id}>
                  <CardHeader>
                    <CardTitle>{chapter?.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{chapter?.code}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Scroll>
        </CardContent>
      )}
    </Card>
  );
};

export default Class;
