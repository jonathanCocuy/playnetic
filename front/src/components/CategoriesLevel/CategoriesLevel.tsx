import { Link } from "react-router-dom";
import "./categoriesLevel.scss";

interface CategoriesLevelProps {
    game: "selection" | "dnd" | "english" | "lettersoup" | "crossword" | "writing" | "relationship";
}

export const CategoriesLevel = ({ game }: CategoriesLevelProps) => {

    return (
        <div className="categories_level">
            <div className="categories_list">
                <Link 
                    className="item" 
                    to={`/${game}/all`}
                >
                    <span className="button_top all">Todos</span>
                </Link>
                <Link 
                    className="item" 
                    to={`/${game}/easy`}
                >
                    <span className="button_top easy">Fácil</span>
                </Link>
                <Link 
                    className="item" 
                    to={`/${game}/medium`}
                >
                    <span className="button_top medium">Medio</span>
                </Link>
                <Link 
                    className="item" 
                    to={`/${game}/hard`}
                >
                    <span className="button_top hard">Difícil</span>
                </Link>
            </div>
        </div>
    );
};