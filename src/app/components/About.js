// src/app/components/About.js
import aboutStyle from "../../styles/about.module.css"
export default function About() {
  return (
    <section className={aboutStyle.aboutSection}>
      <div className={aboutStyle.image}>
        <img src="./images/about-img.png" alt="" />
      </div>

      <div className={aboutStyle.aboutTextContent}>
        <div className={aboutStyle.border}>
          {/* <img src="./images/Line 1.png" alt="" />  */}
        </div>

        <div className={aboutStyle.aboutText}>
          <h2>Who Are We?</h2>
          <p>
            Born from the vibrant startup ecosystem of Abuja, we recognized the
            need for a consistent, high-quality networking platform where
            founders, innovators, and tech enthusiasts could connect, share
            ideas, and foster collaboration.
          </p>

          <div className={aboutStyle.btns}>
            <button>
              Register <span className={aboutStyle.arrowIcon}></span>
            </button>
            <button>
              Donate <span className={aboutStyle.moneyIcon}></span>
            </button>
          </div>

          <h3>
            Founder's Friday is more than just a meetup - it's a movement.
          </h3>
        </div>
      </div>
    </section>
  );
}
