import { useState } from "react";
import { NavLink } from "react-router-dom";
// React Icons
import { IoSearch } from "react-icons/io5";
import { BsCaretDownFill } from "react-icons/bs";
// Images
import Profile from "../assets/My-photo-profile.png";
import "./topbar.scss";

export const Topbar = () => {
  const [profileOpen, setProfileOpen] = useState<boolean>(false);
  // 
  function openIt() {
    setProfileOpen(!profileOpen);
  }

  return (
    <div className="topbar">
      <div className="container_search_input">
        <IoSearch size={30} color="white" />
        <input
          id="search"
          name="search"
          className="search search_alt"
          required
          type="text"
          placeholder="Search game or category"
        />
        <span className="search_border search_border_alt"></span>
      </div>
      <div className="container_profile">
        <div className="text_name">
          <p className="text">Disfruta tu juego,</p>
          <p className="name">Jonathan Cocuy</p>
        </div>
        <button className={profileOpen ? "button_profile active" : "button_profile"} onClick={openIt}>
          <img className="profile_image" src={Profile} alt="Profile image" />
          <BsCaretDownFill size={12} color="white" />
        </button>
        <div className={profileOpen ? "menu open" : "menu close"}>
          <li className="container_option">
            <NavLink className="options_menu" to="/profile">Editar Perfil</NavLink>
          </li>
          <li className="container_option">
            <NavLink className="options_menu" to="/profile">Cambiar foto</NavLink>
          </li>
        </div>
      </div>
      <></>
    </div>
  );
};
