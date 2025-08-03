import GameCard from "../../components/GameCard/GameCard";
import { CategoriesLevel } from "../../components/CategoriesLevel/CategoriesLevel";
import "./selectionGames.scss";
import { useParams } from "react-router-dom";

export const SelectionGames = () => {
    const { difficulty } = useParams<{ difficulty?: string }>();

    const games = [
        {
            title: "Organiza el mundo",
            image: "https://picsum.photos/200/200",
            difficulty: "easy" as const
        },
        {
            title: "Toque inteligente",
            image: "https://picsum.photos/300/200",
            difficulty: "medium" as const
        },
        {
            title: "Camila",
            image: "https://picsum.photos/300/200",
            difficulty: "easy" as const
        }
    ];

    const filteredGames = !difficulty || difficulty === "all" 
        ? games 
        : games.filter(game => game.difficulty === difficulty);

    return (
        <div className="selection_games">                      
            <div className="selection_header">
                <h1 className="selection_title">Juegos de Selección</h1>
            </div>
            <CategoriesLevel game="selection" />

            <div className="selection_list">
                {filteredGames.map((game, index) => (
                    <GameCard
                        key={index}
                        title={game.title}
                        image={game.image}
                        difficulty={game.difficulty}
                    />
                ))}
            </div>
        </div>
    )
}