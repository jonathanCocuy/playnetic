import { BrowserRouter, Routes, Route } from "react-router-dom";
// Componets Layout
import { Sidebar } from "./Sidebar";
import { useState } from "react";
import { Topbar } from "./Topbar";
import { RightAside } from "./RightAside";
// Games
import { SelectionGames } from "../games/SelectionGames/SelectionGames";
import { DndGames } from "../games/DndGames/DndGames";

import "./mainlayout.scss";
import { EnglishGames } from "../games/EnglishGames/EnglishGames";
import { CrosswordGames } from "../games/CrosswordGames/CrosswordGames";
import { LetterSoupGames } from "../games/LetterSoupGames/LetterSoupGames";
import { WritingGames } from "../games/WritingGames/WritingGames";
import { RelationshipGames } from "../games/RelationshipGames/RelationshipGames";

// import LoginScreen from "../screens/loginScreen/LoginScreen";

export const MainLayout = () => {
  const [exerciseCount ] = useState(1);
  const [levelCount ] = useState(1);


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
          <div className="game" key={levelCount}> 
            <Routes>
              <Route path="/selection" element={<SelectionGames />} />
              <Route path="/dnd" element={<DndGames />} />
              <Route path="/english" element={<EnglishGames />} />
              <Route path="/lettersoup" element={<LetterSoupGames />} />
              <Route path="/crossword" element={<CrosswordGames />} />
              <Route path="/writing" element={<WritingGames />} />
              <Route path="/relationship" element={<RelationshipGames />} />
            </Routes>
          </div>
        </div>
        <RightAside exerciseCount={exerciseCount} levelCount={levelCount} />
      </div>

      {/* <LoginScreen/> */}
    </BrowserRouter>
  );
};
