import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbarhome";
import type { Key } from "react";

function Carousal() {
  const [slide, setSlide] = useState<boolean>(() => {
    const stored = localStorage.getItem("slide");
    return stored ? JSON.parse(stored) : false;
  });

  const navigate = useNavigate();

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

      {/* 🔑 WRAPPER */}
      <div className="relative min-h-screen overflow-hidden">

        {/* Background A – Client */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            slide ? "opacity-0" : "opacity-100"
          }`}
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dboscnm7g/image/upload/v1768240172/client_carousal_1_zmrwmt.png')",
          }}
        />

        {/* Background B – Freelancer */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            slide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dboscnm7g/image/upload/v1768240173/freelance_carousal_main_bgimage_1_mhdell.png')",
          }}
        />

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />

          {/* HERO */}
          <div className="flex-1 flex items-center">
            {!slide ? (
              /* ================= CLIENT (RIGHT) ================= */
              <div className="w-full flex justify-end">
                <div className="max-w-md pr-20 text-right">
                  <h1 className="text-3xl font-bold text-black leading-tight">
                    Hire with Insight<br />
                    Build with Speed
                  </h1>

                  <button className="mt-6 px-6 py-3 bg-black text-white rounded-md" onClick={()=>navigate("./signin")}>
                    Join the Hive as Client
                  </button>
                </div>
              </div>
            ) : (
              /* ================= FREELANCER (LEFT) ================= */
              <div className="w-full flex justify-start">
                <div className="max-w-md pl-20 text-left">
                  <h1 className="text-3xl font-bold text-black leading-tight">
                    Do What You Love<br />
                    Earn What You Deserve
                  </h1>

                  <button className="mt-6 px-6 py-3 bg-black text-white rounded-md" onClick={()=>navigate("./signin")}>
                    Join the Hive as Freelancer
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* PROGRESS BAR */}
          <div className="mt-auto flex justify-center pb-10">
            <div className="w-40 h-2 bg-white/40 overflow-hidden rounded">
              <div
                key={slideKey}
                className="h-full bg-black animate-fill"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousal;
