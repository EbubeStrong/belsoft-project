import registerStyles from '../../styles/registerAdvert.module.css';

const Register = () => {
    return(
         <section className={registerStyles.register}>
        <div className={registerStyles.text}>
        <h2>Register And Be Part of Our Community</h2>
        <p>
          Join our community of over 1000+ founders, developers, and tech
          junkies in general. <br /> Be inspired by people who live to inspire!
        </p>
        </div>

            <div className={registerStyles.image}>
          <img src="./images/Frame 719.png" alt="" />
        </div>

            <div className={registerStyles.btn}>
          <button>Register Now <span></span></button>
        </div>
      </section>
    )
}

export default Register 