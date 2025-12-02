import GameCard from "../../components/GameCard/GameCard";
import { useParams } from "react-router-dom";
import { gameCardData } from "../Data";

export const EnglishGames = () => {
    const { difficulty } = useParams<{ difficulty?: string }>();

    const filteredGames = !difficulty || difficulty === "all" 
        ? gameCardData.english 
        : gameCardData.english.filter(game => game.difficulty === difficulty);

    return (
        <div className="flex flex-col items-center justify-center gap-4">                      
            <div className="flex flex-col items-center justify-center gap-4">
                <h1 className="text-[2rem] text-[#4B0082] font-semibold">Juegos de Inglés</h1>
            </div>
            <div className="flex items-center justify-center gap-4">
                {filteredGames.map((game, index) => (
                    <GameCard
                        key={index}
                        title={game.title}
                        image={game.image}
                        difficulty={game.difficulty as "easy" | "medium" | "hard"}
                    />
                ))}
            </div>
        </div>
    )
} 