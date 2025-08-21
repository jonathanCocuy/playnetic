import { Link, useLocation } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";
// Redux
import { RootState } from "../app/store";
import { useSelector } from "react-redux";
// Components
import CountUp from "../components/CounterFramer/CountUp";

import "./rightaside.scss";

interface RightAsideProps {
    levelCount: number;
}

export const RightAside = ({ levelCount }: RightAsideProps) => {
    const location = useLocation();
    const isGamePage = location.search.includes("game");
    // Redux
    const color = useSelector((state: RootState) => state.game.color);
    const points = useSelector((state: RootState) => state.game.pointsGame);
    const totalPoints = useSelector((state: RootState) => state.game.totalPoints);

    return (
        <div className="right_aside">
            <div className="categories">
                <h2 className="title">Categorías</h2>
                <div className="category_list">
                    <Link 
                        className={`item selection ${location.pathname.startsWith('/selection') ? 'active' : ''}`} 
                        to={"/selection/all"}
                    >
                        Selección
                    </Link>
                    <Link 
                        className={`item relationship ${location.pathname.startsWith('/relationship') ? 'active' : ''}`} 
                        to={"/relationship/all"}
                    >
                        Relacionar
                    </Link>
                    <Link 
                        className={`item lettersoup ${location.pathname.startsWith('/lettersoup') ? 'active' : ''}`} 
                        to={"/lettersoup/all"}
                    >
                        Sopa de letras
                    </Link>
                    <Link 
                        className={`item dnd ${location.pathname.startsWith('/dnd') ? 'active' : ''}`} 
                        to={"/dnd/all"}
                    >
                        Arrastre
                    </Link>
                    <Link 
                        className={`item crossword ${location.pathname.startsWith('/crossword') ? 'active' : ''}`} 
                        to={"/crossword/all"}
                    >
                        Crucigrama
                    </Link>
                    <Link 
                        className={`item writing ${location.pathname.startsWith('/writing') ? 'active' : ''}`} 
                        to={"/writing/all"}
                    >
                        Escritura
                    </Link>
                </div>
            </div>
            {isGamePage ? (
                <div className="points">
                    <div className="container_title">
                        <h2 className="title">Puntos</h2>
                        <div className="progress">
                            <p className="progress_text">Nivel actual</p>
                            <ProgressBar
                                className="progress_bar level-progress"
                                bgColor="#FFB347"
                                height="30px"
                                completed={levelCount}
                                maxCompleted={15}
                                customLabel={levelCount.toString()}
                                borderRadius="8px"
                            />
                        </div>
                        <div className="progress">
                            <p className="progress_text">Tus puntos</p>
                            <div className="container_points">
                                <CountUp
                                    from={0}
                                    to={points}
                                    duration={1}
                                    separator=","
                                    direction="up"
                                    className={color}
                                />
                                {/* Maximum points per game */}
                                <p className="points_text"> /1500</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="points">
                    <div className="progress">
                        <p className="progress_text">Puntos totales</p>
                        <span className="progress_text_alt">
                            Aquí podrás ver la suma de tus puntos totales de
                            todos los juegos.
                        </span>
                        <div className="container_points">
                            <CountUp
                                from={0}
                                to={totalPoints}
                                duration={1}
                                separator=","
                                direction="up"
                                className={color}
                            />
                            {/* Maximum points in everything games */}
                            <p className="points_text"> /90000</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
