import GameCard from "../../components/GameCard/GameCard";
import { CategoriesLevel } from "../../components/CategoriesLevel/CategoriesLevel";
import "./selectionGames.scss";
import { useParams } from "react-router-dom";
import { game_card } from "../../data/game_card";

export const SelectionGames = () => {
    const { difficulty } = useParams<{ difficulty?: string }>();

    const filteredGames = !difficulty || difficulty === "all" 
        ? game_card.selection 
        : game_card.selection.filter(game => game.difficulty === difficulty);

    return (
        <div className="selection_games">                      
            <div className="selection_header">
                <h1 className="selection_title">Juegos de Selección</h1>
            </div>
            <CategoriesLevel game="selection" />
            <div className="selection_list">
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