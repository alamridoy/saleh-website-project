// components
import { Navbar, Footer } from "@/components";

// sections
import Home from "./home";
import Services from "./services";
import Location from "./location";
import Pricing from "./pricing";
import Contact from "./contactform";

export default function Campaign() {
  return (
    <>
      <Navbar />

      <div id="home">
        <Home />
      </div>

      <div id="services">
        <Services />
      </div>

      <div id="location">
        <Location />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <div id="footer">
        <Footer />
      </div>
    </>
  );
}
