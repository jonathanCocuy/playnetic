import { Sidebar } from "./Sidebar";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Topbar } from "./Topbar";
import { RightAside } from "./RightAside";
import IdCard from "../games/components/idCard/idCard"
import "./mainlayout.scss"

export const MainLayout = () => {
  const [exerciseCount, setExerciseCount] = useState(1);
  return (
    <BrowserRouter>
      <div className="main_layout">
        <Sidebar />
        <div className="content_center">
          <Topbar />
          <div className="game">
            <IdCard exerciseCount={exerciseCount} setExerciseCount={setExerciseCount} />
          </div>
        </div>
        <RightAside exerciseCount={exerciseCount}/>
      </div>
    </BrowserRouter>
  );
};
