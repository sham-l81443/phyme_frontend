import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { setNonPersistedDataById } from "@/store/store";
import { useRouter } from "next/navigation";
import React from "react";

const Subject = () => {
  const chapters = [];

  const zeroChapters = chapters.length < 1;

  const router = useRouter();

  function onCreateClick() {
    // setNonPersistedDataById({ id: "currentTab", data: { value: "subjects" } });
    router.push("/admin/subject");
  }

  return (
    <Card className="min-h-full max-h-full flex flex-col overflow-hidden">
      <CardHeader className="flex justify-between flex-row">
        <CardTitle className="text-2xl">Subjects</CardTitle>
        <Button className="ml-auto" onClick={onCreateClick}>
          Create Subject
        </Button>
      </CardHeader>
      {zeroChapters ? (
        <CardContent className="flex-1 h-full flex justify-center items-center overflow-auto">
          <p>No Subject Found </p>
        </CardContent>
      ) : (
        <CardContent className="flex-1 h-full overflow-auto">
          <p>No Subject Found </p>
        </CardContent>
      )}
    </Card>
  );
};

export default Subject;
