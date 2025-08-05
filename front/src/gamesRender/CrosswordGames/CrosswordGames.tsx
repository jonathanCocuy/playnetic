import GameCard from "../../components/GameCard/GameCard";
import { CategoriesLevel } from "../../components/CategoriesLevel/CategoriesLevel";
import "./crosswordGames.scss";
import { useParams } from "react-router-dom";
import { game_card } from "../../data/game_card";

export const CrosswordGames = () => {
    const { difficulty } = useParams<{ difficulty?: string }>();

    const filteredGames = !difficulty || difficulty === "all" 
        ? game_card.crossword 
        : game_card.crossword.filter(game => game.difficulty === difficulty);

    return (
        <div className="crossword_games">                      
            <div className="crossword_header">
                <h1 className="crossword_title">Juegos de Crucigramas</h1>
            </div>
            <CategoriesLevel game="crossword" />
            <div className="crossword_list">
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