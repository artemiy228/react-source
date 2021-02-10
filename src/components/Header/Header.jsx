import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <a className="header__logo-link" href="#1">
            <img
              className="header__logo-photo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
              alt="logo"
            />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
