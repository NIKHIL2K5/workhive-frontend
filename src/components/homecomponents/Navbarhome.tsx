import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-transparent">
      <div className="flex items-center justify-between w-full px-6 sm:px-8 py-4">
        
        {/* Logo */}
        <img
          src="https://res.cloudinary.com/dboscnm7g/image/upload/v1763030368/WORKHIVE_LOGO-removebg-preview_pfnlpq.png"
          className="h-16 sm:h-20 cursor-pointer"
          alt="WorkHive"
          onClick={() => navigate("/home")}
        />

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10">
          <p className="font-bold font-[arial] cursor-pointer hover:opacity-80">
            Explore Opportunities
          </p>
          <p className="font-bold font-[arial] cursor-pointer hover:opacity-80">
            Find Freelancers
          </p>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex gap-4">
          <button
            className="px-4 py-2 rounded-lg font-bold font-[arial]"
            onClick={() => navigate("./signup")}
          >
            Join the Hive
          </button>
          <button
            className="px-4 py-2 rounded-lg font-bold font-[arial]"
            onClick={() => navigate("./signup")}
          >
            Log in
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-6">
          <p
            className="font-bold font-[arial] cursor-pointer"
            onClick={() => {
             
              setOpen(false);
            }}
          >
            Explore Opportunities
          </p>

          <p
            className="font-bold font-[arial] cursor-pointer"
            onClick={() => {
              
              setOpen(false);
            }}
          >
            Find Freelancers
          </p>

          <div className="flex flex-col gap-4 pt-4">
            <button
              className="px-4 py-2 rounded-lg font-bold font-[arial]"
              onClick={() => {
                navigate("./signup");
                setOpen(false);
              }}
            >
              Join the Hive
            </button>
            <button
              className="px-4 py-2 rounded-lg font-bold font-[arial]"
              onClick={() => {
                navigate("./signup");
                setOpen(false);
              }}
            >
              Log in
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
