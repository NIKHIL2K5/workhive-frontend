import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
  return (
    <nav className="w-full">
      <div className="flex items-center justify-between w-full px-8 py-4">
        <img
          src="https://res.cloudinary.com/dboscnm7g/image/upload/v1763030368/WORKHIVE_LOGO-removebg-preview_pfnlpq.png"
          className="h-24"
          alt="WorkHive"
          onClick={()=>navigate("/home")}
        />

        <div className="flex gap-10">
          <p  className="font-medium font-[arial] font-bold">Explore Opportunities</p>
          <p className="font-medium font-[arial] font-bold">Find Freelancers</p>
        </div>

        <div className="flex gap-4">
          <button className="px-4 py-2 rounded-lg font-medium font-[arial] font-bold" onClick={()=>navigate("./signup")}>
            Join the Hive
          </button>
          <button className="px-4 py-2 rounded-lg font-medium font-[arial] font-bold" onClick={()=>navigate("./signup")}>
            Log in
          </button>
        </div>
      </div>
    </nav>
  );
}



export default Navbar