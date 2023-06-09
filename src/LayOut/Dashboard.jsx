import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUserMinus, FaHamburger} from 'react-icons/fa';
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart()
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-[#D1A054]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full  text-base-content">
          {/* Sidebar content here */}
          <li>
            <NavLink to='/dashboard/home'><FaHome></FaHome>User Home</NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/history'><FaWallet></FaWallet>Payment history</NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/reservation'><FaCalendarAlt></FaCalendarAlt>Reservation</NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart>my Cart 
            <div className="badge  badge-secondary">+{cart?.length || 0}</div>
            </NavLink>
            
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to='/'><FaHome></FaHome> Home</NavLink>
          </li>
          <li>
          <NavLink to="/menu"><FaHamburger></FaHamburger> Menu</NavLink>
          </li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
