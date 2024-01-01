import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import logo from '../assets/Logo.png';
import react from '../assets/react.svg';

export default function Nav() {
  const navget = useNavigate();
  const navparUser = localStorage.getItem('Sumpent');

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('userData'))
  );

  console.log(currentUser?.email);
  console.log(currentUser?.displayName);

  const handleLogout = () => {
     localStorage.clear("")
   window.location.reload
    

  };

  return (
    <div className="shadow-md mb-5">
      <div className="navbar bg-base-100 h-[12vh] rounded-lg border-[1px] shadow-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="/">الرئيسية</a>
              </li>
              <li>
                <a>من نحن</a>{' '}
              </li>
              <li>
                <a>الدعم</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img className="h-8" src={react} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <Link to="/">
              <li>
                <a>الرئيسية</a>
              </li>
            </Link>

            <Link to="/About">
              <li>
                <a>من نحن</a>
              </li>
            </Link>

            <li>
            <a>الدعم</a>
            </li>
       {currentUser || navparUser === 'true' ? (
             <Link to={"/Data"}><li>
              <a>حسابي</a>
            </li></Link> 
          ) : (
            <li>
              <a></a>
            </li>
            )}
          </ul>
        </div>

        <div className="navbar-end gap-2">
          {currentUser || navparUser === 'true' ? (
           <Link to={"/Signin"}><button
              onClick={handleLogout}
             type='submit'
              className="btn btn-primary p- text-[12px] max-sm:btn-sm"
            >
              خروج
            </button></Link> 
          ) : (
            <Link to="/signin">
              <a className="btn btn-primary p-2 text-[12px] max-sm:btn-sm">
                تسجيل دخول
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}