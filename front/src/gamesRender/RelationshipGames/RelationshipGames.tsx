import GameCard from "../../components/GameCard/GameCard";
import { CategoriesLevel } from "../../components/CategoriesLevel/CategoriesLevel";
import "./relationshipGames.scss";

export const RelationshipGames = () => {
    return (
        <div className="relationship_games">                      
            <div className="relationship_header">
                <h1 className="relationship_title">Juegos de Relaciones</h1>
            </div>
            <CategoriesLevel />
            <div className="relationship_list">
                <GameCard
                    title="Conecta los conceptos"
                    image="https://picsum.photos/200/200"
                  />
                <GameCard
                    title="Relaciona las ideas"
                    image="https://picsum.photos/300/200"
                />
            </div>
        </div>
    )
} 