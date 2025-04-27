"use client"
import { Section } from "@/components/common"
import { Button } from "@/components/ui/button";
import { Scroll } from "@/components/common";
import { ADMIN_ROUTES } from "@/constants/routes";
import { useRouter } from "next/navigation";

 const AdminVideos = () => {

    const router = useRouter();

    function onCreateClick() {
      router.push(ADMIN_ROUTES.createVideo);
    }

    return (
        <Section direction="column">
        <div className="py-3 px-3 bg-white border-b border-background  w-full flex">
          <Button className="ml-auto" onClick={onCreateClick}>
            Add Video
          </Button>
        </div>
  
        <Scroll className="px-3">
          ss
        </Scroll>
  
      </Section>
    )
}
export default AdminVideos