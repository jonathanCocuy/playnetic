import { BrowserRouter } from "react-router-dom";
// Componets Layoud
import { Sidebar } from "./Sidebar";
import { useState } from "react";
import { Topbar } from "./Topbar";
import { RightAside } from "./RightAside";
// Games
import IdCard from "../games/components/idCard/idCard";
import GameCard from "../components/GameCard/GameCard";
import { ButtonGame } from "../components/ButtonGame/ButtonGame";

import DND from "../assets/ImageGame.png";

import "./mainlayout.scss";

export const MainLayout = () => {
  const LOGGED = true
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
            {LOGGED && <IdCard exerciseCount={exerciseCount} setExerciseCount={setExerciseCount} />}
            <GameCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
              <div className="game_card_content">
                <h1>Game Card</h1>
                <img src={DND} alt="DND" width={100} height={150}/>
                <p>This is a game card</p>
                <ButtonGame />
              </div>
            </GameCard>
          </div>
        </div>
        <RightAside exerciseCount={exerciseCount} />
      </div>
    </BrowserRouter>
  );
};
