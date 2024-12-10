"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
import offerStyle from "../../styles/offer.module.css";

const Offer = () => {
    useEffect(() => {
      AOS.init({ duration: 1200 });
    }, []);
  return (
    <section className={offerStyle.offerSection}>
      <div className={offerStyle.offerContainerOne}>
        <div className={offerStyle.headingText}>
          <h2>Offer</h2>
        </div>
        <div className={offerStyle.faqList}>
          <div
            className={offerStyle.faqItem}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <input type="checkbox" id="faq1" className={offerStyle.faqToggle} />
            <label htmlFor="faq1" className={offerStyle.faqQuestion}>
              How can I register for the event?
            </label>
            <div className={offerStyle.faqAnswer}>
              <p>
                You can register for the event by visiting our event
                registration page and filling out the online registration form.
                Payment can be made via credit card, PayPal, or bank transfer.
              </p>
            </div>
          </div>

          <div
            className={offerStyle.faqItem}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <input type="checkbox" id="faq2" className={offerStyle.faqToggle} />
            <label htmlFor="faq2" className={offerStyle.faqQuestion}>
              Is there a deadline for registration?
            </label>
            <div className={offerStyle.faqAnswer}>
              <p>
                Yes, the registration deadline is [insert date]. Make sure to
                register before this date to secure your spot at the event.
              </p>
            </div>
          </div>

          <div
            className={offerStyle.faqItem}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <input type="checkbox" id="faq3" className={offerStyle.faqToggle} />
            <label htmlFor="faq3" className={offerStyle.faqQuestion}>
              Are the shortened links permanent? Will they expire?
            </label>
            <div className={offerStyle.faqAnswer}>
              <p>
                Our shortened links do not expire by default. They will remain
                active as long as our service is operational. However, users
                with accounts have the option to set expiration dates for their
                links if desired.
              </p>
            </div>
          </div>

          <div
            className={offerStyle.faqItem}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <input type="checkbox" id="faq4" className={offerStyle.faqToggle} />
            <label htmlFor="faq4" className={offerStyle.faqQuestion}>
              Can I transfer my registration to someone else if I can't attend?
            </label>
            <div className={offerStyle.faqAnswer}>
              <p>
                Yes, you can transfer your registration to another person.
                Contact our support team at belsoft@support.com with the details
                of the transfer.
              </p>
            </div>
          </div>

          <div
            className={offerStyle.faqItem}
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <input type="checkbox" id="faq5" className={offerStyle.faqToggle} />
            <label htmlFor="faq5" className={offerStyle.faqQuestion}>
              Will meals and refreshments be provided at the event?
            </label>
            <div className={offerStyle.faqAnswer}>
              <p>
                Yes, breakfast, lunch, and refreshments will be provided
                throughout the day. If you have specific dietary requirements,
                please let us know during the registration process.
              </p>
            </div>
          </div>

          <div
            className={offerStyle.faqItem}
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <input type="checkbox" id="faq6" className={offerStyle.faqToggle} />
            <label htmlFor="faq6" className={offerStyle.faqQuestion}>
              Can I get a refund if I cancel my registration?
            </label>
            <div className={offerStyle.faqAnswer}>
              <p>
                Refunds are available up to 20th December with a processing fee.
                Cancellations after this date will not be eligible for a refund.
              </p>
            </div>
          </div>

          <div
            className={offerStyle.faqItem}
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <input type="checkbox" id="faq7" className={offerStyle.faqToggle} />
            <label htmlFor="faq7" className={offerStyle.faqQuestion}>
              How can I access event materials (like presentation slides) after
              the event?
            </label>
            <div className={offerStyle.faqAnswer}>
              <p>
                All event materials will be made available on our website within
                [insert timeframe] after the event. You'll receive instructions
                on how to access them via email.
              </p>
            </div>
          </div>

          <div
            className={offerStyle.faqItem}
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <input type="checkbox" id="faq8" className={offerStyle.faqToggle} />
            <label htmlFor="faq8" className={offerStyle.faqQuestion}>
              Is parking available at the event venue?
            </label>
            <div className={offerStyle.faqAnswer}>
              <p>
                Yes, there is ample parking available at the venue. A map with
                parking details will be provided before the event.
              </p>
            </div>
          </div>

          <div
            className={offerStyle.faqItem}
            data-aos="fade-up"
            data-aos-delay="900"
          >
            <input type="checkbox" id="faq9" className={offerStyle.faqToggle} />
            <label htmlFor="faq9" className={offerStyle.faqQuestion}>
              Will there be networking opportunities at the event?
            </label>
            <div className={offerStyle.faqAnswer}>
              <p>
                Yes, we encourage networking throughout the event, including
                breakout sessions, workshops, and an evening social gathering.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={offerStyle.lineImageTwo}>
        <img
          data-aos="fade-left"
          data-aos-delay="100"
          src="./images/Vector 3.svg"
          alt=""
        />
      </div>

      <div className={offerStyle.offerContainerTwo}>
        <div className={offerStyle.offerText}>
          <div className={offerStyle.firstText}>
            <h3 data-aos="fade-up" data-aos-delay="200">
              Founders Friday
            </h3>
            <p
              data-aos="fade-in"
              data-aos-delay="300"
              className={offerStyle.textOne}
            >
              What Happens At <br />
              Founders Friday
            </p>
          </div>

          <div className={offerStyle.secondText}>
            <p data-aos="fade-up" data-aos-delay="400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
              rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula
              dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo
              suscipit id. Maecenas ut ante quis quam lobortis consequat eu id
              turpis. Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas.
            </p>
          </div>

          <button data-aos="fade-in" data-aos-delay="500">
            Learn More{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ fill: "rgb(255, 255, 255)" }}
              >
                <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
              </svg>
            </span>
          </button>
        </div>

        <div className={offerStyle.offerImage}>
          <img
            data-aos="fade-in"
            data-aos-delay="300"
            src="./images/Frame 714.png"
            alt=""
          />
          {/* <img src="" alt="" /> */}
        </div>
      </div>
    </section>
  );
};

export default Offer;
