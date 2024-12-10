import foundersStyle from "../../styles/founders.module.css";

const Founders = () => {
  return (
    <section className={foundersStyle.foundersDocumentary}>
      <div className={foundersStyle.image}>
        <img src="./images/conference.png" alt="" />
      </div>

      <div className={foundersStyle.textContent}>
        <p>
          At Founder's Friday, Every Friday Is a Learning <br /> Experience!
        </p>
        <p>
          Join us in our mission to transform ideas into impact and shape the
          future of <br /> Nigeria's startup landscape.
        </p>

        <button>
          Register <span></span>
        </button>
      </div>
    </section>
  );
};

export default Founders;
