import { About } from "./components/About";
import { Features } from "./components/Features";
import  HeroTemplate from './components/HeroTemplate'; 

import { HowItWorks } from "./components/HowItWorks";
import { ScrollToTop } from "./components/ScrollToTop";
import { Team } from "./components/Team";
import { Testimonials } from "./components/Testimonials";
import "./App.css";
import ContactForm from "./components/ContactForm";
import Footer  from "./components/Footer";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Hero /> */}
      <HeroTemplate/>

      {/* <Sponsors /> */}
      <About />
      <HowItWorks />
      <Features />
      <ContactForm/> 
      
      {/* <Services /> */}
      {/* <Cta /> */}
      <Testimonials />
      <Team />
      {/* <Pricing /> */}
      {/* <Newsletter /> */}
      {/* <FAQ /> */}
      {/* <Footer /> */}
      <ScrollToTop />

      <Footer/> 

    </>
  );
}

export default App;
