import GameCard from "../../components/GameCard/GameCard";
import { CategoriesLevel } from "../../components/CategoriesLevel/CategoriesLevel";
import "./crosswordGames.scss";

export const CrosswordGames = () => {
    return (
        <div className="crossword_games">                      
            <div className="crossword_header">
                <h1 className="crossword_title">Juegos de Crucigramas</h1>
            </div>
            <CategoriesLevel />
            <div className="crossword_list">
                <GameCard
                    title="Resuelve el crucigrama"
                    image="https://picsum.photos/200/200"
                  />
                <GameCard
                    title="Crucigrama interactivo"
                    image="https://picsum.photos/300/200"
                />
            </div>
        </div>
    )
} 