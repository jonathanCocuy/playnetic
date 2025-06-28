import { Sidebar } from "./Sidebar";
import { BrowserRouter } from "react-router-dom";
import { Topbar } from "./Topbar";
import { RightAside } from "./RightAside";
import "./mainlayout.scss"

export const MainLayout = () => {
  return (
    <BrowserRouter>
      <div className="main_layout">
        <Sidebar />
        <div className="content_center">
          <Topbar />
        </div>
        <RightAside />
      </div>
    </BrowserRouter>
  );
};
