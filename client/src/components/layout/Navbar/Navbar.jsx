import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import Login from '../../views/Login/Login';
import Register from '../../views/Register/Register';
import { useState } from 'react';
import image from '../../../img/logo.png';
const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleLogin = () => {
    if (showRegister) {
      setShowRegister(false);
    }
    setShowLogin(!showLogin);
  };

  const handleRegister = () => {
    if (showLogin) {
      setShowLogin(false);
    }
    setShowRegister(!showRegister);
  };

  const style = 'text-[14px] cursor-pointer ml-[25px] mobile:ml-[10px]';
  return (
    <div>
      <div className="navbar h-[60px] shadow-md relative z-10 bg-[#ec633e]">
        <div className="wrapper pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex justify-between items-center mobile:pl-0 mobile:pr-0">
          {/*  Left side of navbar */}
          <div className="left flex flex-1 items-center">
            <div className="language cursor-pointer text-[16px] mobile:hidden">EN</div>
            <div className="searchInput flex border-[2px] border-solid border-lightgrey rounded-md items-center ml-[10px] p-[5px] focus-within:border-[#8a4af3] transition-all">
              <input className="input outline-none mobile:w-[50px]" type="text" />
              <Search className="text-[16px]" />
            </div>
          </div>
          {/*  Logo */}
          <div className="center flex-1 text-center ">
            <Link className="logo flex items-center justify-center" to="/">
              <img src={image} alt="logo" className="w-[100px] mobile:w-[50px]" />
            </Link>
          </div>
          {/*  Right side of navbar */}
          <div className="right flex flex-1 items-center justify-end mobile:flex-[1.5] mobile:justify-center">
            <Link to="/register" className={style}>
              Register
            </Link>
            <Link to="/login" className={style}>
              Sign in
            </Link>
            <Link className={style} to="/cart">
              <Badge badgeContent={2} color="primary">
                <ShoppingCartOutlined as={Link} to="/cart" />
              </Badge>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
