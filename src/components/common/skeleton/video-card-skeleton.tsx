import { Skeleton } from "@/components/ui/skeleton";

const SkeletonVideoCard = () => {
    return (
        <div className=" rounded-3xl p-4 space-y-2 shadow">
            <div className="relative">
                <Skeleton className="w-full aspect-video rounded-md" />
                <Skeleton className="absolute bottom-2 right-2 h-6 w-16 rounded-md" />
            </div>

            <Skeleton className="h-6 w-3/4" />

            <Skeleton className="h-4 w-full" />

            <div className="flex flex-col space-y-2">
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-4 w-1/3" />
            </div>
        </div>
    );
};

export default SkeletonVideoCard;