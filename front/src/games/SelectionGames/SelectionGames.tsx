import GameCard from "../../components/GameCard/GameCard";
import { CategoriesLevel } from "../../components/CategoriesLevel/CategoriesLevel";
import "./selectionGames.scss";

export const SelectionGames = () => {
    return (
        <div className="selection_games">                      
            <div className="selection_header">
                <h1 className="selection_title">Juegos de Selección</h1>
            </div>
            <CategoriesLevel />
            <div className="selection_list">
                <GameCard
                    title="Organiza el mundo"
                    image="https://picsum.photos/200/200"
                  />
                <GameCard
                    title="Toque inteligente"
                    image="https://picsum.photos/300/200"
                />
            </div>
        </div>
    )
}