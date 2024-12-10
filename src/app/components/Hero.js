"use client"; // Mark this file as client-side
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import heroStyle from "../../styles/hero.module.css";
// import heroStyle from "../../styles/hero.module.css";

const Hero = () => {
      useEffect(() => {
    AOS.init({ duration: 1200 }); // Initialize AOS with a custom duration
  }, []);
  return (
    <section className={heroStyle.heroContainer}>
        <div className={heroStyle.heroSection}>
        <div className={heroStyle.textSection}data-aos="fade-right">
          <p className={heroStyle.firstText}
          >
              Join Our premier monthly meetup for startup founders and tech
              visionaries
            </p>
            <h1>Connect, Collaborate Innovate!</h1>

            <p className={heroStyle.secondText}>
              Every last Friday of the month, we bring together the brightest
              minds in our local tech ecosystem. Whether you're a seasoned
              entrepreneur or just starting your journey, Founder's Friday is
              your launchpad for new ideas, valuable connections, and
              game-changing opportunities
            </p>

            <button>
          Register For Our Next Event <span className={heroStyle.icon}></span>
            </button>
            <p className={heroStyle.dateText}>
              Join Us for our next meetup on the 26th of July, 2024
            </p>

        <div className={heroStyle.collabIcons}>
              <div className={heroStyle.icon}>
                <img src="./images/Ellipse 1.svg" alt="" />
                <img src="./images/Ellipse 2.png" alt="" />
                <img src="./images/Ellipse 3.svg" alt="" />
                <img src="./images/Ellipse 4.svg" alt="" />
                <img src="./images/Ellipse 5.svg" alt="" />
              </div>
            </div>

        <h3>Become a collaborator today <span className={heroStyle.icon}></span></h3>
        </div>
        {/* </motion.div> */}

          <div className={heroStyle.imageSection}
          data-aos="fade-in"
          >
            <img src="./images/Group 3.png" alt="" />
          </div>
        </div>

      <div className={heroStyle.lineImage}
      data-aos="fade-left"
      >
          <img src="./images/Vector 1.svg" alt="" />
        </div>
      </section>
  );
};

export default Hero; // Export the Hero component as default
