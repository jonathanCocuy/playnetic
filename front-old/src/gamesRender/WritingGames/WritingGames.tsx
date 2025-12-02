import GameCard from "../../components/GameCard/GameCard";
import { CategoriesLevel } from "../../components/CategoriesLevel/CategoriesLevel";
import { useParams } from "react-router-dom";
import { gameCardData } from "../Data";

export const WritingGames = () => {
    const { difficulty } = useParams<{ difficulty?: string }>();

    const filteredGames = !difficulty || difficulty === "all" 
        ? gameCardData.writing 
        : gameCardData.writing.filter(game => game.difficulty === difficulty);

    return (
        <div className="flex flex-col items-center justify-center gap-4">                      
            <div className="flex flex-col items-center justify-center gap-4">
                <h1 className="text-[2rem] text-[#4B0082] font-semibold">Juegos de Escritura</h1>
            </div>
            <CategoriesLevel game="writing" />
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