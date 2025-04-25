import axiosInstance from "@/lib/axios"
import { IVideo } from "@/types/common";
import { AxiosResponse } from "axios";


export type IVideoResponseById = {
    data: IVideo;
    message: string;
    status: string;
    error: string | null;
    code: number;
    timestamp: string;
}

export type IVideoResponse = {
    data: IVideo[];
    message: string;
    status: string;
    error: string | null;
    code: number;
    timestamp: string;
    meta: {
        isLocked: boolean;
    };
};
export const getLivevideos = async (): Promise<IVideoResponse> => {

    const response = await axiosInstance.get<IVideoResponse>('tuition/list');

    return response.data;

}


export const getVideoById = async (videoId: string): Promise<IVideoResponseById> => {
    const response = await axiosInstance.get<IVideoResponseById>(`tuition/${videoId}`);
    return response.data;
} 