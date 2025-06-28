"use client"


import { Section } from '@/components/common'
import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { getVideoById } from '@/services/student';
import { Skeleton } from '@/components/ui/skeleton';
import { VideoPlayer } from '@/components/common';
import { useRef } from 'react';


const VideoPlay = () => {

    const params = useParams();


    const { data: video, isPending } = useQuery({
        queryKey: ['videoById', params?.videoId],
        queryFn: () => getVideoById(params?.videoId as string),
    })

    const plyrRef = useRef(null)

    return (

        <Section direction='row' className=''>
            <div className="h-full flex-1 ">
                {isPending ? <VideoPlaySkeleton />

                    : <VideoPlayer isPending={isPending} videoData={video?.data} usageType="USER" />}
            </div>
            <div className='min-w-[20rem] h-full bg-gray-100/50'>
                <></>
            </div>
        </Section>
    )
}

export default VideoPlay


const VideoPlaySkeleton = () => {
    return (
        <>
            <Skeleton className='w-full aspect-video rounded-none'></Skeleton>
            <div className="px-4 py-2 mt-4">
                <Skeleton className="h-4 w-1/3  rounded-xs mb-2"></Skeleton>
                <div className="mt-1">
                    <Skeleton className="h-4 w-1/2 mb-2 rounded-xs"></Skeleton>
                </div>
            </div >
        </>
    )
}

