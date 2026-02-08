import Navbar from "../components/homecomponents/Navbarhome";
import Carousal from "../components/homecomponents/Carousal";
import Chooseus from "../components/homecomponents/Chooseus";
import Services from "../components/homecomponents/Services";
import Testimonials from "../components/homecomponents/Testimonials";
import Served from "../components/homecomponents/Served";
import Footer from "../components/homecomponents/Footer";

function Home() {
  return (
    <>
    <Navbar />
      <Carousal />
      <Chooseus />
      <Services />
      <Testimonials />
      <Served/>
      <Footer/>
    </>

  )
}

export default Home;
