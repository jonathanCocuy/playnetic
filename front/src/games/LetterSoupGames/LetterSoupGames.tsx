import GameCard from "../../components/GameCard/GameCard";
import { CategoriesLevel } from "../../components/CategoriesLevel/CategoriesLevel";
import "./letterSoupGames.scss";

export const LetterSoupGames = () => {
    return (
        <div className="letter_soup_games">                      
            <div className="letter_soup_header">
                <h1 className="letter_soup_title">Juegos de Sopa de Letras</h1>
            </div>
            <CategoriesLevel />
            <div className="letter_soup_list">
                <GameCard
                    title="Encuentra las palabras"
                    image="https://picsum.photos/200/200"
                  />
                <GameCard
                    title="Sopa de letras inteligente"
                    image="https://picsum.photos/300/200"
                />
            </div>
        </div>
    )
} 