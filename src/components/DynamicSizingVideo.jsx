import React, { useRef, useEffect, useState } from 'react'; 
import useEventListener from "@use-it/event-listener";

function DynamicSizingVideo(props) {

    const videoContainerRef = useRef(null); 
    const [width, setWidth] = useState(0); 
    const [aspectRatio, setAspectRatio] = useState(0); 
    const { id, widthFraction } = props; 

    let getVideo = () => document.getElementById(id); 

    // Get dimensions once upon page load 
    useEffect(() => {
        setWidth(window.innerWidth); 
    }, []);

    // whenever the width changes, re-style the video 
    useEffect(() => {
        let video = getVideo(); 
        if (video) {
            let newWidth = width * widthFraction; 
            let newHeight = aspectRatio * newWidth; 
            video.style.width = `${newWidth}px`;
            video.style.height = `${newHeight}px`;  
            video.style.border = '2px solid #ecedf0'; 
        }
    }, [width]); 

    // width is synchronized to width of window 
    useEventListener('resize', () => {
        setWidth(window.innerWidth); 
    }); 

    // store reference to video node on application load 
    useEffect(() => {  
        if (videoContainerRef.current) {
            // get the video 
            let video = getVideo(); 
            // ensure it is displayed 
            video.style.display = 'block'; 
            // save the aspect ratio of the video 
            let { videoWidth, videoHeight } = video; 
            setAspectRatio( videoHeight / videoWidth ); 
            // add the video to its container 
            videoContainerRef.current.appendChild(video); 
        } 
    }, [videoContainerRef]); 

    return <div ref={videoContainerRef} />; 

}; 

export default DynamicSizingVideo; 