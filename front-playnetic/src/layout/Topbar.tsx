import "./topbar.scss";
import { BsSearch } from "react-icons/bs";

export const Topbar = () => {
  return (
    <div className="topbar">
      <div className="container_input">
        <BsSearch size={20} color="white"/>
        <input
          className="search_input"
          type="text"
          name="search"
          id="search"
          placeholder="Search game or category"
        />
      </div>
    </div>
  );
};
