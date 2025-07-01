import { NavLink } from "react-router-dom";
// React Icons
import { IoNotifications, IoGameController, IoHome, IoPerson, IoStar, IoLogOut } from "react-icons/io5";
import "./sidebar.scss";

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="container_logo">
        <img
          className="logo"
          src="https://cdn-icons-png.flaticon.com/512/141/141101.png"
          alt="logo"
        />
      </div>
      <ul className="container_list page">
        <li className="list">
          <NavLink to="/home" className="link">
            <IoHome size={35} className="icon" />
          </NavLink>
        </li>
        <li className="list">
          <NavLink to="/games" className="link">
            <IoGameController size={35} className="icon" />
          </NavLink>
        </li>
        <li className="list">
          <NavLink to="/notifications" className="link">
            <IoNotifications size={35} className="icon" />
          </NavLink>
        </li>
      </ul>
      <hr />
      <ul className="container_list user">
        <li className="list">
          <NavLink to="/profile" className="link">
            <IoPerson size={35} className="icon" />
          </NavLink>
        </li>
        <li className="list">
          <NavLink to="/points" className="link">
            <IoStar size={35} className="icon" />
          </NavLink>
        </li>
      </ul>
      <hr />
      <ul className="container_list logout">
        <li className="list">
          <NavLink to="/logout" className="link">
            <IoLogOut size={35} className="icon" />
            <p>Logout</p>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};
