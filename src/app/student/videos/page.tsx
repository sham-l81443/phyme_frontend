"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import React from "react";

import { useQuery } from "@tanstack/react-query";

// import VideoCardSkeleton from "@/components/global/video-components/video-card-skeleton";
import { Scroll, Section } from "@/components/common";
import { getLivevideos } from "@/services/student";
import { IVideo } from "@/types/common";
import { VideoCard } from "@/components/common";



const TutionVideoList = () => {


    const router = useRouter();

    function onCreateClick() {
        router.push("/admin/tution/create");
    }


    const { data: videos, isPending } = useQuery({ queryKey: ['live-videos'], queryFn: getLivevideos })

    const zeroVideos = (videos?.data ?? []).length < 1;


    return (
        <Section>

            <Scroll>
                {isPending ? (

                    <CardContent className="flex-1 min-h-full max-h-full overflow-auto grid grid-cols-1 md:grid-cols-4 gap-4 p-4 ">
                        {
                            Array?.from({ length: 8 }).map((_, index) => {
                                return (
                                    <div key={index}></div>
                                )
                            })
                        }

                    </CardContent>
                ) :
                    zeroVideos ? (
                        <CardContent className="flex-1 h-full flex justify-center items-center overflow-auto p-4">
                            <p>No Tution Videos Found </p>
                        </CardContent>
                    ) : (
                        <>
                            <CardContent className="flex-1  overflow-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4 ">
                                {
                                    videos?.data?.map((video: Partial<IVideo>) => {
                                        return (
                                            <VideoCard isLocked={videos?.meta?.isLocked} usageType="USER" key={video?.id} video={video} />
                                        )
                                    })
                                }

                            </CardContent>
                        </>
                    )}
            </Scroll>
        </Section>
    );
};

export default TutionVideoList;
