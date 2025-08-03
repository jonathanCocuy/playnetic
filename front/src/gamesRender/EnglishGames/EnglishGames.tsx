import GameCard from "../../components/GameCard/GameCard";
import { CategoriesLevel } from "../../components/CategoriesLevel/CategoriesLevel";
import "./englishGames.scss";

export const EnglishGames = () => {
    return (
        <div className="english_games">                      
            <div className="english_header">
                <h1 className="english_title">Juegos de Inglés</h1>
            </div>
            <CategoriesLevel />
            <div className="english_list">
                <GameCard
                    title="Aprende vocabulario"
                    image="https://picsum.photos/200/200"
                  />
                <GameCard
                    title="Practica gramática"
                    image="https://picsum.photos/300/200"
                />
            </div>
        </div>
    )
} 