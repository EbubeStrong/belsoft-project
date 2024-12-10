import offerStyle from "../../styles/offer.module.css";

const Offer = () => {
  return (
    <section className={offerStyle.offerSection}>
      <div className={offerStyle.offerContainerOne}>
        <div className={offerStyle.headingText}>
          <h2>Offer</h2>
        </div>
        <div className={offerStyle.faqList}>
          <div className={offerStyle.faqItem}>
            <input type="checkbox" id="faq1" className={offerStyle.faqToggle} />
            <label htmlFor="faq1" className={offerStyle.faqQuestion}>
              How does URL shortening work?
            </label>
            <div className={offerStyle.faqAnswer}>
              <p>
                URL shortening works by taking a long URL and creating a
                shorter, unique URL that redirects to the original page. When a
                user clicks the shortened link, they are quickly redirected to
                the intended destination.
              </p>
            </div>
          </div>

          <div className={offerStyle.faqItem}>
            <input type="checkbox" id="faq2" className={offerStyle.faqToggle} />
            <label htmlFor="faq2" className={offerStyle.faqQuestion}>
              Is it necessary to create an account to use the URL shortening
              service?
            </label>
            <div className={offerStyle.faqAnswer}>
              <p>
                While you can use basic URL shortening without an account,
                creating an account gives you access to additional features such
                as link history, analytics, and custom URLs.
              </p>
            </div>
          </div>

          <div className={offerStyle.faqItem}>
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

          <div className={offerStyle.faqItem}>
            <input type="checkbox" id="faq4" className={offerStyle.faqToggle} />
            <label htmlFor="faq4" className={offerStyle.faqQuestion}>
              Are there any limitations on the number of URLs I can shorten?
            </label>
            <div className={offerStyle.faqAnswer}>
              <p>
                Free users can shorten a limited number of URLs per day. Premium
                users enjoy higher or unlimited URL shortening capabilities,
                depending on their subscription plan.
              </p>
            </div>
          </div>

          <div className={offerStyle.faqItem}>
            <input type="checkbox" id="faq5" className={offerStyle.faqToggle} />
            <label htmlFor="faq5" className={offerStyle.faqQuestion}>
              Can I customize the shortened URLs to reflect my brand or content?
            </label>
            <div className={offerStyle.faqAnswer}>
              <p>
                Yes, premium users can customize their shortened URLs with their
                own branded domain or custom slugs, making the links more
                recognizable and on-brand.
              </p>
            </div>
          </div>

          <div className={offerStyle.faqItem}>
            <input type="checkbox" id="faq6" className={offerStyle.faqToggle} />
            <label htmlFor="faq6" className={offerStyle.faqQuestion}>
              Can I track the performance of my shortened URLs?
            </label>
            <div className={offerStyle.faqAnswer}>
              <p>
                Yes, of course you can track the performance of your shortened
                URLs
              </p>
            </div>
          </div>

          <div className={offerStyle.faqItem}>
            <input type="checkbox" id="faq7" className={offerStyle.faqToggle} />
            <label htmlFor="faq7" className={offerStyle.faqQuestion}>
              How secure is the URL shortening service? Are the shortened links
              protected against spam or malicious activity?
            </label>
            <div className={offerStyle.faqAnswer}>
              <p>
                It is going to be very secured in getting the URL shortening
                service and yes the shortened links are used to protect against
                spam or malicious activity
              </p>
            </div>
          </div>

          <div className={offerStyle.faqItem}>
            <input type="checkbox" id="faq8" className={offerStyle.faqToggle} />
            <label htmlFor="faq8" className={offerStyle.faqQuestion}>
              What is a QR code and what can it do?
            </label>
            <div className={offerStyle.faqAnswer}>
              <p>
                A QR code (Quick Response code) is a scannable two-dimensional
                barcode that can store and share various types of
                information—such as website links, contact details, Wi-Fi
                credentials, or payment details—and is easily accessed using a
                smartphone or QR scanner to connect the physical and digital
                worlds seamlessly
              </p>
            </div>
          </div>

          <div className={offerStyle.faqItem}>
            <input type="checkbox" id="faq9" className={offerStyle.faqToggle} />
            <label htmlFor="faq9" className={offerStyle.faqQuestion}>
              Is there an API available for integrating the URL shortening
              service into my own applications or websites?
            </label>
            <div className={offerStyle.faqAnswer}>
              <p>
                Yes, an API is typically available for integrating a URL
                shortening service into your own applications or websites,
                allowing you to programmatically shorten URLs, manage links, and
                access analytics directly within your software.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={offerStyle.lineImageTwo}>
        <img src="./images/Vector 3.svg" alt="" />
      </div>

      <div className={offerStyle.offerContainerTwo}>
        <div className={offerStyle.offerText}>
          <div className={offerStyle.firstText}>
            <h3>Founders Friday</h3>
            <p className={offerStyle.textOne}>
              What Happens At <br />
              Founders Friday
            </p>
          </div>

          <div className={offerStyle.secondText}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
              rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula
              dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo
              suscipit id. Maecenas ut ante quis quam lobortis consequat eu id
              turpis. Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas.
            </p>
          </div>

          <button>
            Learn More <span></span>
          </button>
        </div>

        <div className={offerStyle.offerImage}>
          <img src="./images/Frame 714.png" alt="" />
          {/* <img src="" alt="" /> */}
        </div>
      </div>
    </section>
  );
};

export default Offer;
