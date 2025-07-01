import { BrowserRouter } from "react-router-dom";
// Componets Layoud
import { Sidebar } from "./Sidebar";
import { useState } from "react";
import { Topbar } from "./Topbar";
import { RightAside } from "./RightAside";
// Games
import IdCard from "../games/components/idCard/idCard";

import "./mainlayout.scss";

export const MainLayout = () => {
  const [exerciseCount, setExerciseCount] = useState(1);

  return (
    <BrowserRouter
      future={{
        v7_startTransition: true, // Used to improve browsing performance
        v7_relativeSplatPath: true, // Change the behavior of routes with * to make them more intuitive
      }}
    >
      <div className="main_layout">
        <Sidebar />
        <div className="content_center">
          <Topbar />
          <div className="game" key={exerciseCount}>
            <IdCard
              exerciseCount={exerciseCount}
              setExerciseCount={setExerciseCount}
            />
          </div>
        </div>
        <RightAside exerciseCount={exerciseCount} />
      </div>
    </BrowserRouter>
  );
};
