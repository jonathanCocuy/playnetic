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
import LoginScreen from "../screens/loginScreen/LoginScreen";

export const MainLayout = () => {
    const [ isLogged, setIsLogged ] = useState<boolean>(false)
    console.log(isLogged)

    // Global state for all games
    const [levelCount, setLevelCount] = useState(1);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-200 to-slate-100 relative overflow-x-hidden before:content-[''] before:fixed before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[radial-gradient(circle_at_10%_10%,rgba(94,23,235,0.03)_0%,transparent_40%),radial-gradient(circle_at_90%_90%,rgba(124,58,237,0.03)_0%,transparent_40%),radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_60%)] before:pointer-events-none before:-z-10">
            {isLogged ? (
                <BrowserRouter
                    future={{
                        v7_startTransition: true,
                        v7_relativeSplatPath: true,
                    }}
                >
                    <div className="flex overflow-y-auto min-h-screen bg-gradient-to-br from-slate-50 via-slate-200 to-slate-100 relative before:content-[''] before:fixed before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[radial-gradient(circle_at_20%_20%,rgba(94,23,235,0.05)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(124,58,237,0.05)_0%,transparent_50%)] before:pointer-events-none before:z-0 animate-fade-in-up">
                        <Sidebar isLogged={isLogged} setIsLogged={setIsLogged}/>
                        <div className="fixed top-0 left-[130px] right-[415px] h-screen flex flex-col z-[1] p-0 animate-slide-in-left">
                            <Topbar />
                            <div className="min-h-[calc(100vh-120px)] rounded-3xl border border-white/20 absolute top-[120px] left-0 right-0 bottom-5 bg-gradient-to-br from-white/90 via-slate-50/80 to-white/90 backdrop-blur-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.1),0_8px_16px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.6)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-y-auto overflow-x-hidden scrollbar-purple hover:-translate-y-0.5 hover:shadow-[0_25px_50px_rgba(0,0,0,0.15),0_12px_24px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.8)] hover:border-white/30 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[radial-gradient(circle_at_30%_20%,rgba(94,23,235,0.03)_0%,transparent_50%),radial-gradient(circle_at_70%_80%,rgba(124,58,237,0.03)_0%,transparent_50%)] before:pointer-events-none" key={levelCount}>
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
                                        element={<DndGames />}
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
