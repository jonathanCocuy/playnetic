import GameCard from "../../components/GameCard/GameCard";
import { CategoriesLevel } from "../../components/CategoriesLevel/CategoriesLevel";
import "./englishGames.scss";
import { useParams } from "react-router-dom";
import { game_card } from "../../data/game_card";

export const EnglishGames = () => {
    const { difficulty } = useParams<{ difficulty?: string }>();

    const filteredGames = !difficulty || difficulty === "all" 
        ? game_card.english 
        : game_card.english.filter(game => game.difficulty === difficulty);

    return (
        <div className="english_games">                      
            <div className="english_header">
                <h1 className="english_title">Juegos de Inglés</h1>
            </div>
            <CategoriesLevel game="english" />
            <div className="english_list">
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