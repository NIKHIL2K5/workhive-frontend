
import { useState, useEffect } from "react"

type TypewriterProps = {
    classNameDisplaytext: string;
    classNameCursor: string
}

type LeavingProp = {
    isLeaving: boolean
    isExiting: boolean
}

export function Typewriter({ classNameDisplaytext, classNameCursor }: TypewriterProps) {
    const text = "  Going into the hive... "
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
            if (i === text.length - 1) {
                console.log(i)
                clearInterval(intervel)
            }
        }, speed)
        return () => clearInterval(intervel)
    }, [text, speed])
    return (
        <div>
            <span className={classNameDisplaytext}>{displayText}</span>
            <span className={classNameCursor}>|</span>
        </div>
    )
}
export function Preload({ isLeaving, isExiting }: LeavingProp) {

    return (

        <>
            <style>
                {`
@keyframes logoIntro {
  0% {
    transform: scale(1.45);
    border-radius: 0%;
    opacity: 0;
  }

  100% {
    transform: scale(1);
    border-radius: 50%;
  }
}


@keyframes exitUpFade {
  0% {
    opacity: 1;
    transform: translateY(0);
  }

  100% {
    opacity: 0.2;
    transform: translateY(-1090px);
  }
}
`}
            </style>
            <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black transform-gpu"
                style={
                    isExiting
                        ? {
                            animation:
                                "exitUpFade 1.3s cubic-bezier(0.22,1,0.36,1) forwards"
                        }
                        : undefined
                }>
                <img src="https://res.cloudinary.com/dboscnm7g/image/upload/v1763030320/WORKHIVE_LOGO_xi7ty8.png" className="w-106 mb-8 rounded-full
          
          drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]"  style={{
                        animation: "logoIntro 1.9s cubic-bezier(0.22, 1, 0.36, 1) forwards"
                    }}
                    alt="workhivelogo" />
                {/* <h1 className="font-bold text-white-100 absolute top-1/2 bottom-1/2 right-1/2 translate-y-50">Loading ...</h1> */}
                <Typewriter classNameDisplaytext="text-white text-lg font-medium tracking-wide" classNameCursor="text-white text-2xl font-bold 
          animate-[pulse_1s_ease-in-out_infinite]
          drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]
          " />
            </div>
        </>
    )
}
