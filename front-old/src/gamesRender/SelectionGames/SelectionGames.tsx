import { useState, useEffect } from "react";
import GameCard from "../../components/GameCard/GameCard";
import { CategoriesLevel } from "../../components/CategoriesLevel/CategoriesLevel";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { gameCardData } from "../Data";
import ExplorersOfTheAnimalKingdomComponent from "../../games/Selection/ExplorersOfTheAnimalKingdom/components/Game/MainGameComponent";
import ColorExplorersComponent from "../../games/Selection/ColorExplorers/components/Game/MainGameComponent";
import FootballQuizComponent from "../../games/Selection/FootballQuiz/components/Game/MainGameComponent";
import EnglishAdventureComponent from "../../games/Selection/EnglishAdventure/components/Game/MainGameComponent";
import DisneyQuizComponent from "../../games/Selection/DisneyQuiz/components/Game/MainGameComponent";

interface SelectionGamesProps {
    levelCount: number;
    setLevelCount: (level: number) => void;
}

export const SelectionGames = ({ levelCount, setLevelCount }: SelectionGamesProps) => {
    const { difficulty } = useParams<{ difficulty?: string }>();
    const location = useLocation();
    const navigate = useNavigate();
    const [selectedGame, setSelectedGame] = useState<string | null>(null);
    
    // Handle URL changes and game selection
    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        
        // Check if there's a game parameter in the URL
        const gameFromUrl = urlParams.get('game');
        if (gameFromUrl) {
            setSelectedGame(gameFromUrl);
        } else if (urlParams.get('reset') === 'true') {
            setSelectedGame(null);
        } else if (location.pathname.includes('/selection/') && !gameFromUrl) {
            setSelectedGame(null);
        }
    }, [location.pathname, location.search]);

    const filteredGames = !difficulty || difficulty === "all" 
        ? gameCardData.selection 
        : gameCardData.selection.filter(game => game.difficulty === difficulty);

    const handleGameSelect = (gameId: string) => {
        setSelectedGame(gameId);
        navigate(`/selection/${difficulty}?game=${gameId}`);
    };

    const renderGameCard = () => {
        return (
            <div className="p-4 flex flex-col items-center justify-center gap-4">                      
                <div className="flex flex-col items-center justify-center gap-4"> 
                    <h1 className="text-[2rem] text-[#4B0082] font-semibold">Juegos de Selección</h1>
                </div>
                <CategoriesLevel game="selection" />
                <div className="grid grid-cols-4 gap-4">
                    {filteredGames.map((game, index) => (
                        <GameCard
                            key={index}
                            title={game.title}
                            image={game.image}
                            difficulty={game.difficulty as "easy" | "medium" | "hard"}
                            gameId={game.gameId}
                            onGameSelect={handleGameSelect}
                        />
                    ))}
                </div>
            </div>
        )
    }

    return (
        <>
            {selectedGame === "explorers-animal-kingdom" ? (
                <ExplorersOfTheAnimalKingdomComponent levelCount={levelCount} setLevelCount={setLevelCount} />
            ) : selectedGame === "color-explorers" ? (
                <ColorExplorersComponent levelCount={levelCount} setLevelCount={setLevelCount} />
            ) : selectedGame === "football-quiz" ? (
                <FootballQuizComponent levelCount={levelCount} setLevelCount={setLevelCount} />
            ) : selectedGame === "english-adventure" ? (
                <EnglishAdventureComponent levelCount={levelCount} setLevelCount={setLevelCount} />
            ) : selectedGame === "disney-quiz" ? (
                <DisneyQuizComponent levelCount={levelCount} setLevelCount={setLevelCount} />
            ) : (
                renderGameCard()
            )}
        </>
    )
}