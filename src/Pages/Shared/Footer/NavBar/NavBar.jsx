import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Providers/AuthProviders";
import { FaShoppingCart} from 'react-icons/fa';
import useCart from '../../../../hooks/useCart';

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart()
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  const navItems = (
    <>
      <Link to="/">Home</Link>
      <Link to="/menu"> Menu</Link>
      <Link to="/order/salad"> Order Food</Link>
      <Link to="/secret">secret</Link>
      <li>
        <Link to="/dashboard/mycart">
          <button className="btn gap-2">
            <FaShoppingCart></FaShoppingCart>
            <div className="badge badge-secondary">+{cart?.length || 0}</div>
          </button>
        </Link>
      </li>

      {user ? (
        <>
          &&
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src={user.photoURL} />
            </div>
          </div>
          <button onClick={handleLogOut} className="btn btn-ghost">
            logout
          </button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
        </>
      )}
    </>
  );
  return (
    <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
          >
            {navItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-5">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Get started</a>
      </div>
    </div>
  );
};

export default NavBar;
