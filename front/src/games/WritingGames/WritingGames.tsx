import GameCard from "../../components/GameCard/GameCard";
import { CategoriesLevel } from "../../components/CategoriesLevel/CategoriesLevel";
import "./writingGames.scss";

export const WritingGames = () => {
    return (
        <div className="writing_games">                      
            <div className="writing_header">
                <h1 className="writing_title">Juegos de Escritura</h1>
            </div>
            <CategoriesLevel />
            <div className="writing_list">
                <GameCard
                    title="Escribe la historia"
                    image="https://picsum.photos/200/200"
                  />
                <GameCard
                    title="Completa la frase"
                    image="https://picsum.photos/300/200"
                />
            </div>
        </div>
    )
} 