import GameCard from "../../components/GameCard/GameCard";
import { CategoriesLevel } from "../../components/CategoriesLevel/CategoriesLevel";
import "./relationshipGames.scss";
import { useParams } from "react-router-dom";
import { game_card } from "../../data/game_card";

export const RelationshipGames = () => {
    const { difficulty } = useParams<{ difficulty?: string }>();

    const filteredGames = !difficulty || difficulty === "all" 
        ? game_card.relationship 
        : game_card.relationship.filter(game => game.difficulty === difficulty);

    return (
        <div className="relationship_games">                      
            <div className="relationship_header">
                <h1 className="relationship_title">Juegos de Relaciones</h1>
            </div>
            <CategoriesLevel game="relationship" />
            <div className="relationship_list">
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