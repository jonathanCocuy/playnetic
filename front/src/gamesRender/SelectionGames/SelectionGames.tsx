import { useState, useEffect } from "react";
import GameCard from "../../components/GameCard/GameCard";
import { CategoriesLevel } from "../../components/CategoriesLevel/CategoriesLevel";
import "./selectionGames.scss";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { gameCardData } from "../Data";
import CreatingAnAnecdoteJCComponent from "../../games/Selection/ExplorersOfTheAnimalKingdom/components/Game/MainGameComponent";

interface SelectionGamesProps {
    exerciseCount: number;
    levelCount: number;
    setExerciseCount: (count: number) => void;
    setLevelCount: (count: number) => void;
}

export const SelectionGames = ({ exerciseCount, levelCount, setExerciseCount, setLevelCount }: SelectionGamesProps) => {
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
        } else if (location.pathname.includes('/selection/')) {
            setSelectedGame(null);
        }
    }, [location.pathname, location.search]);

    // Also reset when the component mounts
    useEffect(() => {
        setSelectedGame(null);
    }, []);

    const filteredGames = !difficulty || difficulty === "all" 
        ? gameCardData.selection 
        : gameCardData.selection.filter(game => game.difficulty === difficulty);

    const handleGameSelect = (gameId: string) => {
        setSelectedGame(gameId);
        // Update URL with game parameter
        navigate(`/selection/all?game=${gameId}`);
    };

    return (
        <>
            {selectedGame === "explorers-animal-kingdom" ? (
                <CreatingAnAnecdoteJCComponent exerciseCount={exerciseCount} levelCount={levelCount} setExerciseCount={setExerciseCount} setLevelCount={setLevelCount} />
            ) : (
                <div className="selection_games">                      
                    <div className="selection_header">
                        <h1 className="selection_title">Juegos de Selección</h1>
                    </div>
                    <CategoriesLevel game="selection" />
                    <div className="selection_list">
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
            )}
        </>
    )
}