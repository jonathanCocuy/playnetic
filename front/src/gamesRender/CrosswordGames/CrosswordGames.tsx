import GameCard from "../../components/GameCard/GameCard";
import { CategoriesLevel } from "../../components/CategoriesLevel/CategoriesLevel";
import "./crosswordGames.scss";
import { useParams } from "react-router-dom";
import { gameCardData } from "../Data";

export const CrosswordGames = () => {
    const { difficulty } = useParams<{ difficulty?: string }>();

    const filteredGames = !difficulty || difficulty === "all" 
        ? gameCardData.crossword 
        : gameCardData.crossword.filter(game => game.difficulty === difficulty);

    return (
        <div className="crossword-games">                      
            <div className="crossword__header">
                <h1 className="crossword__title">Juegos de Crucigramas</h1>
            </div>
            <CategoriesLevel game="crossword" />
            <div className="crossword__list">
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