import { BrowserRouter, Routes, Route } from "react-router-dom";
// Componets Layout
import { Sidebar } from "./Sidebar";
import { useState } from "react";
import { Topbar } from "./Topbar";
import { RightAside } from "./RightAside";
// Games
import { DndGames } from "../gamesRender/DndGames/DndGames";
import { SelectionGames } from "../gamesRender/SelectionGames/SelectionGames";
import { EnglishGames } from "../gamesRender/EnglishGames/EnglishGames";
import { CrosswordGames } from "../gamesRender/CrosswordGames/CrosswordGames";
import { LetterSoupGames } from "../gamesRender/LetterSoupGames/LetterSoupGames";
import { WritingGames } from "../gamesRender/WritingGames/WritingGames";
import { RelationshipGames } from "../gamesRender/RelationshipGames/RelationshipGames";
import { GamesCatalog } from "../gamesRender/GamesCatalog/GamesCatalog";
import "./mainlayout.scss";
import LoginScreen from "../screens/loginScreen/LoginScreen";

export const MainLayout = () => {
    const [ isLogged, setIsLogged ] = useState<boolean>(false)
    console.log(isLogged)

    // Global state for all games
    const [levelCount, setLevelCount] = useState(1);

    return (
        <div className="principal">
            {isLogged ? (
                <BrowserRouter
                    future={{
                        v7_startTransition: true, // Used to improve browsing performance
                        v7_relativeSplatPath: true, // Change the behavior of routes with * to make them more intuitive
                    }}
                >
                    <div className="main-layout">
                        <Sidebar isLogged={isLogged} setIsLogged={setIsLogged}/>
                        <div className="content-center">
                            <Topbar />
                            <div className="game" key={levelCount}>
                                <Routes>
                                    <Route
                                        path="/home"
                                        element={<h1>Home</h1>}
                                    />
                                    <Route
                                        path="/games"
                                        element={<GamesCatalog />}
                                    />
                                    <Route
                                        path="/selection/:difficulty"
                                        element={<SelectionGames levelCount={levelCount} setLevelCount={setLevelCount} />}
                                    />
                                    <Route
                                        path="/dnd/:difficulty"
                                        element={<DndGames /* levelCount={levelCount} setLevelCount={setLevelCount}  *//>}
                                    />
                                    <Route
                                        path="/english/:difficulty"
                                        element={<EnglishGames />}
                                    />
                                    <Route
                                        path="/lettersoup/:difficulty"
                                        element={<LetterSoupGames />}
                                    />
                                    <Route
                                        path="/crossword/:difficulty"
                                        element={<CrosswordGames />}
                                    />
                                    <Route
                                        path="/writing/:difficulty"
                                        element={<WritingGames />}
                                    />
                                    <Route
                                        path="/relationship/:difficulty"
                                        element={<RelationshipGames />}
                                    />
                                </Routes>
                            </div>
                        </div>
                        <RightAside levelCount={levelCount} />
                    </div>

                </BrowserRouter>
            ) : (
                <LoginScreen isLogged={isLogged} setIsLogged={setIsLogged}/>
            )}
        </div>
        
    );
};
