import infoStyles from "../../styles/registerInfo.module.css";

const RegisterInfo = () => {
  return (
    <section className={infoStyles.registerInfo}>
      <div className={infoStyles.image}>
        <img src="/images/founders.png" alt="Founders Friday Event" />
      </div>

      <div className={infoStyles.contentContainer}>
        <div className={infoStyles.content}>
          <h2>Founders Friday is coming to</h2>

          <div className={infoStyles.textWrapper}>
            <h3>Kaduna</h3>
            <h3>Lagos</h3>
            <h3>Abuja</h3>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
            rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula
            dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo
            suscipit id. Maecenas ut ante quis quam lobortis consequat eu id
            turpis. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas.
          </p>

          <button>
            Register <span></span>
          </button>
        </div>

        <div className={infoStyles.foundersLogo}>
          <img src="/images/logo.png" alt="Founders Logo" />
        </div>
      </div>
    </section>
  );
};

export default RegisterInfo;