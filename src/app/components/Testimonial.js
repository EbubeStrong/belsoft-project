"use client";
import testimonialStyles from "../../styles/testimonial.module.css";
import { useState } from "react";

const Testimonials = () => {
  const [next, setNext] = useState(0); // Current testimonial index

  const testimonials = Array.from({ length: 5 }, () => ({
    imageSrc: "./images/Ellipse 309.png",
    altText: "",
    name: "Mr Belba Ngoy",
    message: "Always a remarkable experience for my team and myself",
  }));

  const handleNext = () => {
    setNext((prevNext) => (prevNext + 1) % testimonials.length); // Loop to first if at the end
  };

  const handlePrev = () => {
    setNext((prevNext) =>
      prevNext - 1 < 0 ? testimonials.length - 1 : prevNext - 1
    ); // Loop to last if at the beginning
  };

  return (
    <section className={testimonialStyles.testimonials}>
      <h2>What Do Our Attendees Have To Say?</h2>
      <h4>Well See For Yourself</h4>

      <div
        className={testimonialStyles.testimonialContent}
        style={{
          transform: `translateX(-${(next * 100) / 4}%)`, // Adjust the translateX percentage
          width: `${testimonials.length * (100 / 4)}%`, // Ensure width fits all slides
        }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            className={testimonialStyles.slide}
            key={index}
            style={{ width: `${100 / 3}%` }} // Each slide takes 1/3rd of the container width
          >
            <div className={testimonialStyles.testimonialWrapper}>
              <div className={testimonialStyles.container}>
                <img src={testimonial.imageSrc} alt={testimonial.altText} />
              </div>
              <div className={testimonialStyles.text}>
                <h3>{testimonial.name}</h3>
                <p>{testimonial.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={testimonialStyles.arrowIcons}>
        <span onClick={handlePrev}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={{ fill: "rgb(0, 0, 0)" }}
          >
            <path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"></path>
          </svg>
        </span>

        <span onClick={handleNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={{ fill: "rgb(0, 0, 0)" }}
          >
            <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
          </svg>
        </span>
      </div>
    </section>
  );
};

export default Testimonials;
