import GameCard from "../../components/GameCard/GameCard";
import "./englishGames.scss";
import { useParams } from "react-router-dom";
import { gameCardData } from "../Data";

export const EnglishGames = () => {
    const { difficulty } = useParams<{ difficulty?: string }>();

    const filteredGames = !difficulty || difficulty === "all" 
        ? gameCardData.english 
        : gameCardData.english.filter(game => game.difficulty === difficulty);

    return (
        <div className="english-games">                      
            <div className="english__header">
                <h1 className="english__title">Juegos de Inglés</h1>
            </div>
            <div className="english__list">
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