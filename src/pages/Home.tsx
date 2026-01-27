import { useState, useEffect } from "react";


function Home() {
   const [slide, setSlide] = useState<boolean>(() => {
      const stored = localStorage.getItem("slide")
      return stored ? JSON.parse(stored) : false
   })


   useEffect(() => {
      const id = setInterval(() => {
         setSlide(prev=>!prev)
      }, 10000)
      return () => clearInterval(id)
   }, [slide])

   useEffect(() => {
      localStorage.setItem("slide", JSON.stringify(slide))
   }, [slide])

   return (
      <>
         <style>
            {`
@keyframes fill{
               from{
                  width:0%
               }
                  to{
                     width:100%
                  }
}
`}
         </style>
         <div>
            <div className={`flex flex-col justify-end items-center w-full min-h-screen bg-no-repeat bg-center bg-cover ${slide
               ? "bg-[url('https://res.cloudinary.com/dboscnm7g/image/upload/v1768240173/freelance_carousal_main_bgimage_1_mhdell.png')]"
               : "bg-[url('https://res.cloudinary.com/dboscnm7g/image/upload/v1768240172/client_carousal_1_zmrwmt.png')]"
               }`}>
               <div className="w-40 h-1 bg-white/40 overflow-hidden rounded m-10">
                  <div className="h-full bg-black animate-[fill_10s_linear_infinite]" />
               </div>
            </div>
         </div>
      </>
   )
}



export default Home;