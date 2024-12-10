// src/app/page.js
import Hero from "./components/Hero";
import About from "./components/About";
import Offer from "./components/Offer";
import Sponsor from "./components/Sponsor";
import RegisterInfo from "./components/RegisterInfo";
import Register from "./components/RegisterAdvert";
import Founders from "./components/foundersDetail";
import Testimonials from "./components/Testimonial";
import FAQ from "./components/FAQ";


export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Offer />
      <Sponsor />
      <RegisterInfo />
      <Register />
      <Founders />
      <Testimonials />
      <FAQ />
    </>
  );
}
