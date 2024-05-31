import "./Header.scss";

export default function Header() {
  return (
    <>
      <div className="header">
        <img
          className="header__title"
          width="172"
          height="26"
          src="/src/assets/wealthsimple.svg"
          alt="Wealthsimple - home page"
        />
        <div className="header__wrapper">
          <button className="header__button" type="button">
            Log In
          </button>
          <button className="header__link" type="button">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}
