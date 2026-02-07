import { useState, useEffect } from "react";
import Navbar from "../components/homecomponents/Navbarhome";


function Home() {
  const [slide, setSlide] = useState<boolean>(() => {
    const stored = localStorage.getItem("slide");
    return stored ? JSON.parse(stored) : false;
  });

  useEffect(() => {
    const id = setInterval(() => {
      setSlide(prev => !prev);
    }, 10000);

    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    localStorage.setItem("slide", JSON.stringify(slide));
  }, [slide]);

  const slideKey: Key = slide ? "slide-true" : "slide-false";

  return (
    <>
      <style>
        {`
@keyframes fill {
  from { width: 0% }
  to { width: 100% }
}

.animate-fill {
  animation: fill 10s linear forwards;
}
`}
      </style>

      <div
        className={`flex flex-col w-full min-h-screen bg-no-repeat bg-center bg-cover ${
          slide
            ? "bg-[url('https://res.cloudinary.com/dboscnm7g/image/upload/v1768240173/freelance_carousal_main_bgimage_1_mhdell.png')]"
            : "bg-[url('https://res.cloudinary.com/dboscnm7g/image/upload/v1768240172/client_carousal_1_zmrwmt.png')]"
        }`}
      >
        <Navbar />

        <div className="mt-auto flex justify-center pb-10">
          <div className="w-40 h-2 bg-white/40 overflow-hidden rounded">
            <div
              key={slideKey}
              className="h-full bg-black animate-fill"
            />
          </div>
        </div>
      </div>
    </>
  );
}




export default Home;