"use client"
import { Section, VideoPlayer } from '@/components/common'
import React, { useEffect, useRef, useState } from 'react'

const VideoPlay = () => {



    return (

        <Section direction='row' className=''>
            <div className="h-full flex-1 bg-blue-100/50">
                <VideoPlayer usageType="USER" />
            </div>
            <div className='min-w-[20rem] h-full '>
                <></>
            </div>
        </Section>
    )
}

export default VideoPlay