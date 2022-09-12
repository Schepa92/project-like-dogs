import logo from './img/logo.svg';
// import logo from './img/pug.png';

import s from './Header.module.css';

const Header = () => {
  return (
    <div className={s.container}>
      <img src={logo} alt='logo' className={s.logo} />
    </div>
  );
};
export default Header;
