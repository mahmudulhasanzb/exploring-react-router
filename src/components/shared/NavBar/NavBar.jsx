import React from 'react';
import { Links, NavLink } from 'react-router';

const NavBar = () => {
  const NavBarLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? 'btn btn-primary' : 'btn btn-ghost'
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? 'btn btn-primary' : 'btn btn-ghost'
        }
      >
        About
      </NavLink>
      <NavLink
        to="/blog"
        className={({ isActive }) =>
          isActive ? 'btn btn-primary' : 'btn btn-ghost'
        }
      >
        Blogs
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm border-b">
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
              {' '}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {NavBarLinks}
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl">
          daisyUI
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-10">{NavBarLinks}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default NavBar;
