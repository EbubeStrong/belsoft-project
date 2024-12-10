"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
import heroStyle from "../../styles/hero.module.css";
// import heroStyle from "../../styles/hero.module.css";

const Hero = () => {
      useEffect(() => {
    AOS.init({ duration: 1200 }); 
  }, []);
  return (
    <section className={heroStyle.heroContainer}>
      <div className={heroStyle.heroSection}>
        <div className={heroStyle.textSection} data-aos="fade-right">
          <p className={heroStyle.firstText}>
            Join Our premier monthly meetup for startup founders and tech
            visionaries
          </p>
          <h1>Connect, Collaborate Innovate!</h1>

          <p className={heroStyle.secondText}>
            Every last Friday of the month, we bring together the brightest
            minds in our local tech ecosystem. Whether you're a seasoned
            entrepreneur or just starting your journey, Founder's Friday is your
            launchpad for new ideas, valuable connections, and game-changing
            opportunities
          </p>

          <button>
            Register For Our Next Event <span className={heroStyle.icon}></span>
          </button>
          <p className={heroStyle.dateText}>
            Join Us for our next meetup on the 26th of July, 2024
          </p>

          <div className={heroStyle.collabIcons}>
            <div className={heroStyle.icon}>
              <img
                data-aos="fade-in"
                data-aos-delay="400"
                src="./images/Ellipse 1.svg"
                alt=""
              />
              <img
                data-aos="fade-in"
                data-aos-delay="500"
                src="./images/Ellipse 2.png"
                alt=""
              />
              <img
                data-aos="fade-in"
                data-aos-delay="600"
                src="./images/Ellipse 3.svg"
                alt=""
              />
              <img
                data-aos="fade-in"
                data-aos-delay="700"
                src="./images/Ellipse 4.svg"
                alt=""
              />
              <img
                data-aos="fade-in"
                data-aos-delay="800"
                src="./images/Ellipse 5.svg"
                alt=""
              />
            </div>
          </div>

          <h3>
            Become a collaborator today{" "}
            <span className={heroStyle.icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ fill: "rgb(203, 201, 204)" }}
              >
                <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
                <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path>
              </svg>
            </span>
          </h3>
        </div>
        {/* </motion.div> */}

        <div className={heroStyle.imageSection} data-aos="fade-in">
          <img src="./images/Group 3.png" alt="" />
        </div>
      </div>

      <div className={heroStyle.lineImage} data-aos="fade-left">
        <img src="./images/Vector 1.svg" alt="" />
      </div>
    </section>
  );
};

export default Hero; // Export the Hero component as default
