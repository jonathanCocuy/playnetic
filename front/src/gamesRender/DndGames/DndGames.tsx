import GameCard from "../../components/GameCard/GameCard";
import { CategoriesLevel } from "../../components/CategoriesLevel/CategoriesLevel";
import "./dndGames.scss";

export const DndGames = () => {
    return (
        <div className="dnd_games">                      
            <div className="dnd_header">
                <h1 className="dnd_title">Juegos de Arrastrar y Soltar</h1>
            </div>
            <CategoriesLevel />
            <div className="dnd_list">
                <GameCard
                    title="Organiza el mundo"
                    image="https://picsum.photos/500/200"
                  />
                <GameCard
                    title="Toque inteligente"
                    image="https://picsum.photos/600/200"
                />
            </div>
        </div>
    )
}