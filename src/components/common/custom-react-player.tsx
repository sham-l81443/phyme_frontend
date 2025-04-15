"use client";
import React, { useEffect, useRef } from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import { HERO_1 } from "@/assets/png";
import Image from "next/image";
import { VideoPlayer } from "./video-player";

const CustomReactPlayer = () => {
    // Define the source for Plyr

    const playerRef = useRef<Plyr | undefined>(undefined);

    const source: Plyr.SourceInfo = {
        type: "video",
        sources: [
            {
                src: 'GaXEUF4Q93k', // URL of the video
                provider: "youtube", // Use "youtube" for YouTube videos
            },
        ],
    };
    // const plyrOptions = {
    //     controls: [
    //         'play-large', 'play', 'progress', 'current-time', 'mute',
    //         'volume', 'captions', 'settings', 'fullscreen'
    //     ],
    //     settings: ['captions', 'quality', 'speed'],
    //     youtube: {
    //         noCookie: true,
    //         rel: 0,
    //         showinfo: 0,
    //         iv_load_policy: 3,
    //         modestbranding: 1,
    //         origin: typeof window !== 'undefined' ? window.location.origin : '',
    //     },
    //     autopause: true,
    //     hideControls: false,
    //     resetOnEnd: false,
    //     disableContextMenu: true,
    // };


    return (
        <>

            <VideoPlayer usageType="USER" />
        </>
    );
};

export default CustomReactPlayer;
