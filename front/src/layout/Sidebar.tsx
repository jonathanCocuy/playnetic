import { NavLink } from "react-router-dom";
import { BiSolidHome, BiSolidUser, BiSolidStar, BiLogOut } from "react-icons/bi";
import { GiConsoleController } from "react-icons/gi";
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
            <BiSolidHome size={35} className="icon" />
          </NavLink>
        </li>
        <li className="list">
          <NavLink to="/games" className="link">
            <GiConsoleController size={35} className="icon" />
          </NavLink>
        </li>
      </ul>
      <hr />
      <ul className="container_list user">
        <li className="list">
          <NavLink to="/profile" className="link">
            <BiSolidUser size={35} className="icon" />
          </NavLink>
        </li>
        <li className="list">
          <NavLink to="/points" className="link">
            <BiSolidStar size={35} className="icon" />
          </NavLink>
        </li>
      </ul>
      <hr />
      <ul className="container_list logout">
        <li className="list">
          <NavLink to="/logout" className="link">
            <BiLogOut size={35} className="icon" />
            <p>Logout</p>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};
