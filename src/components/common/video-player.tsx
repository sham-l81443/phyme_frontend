'use client'
import { useEffect, useRef } from "react";
import Plyr from "plyr";
import "plyr/dist/plyr.css"; // Import Plyr styles

import { format } from "date-fns";
import { IVideo } from "@/types/common";
import useStudentStore from "@/store/student/studentStore";
import { STUDENT_STORE_KEY } from "@/store/store-key";

function VideoPlayer({ usageType }: { usageType: 'ADMIN' | 'USER' }) {
    const playerRef = useRef<Plyr | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    // Store function references for event cleanup
    const forwardFuncRef = useRef<((e: Event) => void) | null>(null);
    const rewindFuncRef = useRef<((e: Event) => void) | null>(null);
    const innerRef = useRef(null);
    const videoData: Partial<IVideo> = useStudentStore(state => state.studentStore.nonPersist?.[STUDENT_STORE_KEY.VIDEO_DATA]) || {}


    useEffect(() => {
        // Prevent default context menu on the player container
        const preventContextMenu = (e: Event) => {
            e.preventDefault();
            return false;
        };

        // Add context menu prevention to the player container
        if (containerRef.current) {
            containerRef.current.addEventListener('contextmenu', preventContextMenu);
        }

        if (!playerRef.current) {
            const player = new Plyr("#player", {
                controls: [
                    'play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'fullscreen'
                ],
                settings: ['captions', 'quality', 'speed', 'loop'],
                quality: {
                    default: 720,
                    options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
                    forced: true, // Force quality selection
                    onChange: (quality: number) => {
                        console.log(`Quality changed to ${quality}`);
                    }
                },
                youtube: {
                    quality: 'hd720',
                    modestbranding: 1,
                    rel: 0,
                    enablejsapi: 1,
                    noCookie: true,
                    origin: window.location.origin,
                    playsinline: 1,
                    showinfo: 0,
                    iv_load_policy: 3, // Disable annotations
                    disablekb: 1, // Disable keyboard controls
                    fs: 0, // Hide fullscreen button (we use Plyr's instead)
                },
                clickToPlay: true,
                disableContextMenu: true,
            });

            playerRef.current = player;

            // Custom Forward & Rewind Functions - store references for cleanup
            const forward = () => {
                player.forward(10);
            };

            const rewind = () => {
                player.rewind(10);
            };

            // Store function references for cleanup
            forwardFuncRef.current = forward;
            rewindFuncRef.current = rewind;

            // Add event listeners
            document.getElementById("btn-forward")?.addEventListener("click", forward);
            document.getElementById("btn-rewind")?.addEventListener("click", rewind);

            // Player Events
            player.on("ready", () => {
                console.log("🎬 Plyr is ready!");

                // After player is ready, find and disable YouTube specific elements
                setTimeout(() => {
                    // Hide any iframe elements that might expose YouTube controls
                    const iframe = document.querySelector('iframe');
                    if (iframe) {
                        // Add an overlay to prevent clicks going through to YouTube
                        const overlay = document.createElement('div');
                        overlay.style.position = 'absolute';
                        overlay.style.top = '0';
                        overlay.style.left = '0';
                        overlay.style.width = '100%';
                        overlay.style.height = '100%';
                        overlay.style.zIndex = '10';
                        overlay.style.pointerEvents = 'none';

                        // Only allow clicks for play/pause
                        overlay.addEventListener('click', (e) => {
                            e.stopPropagation();
                            if (player.playing) {
                                player.pause();
                            } else {
                                player.play();
                            }
                        });

                        const iframeParent = iframe.parentElement;
                        if (iframeParent) {
                            iframeParent.appendChild(overlay);
                        }

                        // Set iframe attributes to block right-clicks and other interactions
                        iframe.setAttribute('allowfullscreen', 'false');
                        iframe.style.pointerEvents = 'none';
                    }
                }, 1000);
            });

            player.on("playing", () => console.log("▶️ Video is playing"));
            player.on("pause", () => console.log(
                player
            ));
            player.on("volumechange", () => console.log(`🔊 Volume: ${player.volume}`));

            player.on('ended', () => {
                console.log('ended')
            })

            // Prevent context menu on the player element
            const playerElement = document.getElementById('player');
            if (playerElement) {
                playerElement.addEventListener('contextmenu', preventContextMenu);
            }

            // Disable right click globally for the player container
            document.addEventListener('contextmenu', (e) => {
                const plyrContainer = document.querySelector('.plyr');
                if (plyrContainer && plyrContainer.contains(e.target as Node)) {
                    e.preventDefault();
                    return false;
                }
            });
        }

        // Cleanup event listeners on unmount
        return () => {
            if (containerRef.current) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                containerRef.current.removeEventListener('contextmenu', preventContextMenu);
            }

            const playerElement = document.getElementById('player');
            if (playerElement) {
                playerElement.removeEventListener('contextmenu', preventContextMenu);
            }

            // Use the stored function references for cleanup
            if (forwardFuncRef.current) {
                document.getElementById("btn-forward")?.removeEventListener("click", forwardFuncRef.current);
            }

            if (rewindFuncRef.current) {
                document.getElementById("btn-rewind")?.removeEventListener("click", rewindFuncRef.current);
            }

            // Destroy player on unmount
            if (playerRef.current) {
                playerRef.current.destroy();
            }
        };
    }, []);

    // Add additional global styles to block YouTube-specific elements
    useEffect(() => {
        // Create a style element to inject CSS that hides YouTube elements
        const styleEl = document.createElement('style');
        styleEl.innerHTML = `
            /* Hide YouTube logo, share buttons, etc */
            .ytp-chrome-top,
            .ytp-chrome-bottom,
            .ytp-pause-overlay,
            .ytp-youtube-button,
            .ytp-watermark,
            .ytp-share-button,
            iframe[src*="youtube.com"] .ytp-show-cards-title,
            .ytp-menuitem[aria-label*="Share"],
            .ytp-suggestion-set {
                display: none !important;
                opacity: 0 !important;
                pointer-events: none !important;
            }
            
            /* Prevent YouTube player right-click menu */
            .plyr iframe {
                pointer-events: none !important;
            }
            
            /* Make sure our controls work */
            .plyr__controls {
                pointer-events: auto !important;
            }
        `;
        document.head.appendChild(styleEl);

        return () => {
            document.head.removeChild(styleEl);
        };
    }, []);




    return (

        <div
            className="relative h-full flex flex-col rounded-md "
            ref={containerRef}
        >
            <div className="flex-1 max-h-max ">
                <div
                    ref={innerRef}
                    id="player"
                    data-plyr-provider="youtube"
                    data-plyr-embed-id={"GaXEUF4Q93k"}
                    data-plyr-config='{ "title": "Example Title" }'
                    className="w-full h-full"
                />
            </div>
            <div className="min-h-max ">
                <div className="px-4 py-2">
                    <h1 className="text-2xl font-bold mb-2">{videoData?.name}</h1>
                    <div className="mt-1">
                        <p>
                            {videoData?.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export { VideoPlayer };





{/* Optional custom controls */ }
{/* <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20 ">
                    <button id="btn-rewind" className="bg-white/30 hover:bg-white/50 rounded-full p-2">
                        <span>-10s</span>
                    </button>
                    <button id="btn-forward" className="bg-white/30 hover:bg-white/50 rounded-full p-2">
                        <span>+10s</span>
                    </button>
                </div> */}
{/* <p className="text-muted-foreground">Published on : {format(videoData?.date, "dd MMMM yyyy")}</p> */ }
{/* <div className="relative bg-amber-100 flex-1 h-full aspect-video">

                <div
                    ref={innerRef}
                    id="player"
                    data-plyr-provider="youtube"
                    data-plyr-embed-id={"GaXEUF4Q93k"}
                    data-plyr-config='{ "title": "Example Title" }'
                    className="w-full h-full"
                />

            </div> */}
{/* <div className="min-h-max">
                <div className="p-4">
                    <h1 className="text-2xl font-bold mb-2">{videoData?.name}</h1>
                    <div className="mt-4">
                        <p>
                            {videoData?.description}
                        </p>
                    </div>
                </div>
            </div> */}