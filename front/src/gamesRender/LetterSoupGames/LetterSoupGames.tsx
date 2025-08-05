import GameCard from "../../components/GameCard/GameCard";
import { CategoriesLevel } from "../../components/CategoriesLevel/CategoriesLevel";
import "./letterSoupGames.scss";
import { useParams } from "react-router-dom";
import { game_card } from "../../data/game_card";

export const LetterSoupGames = () => {
    const { difficulty } = useParams<{ difficulty?: string }>();

    const filteredGames = !difficulty || difficulty === "all" 
        ? game_card.lettersoup 
        : game_card.lettersoup.filter(game => game.difficulty === difficulty);

    return (
        <div className="letter_soup_games">                      
            <div className="letter_soup_header">
                <h1 className="letter_soup_title">Juegos de Sopa de Letras</h1>
            </div>
            <CategoriesLevel game="lettersoup" />
            <div className="letter_soup_list">
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