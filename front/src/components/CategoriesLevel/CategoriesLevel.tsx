import { Link, useParams } from "react-router-dom";
import "./categoriesLevel.scss";

interface CategoriesLevelProps {
    game: "selection" | "dnd" | "english" | "lettersoup" | "crossword" | "writing" | "relationship";
}

export const CategoriesLevel = ({ game }: CategoriesLevelProps) => {
    const { difficulty } = useParams<{ difficulty: string }>();
    
    const isActive = (buttonDifficulty: string) => {
        if (buttonDifficulty === "all") {
            return !difficulty || difficulty === "all";
        }
        return difficulty === buttonDifficulty;
    };

    return (
        <div className="categories-level">
            <div className="categories-list">
                <Link 
                    className={isActive("all") ? "active item" : "item"}
                    to={`/${game}/all`}
                >
                    <span className="button-top all">Todos</span>
                </Link>
                <Link 
                    className={isActive("easy") ? "active item" : "item"}
                    to={`/${game}/easy`}
                >
                    <span className="button-top easy">Fácil</span>
                </Link>
                <Link 
                    className={isActive("medium") ? "active item" : "item"}
                    to={`/${game}/medium`}
                >
                    <span className="button-top medium">Medio</span>
                </Link>
                <Link 
                    className={isActive("hard") ? "active item" : "item"}
                    to={`/${game}/hard`}
                >
                    <span className="button-top hard">Difícil</span>
                </Link>
            </div>
        </div>
    );
};