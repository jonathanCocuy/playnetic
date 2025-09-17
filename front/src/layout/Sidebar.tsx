import { NavLink } from "react-router-dom";
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

interface LoginScreenProps {
    isLogged: boolean;
    setIsLogged: (value: boolean) => void;
}

export const Sidebar = ({ isLogged, setIsLogged }: LoginScreenProps) => {
    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <div className="logo-container">
                    <img className="logo" src={logo} alt="Playnetic" />
                    <div className="logo-glow"></div>
                </div>
            </div>

            <nav className="sidebar-nav">
                <div className="nav-section">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <NavLink to="/home" className="nav-link" title="Inicio">
                                <div className="icon-wrapper">
                                    <FontAwesomeIcon icon={faHouse} />
                                </div>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/games" className="nav-link" title="Juegos">
                                <div className="icon-wrapper">
                                    <FontAwesomeIcon icon={faGamepad} />
                                </div>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/notifications" className="nav-link" title="Notificaciones">
                                <div className="icon-wrapper">
                                    <FontAwesomeIcon icon={faBell} />
                                </div>
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="nav-divider">
                    <div className="divider-dot"></div>
                </div>

                <div className="nav-section">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <NavLink to="/profile" className="nav-link" title="Perfil">
                                <div className="icon-wrapper">
                                    <FontAwesomeIcon icon={faUsers} />
                                </div>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/points" className="nav-link" title="Puntos">
                                <div className="icon-wrapper">
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="nav-divider">
                    <div className="divider-dot"></div>
                </div>

                <div className="nav-section nav-section-bottom">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <button className="nav-link logout-btn" onClick={() => setIsLogged(!isLogged)} title="Cerrar sesión">
                                <div className="icon-wrapper">
                                    <FontAwesomeIcon icon={faRightFromBracket} />
                                </div>
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </aside>
    );
};
