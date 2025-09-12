import { useState } from "react";
import { NavLink } from "react-router-dom";
// React Icons
import { BsCaretDownFill } from "react-icons/bs";
// Images
import User from "../assets/user.png";
import "./topbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const Topbar = () => {
    const [profileOpen, setProfileOpen] = useState<boolean>(false);
    //
    function openIt() {
        setProfileOpen(!profileOpen);
    }

    return (
        <div className="topbar">
            <div className="container__search-input">
                <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" />
                <input
                    id="search"
                    name="search"
                    className="search search__alt"
                    required
                    type="text"
                    placeholder="Search game"
                />
                <span className="search__border search__border-alt"></span>
            </div>
            <div className="container__profile">
                <div className="text__name">
                    <p className="text">Disfruta tu juego,</p>
                    <p className="name">Usuario</p>
                </div>
                <button
                    className={
                        profileOpen ? "button-profile active" : "button-profile"
                    }
                    onClick={openIt}
                >
                    <img
                        className="profile-image"
                        src={User}
                        alt="Profile image"
                    />
                    <BsCaretDownFill size={12} color="white" />
                </button>
                <div className={profileOpen ? "menu open" : "menu close"}>
                    <li className="container-option">
                        <NavLink className="options_menu" to="/profile">
                            Editar Perfil
                        </NavLink>
                    </li>
                    <li className="container_option">
                        <NavLink className="options-menu" to="/profile">
                            Cambiar foto
                        </NavLink>
                    </li>
                </div>
            </div>
            <></>
        </div>
    );
};
