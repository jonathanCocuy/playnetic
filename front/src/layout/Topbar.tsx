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
            <div className="container_search_input">
                <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" />
                <input
                    id="search"
                    name="search"
                    className="search search_alt"
                    required
                    type="text"
                    placeholder="Search game"
                />
                <span className="search_border search_border_alt"></span>
            </div>
            <div className="container_profile">
                <div className="text_name">
                    <p className="text">Disfruta tu juego,</p>
                    <p className="name">Usuario</p>
                </div>
                <button
                    className={
                        profileOpen ? "button_profile active" : "button_profile"
                    }
                    onClick={openIt}
                >
                    <img
                        className="profile_image"
                        src={User}
                        alt="Profile image"
                    />
                    <BsCaretDownFill size={12} color="white" />
                </button>
                <div className={profileOpen ? "menu open" : "menu close"}>
                    <li className="container_option">
                        <NavLink className="options_menu" to="/profile">
                            Editar Perfil
                        </NavLink>
                    </li>
                    <li className="container_option">
                        <NavLink className="options_menu" to="/profile">
                            Cambiar foto
                        </NavLink>
                    </li>
                </div>
            </div>
            <></>
        </div>
    );
};
