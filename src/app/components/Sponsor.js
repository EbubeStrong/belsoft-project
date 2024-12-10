"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import sponsorStyle from "../../styles/sponsor.module.css";

const Sponsor = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <section className={sponsorStyle.sponsorSection}>
      <div className={sponsorStyle.sponsorTextOne}>
        <h3 data-aos="fade-in" data-aos-delay="100">
          Sponsor The Next Friday
        </h3>
      </div>

      <div className={sponsorStyle.sponsorHeader}>
        <h2 data-aos="fade-in" data-aos-delay="200">
          Why Sponsor <br />
          Founders Friday?
        </h2>
      </div>

      <div className={sponsorStyle.sponsorTextForm}>
        <div className={sponsorStyle.sponsorText}>
          <div className={sponsorStyle.circleContent}>
            <div className={sponsorStyle.circle}>
              <h3>
                Networking <br />
                Opportunities
              </h3>
              <p>
                Connect with industry leaders, founders, and potential partners.
              </p>
            </div>

            <div className={sponsorStyle.circle}>
              <h3>
                Community <br />
                Impact
              </h3>
              <p>
                Support the growth and development of the startup ecosystem.
              </p>
            </div>
          </div>

          <div className={sponsorStyle.circleContent}>
            <div className={sponsorStyle.circle}>
              <h3>
                Brand <br />
                Association
              </h3>
              <p>
                Align your brand with innovation and entrepreneurial success.
              </p>
            </div>

            <div className={sponsorStyle.circle}>
              <h3>Visibility</h3>
              <p>
                Gain exposure to a targeted audience of young professionals and
                entrepreneurs.
              </p>
            </div>
          </div>
        </div>

        <div className={sponsorStyle.formContent}>
          <h2>How To Sponsor</h2>
          <p>
            <i>Ready to Make an Impact?</i>
          </p>
          <p className={sponsorStyle.text}>
            Fill out the form below or contact us at [contact email/phone
            number] to learn more about how you can sponsor the next Founders
            Friday.
          </p>

          <form action="">
            <div className={sponsorStyle.labelInputWrap}>
              <div className={sponsorStyle.labelInput}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Full name" required />
              </div>

              <div className={sponsorStyle.labelInput}>
                <label htmlFor="company">Company (optional)</label>
                <input type="text" id="company" placeholder="Company name" />
              </div>
            </div>

            <div className={sponsorStyle.labelInputWrap}>
              <div className={sponsorStyle.labelInput}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email address"
                  required
                />
              </div>

              <div className={sponsorStyle.labelInput}>
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Phone number"
                  required
                />
              </div>
            </div>

            <div className={sponsorStyle.btn}>
              <button>
                Sponsor{" "}
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    style={{fill: "rgba(245, 243, 247, 1)"}}
                  >
                    <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Sponsor;
