import GameCard from "../../components/GameCard/GameCard";
import { CategoriesLevel } from "../../components/CategoriesLevel/CategoriesLevel";
import "./letterSoupGames.scss";
import { useParams } from "react-router-dom";
import { gameCardData } from "../Data";

export const LetterSoupGames = () => {
    const { difficulty } = useParams<{ difficulty?: string }>();

    const filteredGames = !difficulty || difficulty === "all" 
        ? gameCardData.lettersoup 
        : gameCardData.lettersoup.filter(game => game.difficulty === difficulty);

    return (
        <div className="letter-soup-games">                           
            <div className="letter-soup__header">
                <h1 className="letter-soup__title">Juegos de Sopa de Letras</h1>
            </div>
            <CategoriesLevel game="lettersoup" />
            <div className="letter-soup__list">
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