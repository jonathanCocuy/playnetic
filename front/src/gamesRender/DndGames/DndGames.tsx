import GameCard from "../../components/GameCard/GameCard";
import { CategoriesLevel } from "../../components/CategoriesLevel/CategoriesLevel";
import "./dndGames.scss";
import { useParams } from "react-router-dom";
import { gameCardData } from "../Data";

/* interface DndGamesProps {
    levelCount: number;
    setLevelCount: (level: number) => void;
} */

export const DndGames = (/* { levelCount, setLevelCount }: DndGamesProps */) => {
    const { difficulty } = useParams<{ difficulty?: string }>();

    const filteredGames = !difficulty || difficulty === "all" 
        ? gameCardData.dnd 
        : gameCardData.dnd.filter(game => game.difficulty === difficulty);

    return (
        <div className="dnd-games">                      
            <div className="dnd__header">
                <h1 className="dnd__title">Juegos de Arrastrar y Soltar</h1>
            </div>
            <CategoriesLevel game="dnd" />
            <div className="dnd__list">  
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