import GameCard from "../../components/GameCard/GameCard";
import { CategoriesLevel } from "../../components/CategoriesLevel/CategoriesLevel";
import "./dndGames.scss";
import { useParams } from "react-router-dom";
import { gameCardData } from "../Data";

export const DndGames = () => {
    const { difficulty } = useParams<{ difficulty?: string }>();

    const filteredGames = !difficulty || difficulty === "all" 
        ? gameCardData.dnd 
        : gameCardData.dnd.filter(game => game.difficulty === difficulty);

    return (
        <div className="dnd_games">                      
            <div className="dnd_header">
                <h1 className="dnd_title">Juegos de Arrastrar y Soltar</h1>
            </div>
            <CategoriesLevel game="dnd" />
            <div className="dnd_list">
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