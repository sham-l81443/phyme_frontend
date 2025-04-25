import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { setNonPersistedDataById } from "@/store/store";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const Subject = () => {
  // const chapters = [];

  // const zeroChapters = chapters.length < 1;

  const router = useRouter();

  // function onCreateClick() {
  //   setNonPersistedDataById({ id: "currentTab", data: { value: "notes" } });
  //   router.push("/admin/note");
  // }

  return (
    <Card className="min-h-full max-h-full flex flex-col overflow-hidden">
      <CardHeader className="flex">
        <CardTitle className="text-2xl">Config</CardTitle>
        <CardDescription>Configure Your deafult selection</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 h-full overflow-auto">

      </CardContent>
      <CardFooter className="flex justify-between items-center pb-0  py-4 px-5 ">
        <Button type="button" variant="outline" onClick={() => router.back()}>
          Go Back
        </Button>
        <Button type="submit" className="" disabled={false}>
          {false ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Creating...
            </>
          ) : (
            "Create Class"
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Subject;
