import GameCard from "../../components/GameCard/GameCard";
import { CategoriesLevel } from "../../components/CategoriesLevel/CategoriesLevel";
import { useParams } from "react-router-dom";
import { gameCardData } from "../Data";

export const LetterSoupGames = () => {
    const { difficulty } = useParams<{ difficulty?: string }>();

    const filteredGames = !difficulty || difficulty === "all" 
        ? gameCardData.lettersoup 
        : gameCardData.lettersoup.filter(game => game.difficulty === difficulty);

    return (
        <div className="flex flex-col items-center justify-center gap-4">                           
            <div className="flex flex-col items-center justify-center gap-4">
                <h1 className="text-[2rem] text-[#4B0082] font-semibold">Juegos de Sopa de Letras</h1>
            </div>
            <CategoriesLevel game="lettersoup" />
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