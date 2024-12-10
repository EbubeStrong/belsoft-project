import testimonialStyles from '../../styles/testimonial.module.css';

const Testimonials = () => {
    return(
        <section className={testimonialStyles.testimonials}>
        <h2>What Do Our Attendees Have To Say?</h2>
        <h4>Well See For Yourself</h4>

        <div className={testimonialStyles.images}>
          <img src="./images/Ellipse 309.png" alt="" />
                <div className={testimonialStyles.text}>
          <h3>Mr Belba Ngoy</h3>
          <p>Always a remarkable experience <br /> for my team and myself</p>
          </div>
        </div>

            <div className={testimonialStyles.arrowIcons}>
          <span></span>
          <span></span>
        </div>
      </section>
    )
}

export default Testimonials