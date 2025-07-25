import { BrowserRouter } from "react-router-dom";
// Componets Layout
import { Sidebar } from "./Sidebar";
import { useState } from "react";
import { Topbar } from "./Topbar";
import { RightAside } from "./RightAside";
// Games
import IdCard from "../games/components/idCard/idCard";
import GameCard from "../components/GameCard/GameCard";

import "./mainlayout.scss";

// import LoginScreen from "../screens/loginScreen/LoginScreen";

export const MainLayout = () => {
  const [logged, setLogged] = useState(true)
  const [exerciseCount, setExerciseCount] = useState(1);
  const [levelCount, setLevelCount] = useState(2);

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
            <button onClick={() => setLogged(!logged)}>Cambiar estado</button>
            <div className="game_container">
              {logged && 
              <IdCard 
                exerciseCount={exerciseCount} 
                setExerciseCount={setExerciseCount} 
                levelCount={levelCount} 
                setLevelCount={setLevelCount} 
              />}
              {!logged && (
                <>
                  <GameCard
                    title="Selección"
                    image="https://img.freepik.com/vector-gratis/cabecera-twitter-noche-juego_23-2151087804.jpg?t=st=1751826663~exp=1751830263~hmac=e095b8558c8b484ee0392c825ef785af7d988c98d05856195fd6e60b90e3efcc&w=1380"
                    description="Descripción de la selección"
                  />
                  <GameCard
                    title="Selección"
                    image="https://img.freepik.com/vector-gratis/cabecera-twitter-noche-juego_23-2151087804.jpg?t=st=1751826663~exp=1751830263~hmac=e095b8558c8b484ee0392c825ef785af7d988c98d05856195fd6e60b90e3efcc&w=1380"
                    description="Descripción de la selección"
                  />
                </>
              )}
            </div> 
          </div>
        </div>
        <RightAside exerciseCount={exerciseCount} levelCount={levelCount} />
      </div>

      {/* <LoginScreen/> */}
    </BrowserRouter>
  );
};
