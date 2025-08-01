import { Link } from "react-router-dom";
import "./categoriesLevel.scss";

export const CategoriesLevel = () => {

    return (
        <div className="categories_level">
            <h2 className="categories_title">Elige un nivel de dificultad:</h2>
            <div className="categories_list">
                <Link 
                    className="item" 
                    to="/selection/easy"
                >
                    <span className="button_top easy">Fácil</span>
                </Link>
                <Link 
                    className="item" 
                    to="/selection/medium"
                >
                    <span className="button_top medium">Medio</span>
                </Link>
                <Link 
                    className="item" 
                    to="/selection/hard"
                >
                    <span className="button_top hard">Difícil</span>
                </Link>
            </div>
        </div>
    );
};