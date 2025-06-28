import "./topbar.scss";
import { useState } from "react";
import { BsSearch, BsCaretDownFill } from "react-icons/bs";
import Profile from "../assets/My-photo-profile.png";

export const Topbar = () => {
  const [profileOpen, setProfileOpen] = useState<boolean>(false);

  function openIt() {
    setProfileOpen(!profileOpen)
  }

  console.log(profileOpen)

  return (
    <div className="topbar">
      <div className="container_input">
        <BsSearch size={20} color="white" />
        <input
          className="search_input"
          type="text"
          name="search"
          id="search"
          placeholder="Search game or category"
        />
      </div>
      <div className="container_profile">
        <div className="text_name">
          <p className="text">Disfruta tu juego,</p>
          <p className="name">Jonathan Cocuy</p>
        </div>
        <button className="button_profile" onClick={openIt}>
          <img className="profile_image" src={Profile} alt="Profile image" />
          <BsCaretDownFill size={12} color="white" />
        </button>
        <div className={profileOpen ? "menu open" : "menu close"}>
          <li>Editar perfil</li>
          <li>Cambiar foto</li>
        </div>

      </div>
      <></>
    </div>
  );
};
