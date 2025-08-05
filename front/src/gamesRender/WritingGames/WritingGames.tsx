import GameCard from "../../components/GameCard/GameCard";
import { CategoriesLevel } from "../../components/CategoriesLevel/CategoriesLevel";
import "./writingGames.scss";
import { useParams } from "react-router-dom";
import { game_card } from "../../data/game_card";

export const WritingGames = () => {
    const { difficulty } = useParams<{ difficulty?: string }>();

    const filteredGames = !difficulty || difficulty === "all" 
        ? game_card.writing 
        : game_card.writing.filter(game => game.difficulty === difficulty);

    return (
        <div className="writing_games">                      
            <div className="writing_header">
                <h1 className="writing_title">Juegos de Escritura</h1>
            </div>
            <CategoriesLevel game="writing" />
            <div className="writing_list">
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