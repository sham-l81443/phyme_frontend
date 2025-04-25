import Image from "next/image"
import Link from "next/link"
// import { format } from "date-fns"


// import { IVideo } from "@/types/video"

import { HERO_1 } from "@/assets/png"
import { Calendar, Lock, Crown } from "lucide-react"

import { setStudentDataById } from "@/store/student/studentStore"
import { STUDENT_STORE_KEY } from "@/store/store-key"
import { IVideo } from "@/types/common"
import { formatDate } from "@/utils/date"
// import { Video } from "lucide-react"

interface VideoCardProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    video: Partial<IVideo>,
    usageType: 'ADMIN' | 'USER',
    isLocked?: boolean
}

function handleClickLink(video: Partial<IVideo>) {

    setStudentDataById(STUDENT_STORE_KEY.VIDEO_DATA, video, 'nonPersist')

}

export function VideoCard({ video, usageType, isLocked }: VideoCardProps) {


    const href = usageType === 'ADMIN' ? `/admin/tution/video/${video.id}` : `/student/videos/${video.id}`

    return (
        <div className="group overflow-hidden rounded-3xl border bg-card  transition-all h-max shadow relative ">
            {(isLocked && video.isFree === false) && <div className="absolute inset-0 bg-gray-300/50 z-10 flex-col center gap-y-2">
                <Lock className="text-muted-foreground" />
                <span className="text-center text-muted-foreground">Be our premium member to unlock this video</span>
            </div>}
            <Link

                onClick={() => {
                    handleClickLink(video)
                }}
                href={href} className="block">
                <div className="relative aspect-video overflow-hidden border-b ">
                    <Image
                        src={HERO_1}
                        alt={video?.name || 'video image'}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                    />
                    {!video?.isFree &&

                        <div className="px-4 absolute right-0 top-3">
                            <Crown className="text-yellow-500" />
                        </div>
                    }
                    <div className="absolute bottom-2 right-2 rounded bg-black/70 px-2 py-1 text-xs text-white">
                        {video.duration}
                    </div>
                </div>
                <div className="p-4">
                    <h3 className="line-clamp-1 font-medium text-foreground">{video.name}</h3>
                    <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{video.description || '-'}</p>
                    <div className="mt-3 flex items-start gap-3 flex-col text-xs text-muted-foreground">
                        <div className="flex items-center gap-1 text-sm">
                            <Calendar className="h-3 w-3" />
                            {/* <span>{formatDistanceToNow(new Date(video.createdAt), { addSuffix: true })}</span> */}
                            <span>Tution Date : {formatDate(video.date)}</span>
                        </div>
                        <div className="flex items-center  text-sm gap-1">
                            {/* <Clock className="h-3 w-3" /> */}
                            <span>Duration : {video.duration}  hours</span>
                        </div>

                    </div>

                </div>
            </Link>
        </div >
    )
}

