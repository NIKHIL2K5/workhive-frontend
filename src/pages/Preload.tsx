
import { useState, useEffect } from "react"
export function Typewriter({ classNameDisplaytext, classNameCursor }) {
    const text = "  Loading... "
    const speed = 80
    const [displayText, setDisplaytext] = useState("")
    // console.log(displayText)
    // console.log(text.length)
    useEffect(() => {
        let i = 0
        setDisplaytext("")
        const intervel = setInterval(() => {
            // console.log(i)
            console.log(displayText)
            setDisplaytext((prev) => prev + text[i])
            i++
            if (i === text.length-1) {
                console.log(i)
                clearInterval(intervel)
            }
        }, speed)
        return () => clearInterval(intervel)
    }, [text, speed])
    return (
        <>
            <span className={classNameDisplaytext}>{displayText}</span>
            <span className={classNameCursor}>|</span>
        </>
    )
}
export function Preload() {

    return (
        <div>
            <img src="https://res.cloudinary.com/dboscnm7g/image/upload/v1763030320/WORKHIVE_LOGO_xi7ty8.png" className="h-screen w-screen relative" />
            {/* <h1 className="font-bold text-white-100 absolute top-1/2 bottom-1/2 right-1/2 translate-y-50">Loading ...</h1> */}
            <Typewriter classNameDisplaytext="font-bold text-white-100 absolute top-1/2 bottom-1/2 right-1/2 translate-y-50" classNameCursor="font-bold text-white-100 absolute top-1/2 bottom-1/2 right-1/2 translate-y-50 pl-[20px] animate-pulse ml-1" />
        </div>
    )
}
