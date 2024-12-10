// src/app/components/About.js
"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
/* eslint-disable @next/next/no-img-element */
import aboutStyle from "../../styles/about.module.css"
export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <section className={aboutStyle.aboutSection}>
      <div className={aboutStyle.image}>
        <img
          data-aos="fade-in"
          data-aos-delay="300"
          src="./images/about-img.png"
          alt=""
        />
      </div>

      <div className={aboutStyle.aboutTextContent}>
        <div className={aboutStyle.aboutText}>
          <div className={aboutStyle.border}>
            <img
              data-aos="fade-in"
              data-aos-delay="100"
              src="./images/Line 1.png"
              alt=""
            />
          </div>

          <div className={aboutStyle.text}>
            <h2 data-aos="fade-up" data-aos-delay="400">
              Who Are We?
            </h2>
            <p data-aos="fade-in" data-aos-delay="500">
              Born from the vibrant startup ecosystem of Abuja, we recognized
              the need for a consistent, high-quality networking platform where
              founders, innovators, and tech enthusiasts could connect, share
              ideas, and foster collaboration.
            </p>

            <div className={aboutStyle.btns}>
              <button data-aos="fade-up" data-aos-delay="300">
                Register{" "}
                <span className={aboutStyle.arrowIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    style={{ fill: "rgba(245, 243, 247, 1)" }}
                  >
                    <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
                  </svg>
                </span>
              </button>
              <button data-aos="fade-up" data-aos-delay="500">
                Donate{" "}
                <span className={aboutStyle.moneyIcon}>
                  <img src="./images/money-bag.svg" alt="" />
                </span>
              </button>
            </div>

            <h3 data-aos="fade-in" data-aos-delay="800">
              Founder's Friday is more than just a meetup - it's a movement.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

// <section className={aboutStyle.aboutSection}>
//   <div className={aboutStyle.image}>
//     <img
//       data-aos="fade-in"
//       data-aos-delay="300"
//       src="./images/about-img.png"
//       alt=""
//     />
//   </div>

//   <div className={aboutStyle.aboutTextContent}>
//     <div className={aboutStyle.border}>
//       {/* <img src="./images/Line 1.png" alt="" />  */}
//     </div>

//     <div className={aboutStyle.aboutText}>
//       <h2 data-aos="fade-up" data-aos-delay="400">
//         Who Are We?
//       </h2>
//       <p data-aos="fade-in" data-aos-delay="500">
//         Born from the vibrant startup ecosystem of Abuja, we recognized the
//         need for a consistent, high-quality networking platform where
//         founders, innovators, and tech enthusiasts could connect, share
//         ideas, and foster collaboration.
//       </p>

//       <div className={aboutStyle.btns}>
//         <button data-aos="fade-up" data-aos-delay="300">
//           Register <span className={aboutStyle.arrowIcon}></span>
//         </button>
//         <button data-aos="fade-up" data-aos-delay="500">
//           Donate <span className={aboutStyle.moneyIcon}></span>
//         </button>
//       </div>

//       <h3 data-aos="fade-in" data-aos-delay="800">
//         Founder's Friday is more than just a meetup - it's a movement.
//       </h3>
//     </div>
//   </div>
// </section>
