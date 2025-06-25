import { NavLink } from "react-router-dom";
import {
  BiSolidHome,
  BiSolidUser,
  BiSolidStar,
  BiLogOut,
} from "react-icons/bi";
import { GiConsoleController } from "react-icons/gi";
import "./sidebar.scss";

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <img src="https://cdn-icons-png.flaticon.com/512/141/141101.png" alt="logo" width={35}/>
      </ul>
      <ul className="container_list">
        <li className="list">
          <NavLink to="/" className="link">
            <BiSolidHome size={35} className="icon" />
          </NavLink>
        </li>
        <li className="list">
          <NavLink to="/" className="link">
            <GiConsoleController size={35} className="icon" />
          </NavLink>
        </li>
      </ul>
      <ul className="container_list">
        <li className="list">
          <NavLink to="/" className="link">
            <BiSolidUser size={35} className="icon" />
          </NavLink>
        </li>
        <li className="list">
          <NavLink to="/" className="link">
            <BiSolidStar size={35} className="icon" />
          </NavLink>
        </li>
      </ul>
      <ul className="container_list">
        <li className="list">
          <NavLink to="/" className="link">
            <BiLogOut size={35} className="icon" />
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};
