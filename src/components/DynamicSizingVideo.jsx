import React, { useRef, useEffect, useState } from 'react'; 
import useEventListener from "@use-it/event-listener";

function DynamicSizingVideo(props) {

    const videoContainerRef = useRef( null ); 
    const [width, setWidth] = useState( window.innerWidth ); 
    const [aspectRatio, setAspectRatio] = useState( 0 ); 
    const { id, widthFraction } = props; 

    // whenever the width changes, re-style the video 
    useEffect(() => {
        let video = document.getElementById(id); 
        if (video && aspectRatio) {
            let newWidth = width * widthFraction; 
            let newHeight = aspectRatio * newWidth; 
            video.style.display = 'block'; 
            video.style.width = `${newWidth}px`;
            video.style.height = `${newHeight}px`;  
            video.style.border = '2px solid #ecedf0'; 
        }
    }, [width, aspectRatio, id, widthFraction]); 

    // width is synchronized to width of window 
    useEventListener('resize', () => {
        setWidth(window.innerWidth); 
    }); 

    // compute aspect ratio of video when metadata attached 
    useEffect(() => {
        if (!aspectRatio) {
            let video = document.getElementById(id); 
            let ready = video.readyState === 4;
            if (ready) {
                let ratio = video.videoHeight / video.videoWidth; 
                setAspectRatio( ratio ); 
            } else {
                video.addEventListener('loadedmetadata', () => {
                    let video = document.getElementById(id); 
                    let ratio = video.videoHeight / video.videoWidth; 
                    setAspectRatio( ratio ); 
                }); 
            }
        }
    }, [aspectRatio, id]); 

    // move video to container on application startup
    useEffect(() => {  
        if (videoContainerRef.current) {
            let video = document.getElementById(id); 
            videoContainerRef.current.appendChild(video); 
        } 
    }, [videoContainerRef, id]); 

    return <div ref={videoContainerRef} />; 

}; 

export default DynamicSizingVideo; 