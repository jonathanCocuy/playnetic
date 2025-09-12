import { NavLink } from "react-router-dom";
// React Icons
import logo from "../assets/logo.png";

import "./sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGamepad,
    faHouse,
    faBell,
    faStar,
    faRightFromBracket,
    faUsers,
} from "@fortawesome/free-solid-svg-icons";

export const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="container__logo">
                <img className="logo" src={logo} alt="logo" />
            </div>
            <ul className="container__list page">
                <li className="list">
                    <NavLink to="/home" className="link">
                        <FontAwesomeIcon icon={faHouse} size="2x" />
                    </NavLink>
                </li>
                <li className="list">
                    <NavLink to="/games" className="link">
                        <FontAwesomeIcon icon={faGamepad} size="2x" />
                    </NavLink>
                </li>
                <li className="list">
                    <NavLink to="/notifications" className="link">
                        <FontAwesomeIcon icon={faBell} size="2x" />
                    </NavLink>
                </li>
            </ul>
            <hr />
            <ul className="container__list user">
                <li className="list">
                    <NavLink to="/profile" className="link">
                        <FontAwesomeIcon icon={faUsers} size="2x" />
                    </NavLink>
                </li>
                <li className="list">
                    <NavLink to="/points" className="link">
                        <FontAwesomeIcon icon={faStar} size="2x" />
                    </NavLink>
                </li>
            </ul>
            <hr />
            <ul className="container__list logout">
                <li className="list">
                    <NavLink to="/logout" className="link">
                        <FontAwesomeIcon icon={faRightFromBracket} size="2x" />
                        <p>Logout</p>
                    </NavLink>
                </li>
            </ul>
        </aside>
    );
};
