"use client";
import { useState } from "react";
import faqStyles from "../../styles/faq.module.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Tracks the currently active FAQ item

  const faqs = [
    { question: "What is your return policy?", answer: "You can return items within 30 days of purchase." },
    { question: "Do you offer international shipping?", answer: "Yes, we ship to over 100 countries worldwide." },
    { question: "How can I track my order?", answer: "Once your order is shipped, you'll receive a tracking number." },
    { question: "What payment methods do you accept?", answer: "We accept credit cards, PayPal, and more." },
    { question: "Can I cancel or modify my order?", answer: "You can cancel or modify your order within 24 hours." },
    { question: "Do you have a physical store?", answer: "No, we are an online-only platform." },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle open/close
  };

  return (
    <section className={faqStyles.faq}>
      <h2>Frequently Asked Questions</h2>
      <div className={faqStyles.faqContainer}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`${faqStyles.faqItem} ${activeIndex === index ? faqStyles.active : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className={faqStyles.question}>
              {faq.question}
              <span className={faqStyles.icon}>
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && <div className={faqStyles.answer}>{faq.answer}</div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
