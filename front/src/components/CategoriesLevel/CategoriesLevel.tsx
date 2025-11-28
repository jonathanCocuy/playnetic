import { Link, useParams } from "react-router-dom";
import "./categoriesLevel.scss";

interface CategoriesLevelProps {
    // Types of differents available games
    game: "selection" | "dnd" | "lettersoup" | "crossword" | "writing" | "relationship";
}

export const CategoriesLevel = ({ game }: CategoriesLevelProps) => {
    // Get the difficulty of each game from the URL
    const { difficulty } = useParams<{ difficulty: string }>(); // Uses the parentesis because useParams is a FUNCTION
    
    // This function makes the button category stay active based on the selected difficulty
    const isActive = (buttonDifficulty: string) => {
        if (buttonDifficulty === "all") {
            // If there is not difficulty will be all. (!difficulty)
            return !difficulty || difficulty === "all";
        }
        // If the difficulty is the same as the button difficulty, the button will be active
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