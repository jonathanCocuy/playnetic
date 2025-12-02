import { Link, useLocation } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";
// Redux
import { RootState } from "../app/store";
import { useSelector } from "react-redux";
// Components
import CountUp from "../components/CounterFramer/CountUp";


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

    function exercisePerLevel () {
       if (levelCount <= 5) {
        return 1;
       } else if (levelCount <= 10) {
        return 2;
       } else if (levelCount <= 15) {
        return 3;
       }
    }

    return (
        <div className="w-[20%] h-screen bg-gradient-to-b from-[#e6daf8] via-[#f0e6ff] to-[#e6daf8] fixed top-0 right-0 flex items-center flex-col justify-start gap-[30px] shadow-[-10px_0_30px_rgba(94,23,235,0.2),inset_0_0_0_1px_rgba(255,255,255,0.1)] backdrop-blur-[10px] overflow-hidden z-[1000] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[radial-gradient(circle_at_80%_20%,rgba(94,23,235,0.1)_0%,transparent_50%),radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.1)_0%,transparent_50%)] before:pointer-events-none">
            <div className="w-[90%] h-[300px] py-[10px] mt-[30px] rounded-[20px] bg-gradient-to-br from-[#5e17eb] via-primary-purple to-[#6d28d9] shadow-[0_15px_35px_rgba(94,23,235,0.4),inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-[15px] border border-white/10 relative z-[2] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05)_0%,transparent_50%)] before:rounded-[20px] before:pointer-events-none">
                <h2 className="text-[30px] pl-4 text-white font-bold [text-shadow:0_2px_4px_rgba(0,0,0,0.3)] relative z-[3]">Categorías</h2>
                <div className="m-2 h-[230px] p-4 overflow-y-auto rounded-xl [scrollbar-width:none] [-ms-overflow-style:none] flex flex-col gap-3 relative z-[3] [&::-webkit-scrollbar]:hidden hover:transition-[background] hover:duration-300">
                    <Link 
                        className={`border-none text-white py-3 px-4 text-lg rounded-xl no-underline font-semibold relative backdrop-blur-[10px] border border-white/10 shadow-[0_4px_15px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] bg-gradient-to-br from-[#ff6b9d] to-[#ff8e9b] hover:translate-x-2 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] hover:border-white/20 hover:from-[#e55a8a] hover:to-[#ff7a8a] ${location.pathname.startsWith('/selection') ? 'translate-x-3 -translate-y-[3px] shadow-[0_12px_30px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.3)] border-2 border-white/40 before:content-[""] before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2 before:w-0 before:h-0 before:border-t-[10px] before:border-b-[10px] before:border-r-[10px] before:border-t-transparent before:border-b-transparent before:border-r-white/80 before:[filter:drop-shadow(2px_2px_4px_rgba(0,0,0,0.3))] after:content-[""] after:absolute after:-left-2 after:top-1/2 after:-translate-y-1/2 after:w-0 after:h-0 after:border-t-[8px] after:border-b-[8px] after:border-r-[8px] after:border-t-transparent after:border-b-transparent after:border-r-white' : ''}`} 
                        to={"/selection/all"}
                    >
                        Selección
                    </Link>
                    <Link 
                        className={`border-none text-white py-3 px-4 text-lg rounded-xl no-underline font-semibold relative backdrop-blur-[10px] border border-white/10 shadow-[0_4px_15px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] bg-gradient-to-br from-[#6b8e23] to-[#7ba832] hover:translate-x-2 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] hover:border-white/20 hover:from-[#5a7a1e] hover:to-[#6b8e23] ${location.pathname.startsWith('/relationship') ? 'translate-x-3 -translate-y-[3px] shadow-[0_12px_30px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.3)] border-2 border-white/40 before:content-[""] before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2 before:w-0 before:h-0 before:border-t-[10px] before:border-b-[10px] before:border-r-[10px] before:border-t-transparent before:border-b-transparent before:border-r-white/80 before:[filter:drop-shadow(2px_2px_4px_rgba(0,0,0,0.3))] after:content-[""] after:absolute after:-left-2 after:top-1/2 after:-translate-y-1/2 after:w-0 after:h-0 after:border-t-[8px] after:border-b-[8px] after:border-r-[8px] after:border-t-transparent after:border-b-transparent after:border-r-white' : ''}`} 
                        to={"/relationship/all"}
                    >
                        Relacionar
                    </Link>
                    <Link 
                        className={`border-none text-white py-3 px-4 text-lg rounded-xl no-underline font-semibold relative backdrop-blur-[10px] border border-white/10 shadow-[0_4px_15px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] bg-gradient-to-br from-[#ff9a8b] to-[#ffb3a6] hover:translate-x-2 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] hover:border-white/20 hover:from-[#e68a7a] hover:to-[#ffa395] ${location.pathname.startsWith('/lettersoup') ? 'translate-x-3 -translate-y-[3px] shadow-[0_12px_30px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.3)] border-2 border-white/40 before:content-[""] before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2 before:w-0 before:h-0 before:border-t-[10px] before:border-b-[10px] before:border-r-[10px] before:border-t-transparent before:border-b-transparent before:border-r-white/80 before:[filter:drop-shadow(2px_2px_4px_rgba(0,0,0,0.3))] after:content-[""] after:absolute after:-left-2 after:top-1/2 after:-translate-y-1/2 after:w-0 after:h-0 after:border-t-[8px] after:border-b-[8px] after:border-r-[8px] after:border-t-transparent after:border-b-transparent after:border-r-white' : ''}`} 
                        to={"/lettersoup/all"}
                    >
                        Sopa de letras
                    </Link>
                    <Link 
                        className={`border-none text-white py-3 px-4 text-lg rounded-xl no-underline font-semibold relative backdrop-blur-[10px] border border-white/10 shadow-[0_4px_15px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] bg-gradient-to-br from-[#f39c12] to-[#f4a942] hover:translate-x-2 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] hover:border-white/20 hover:from-[#d68910] hover:to-[#f39c12] ${location.pathname.startsWith('/dnd') ? 'translate-x-3 -translate-y-[3px] shadow-[0_12px_30px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.3)] border-2 border-white/40 before:content-[""] before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2 before:w-0 before:h-0 before:border-t-[10px] before:border-b-[10px] before:border-r-[10px] before:border-t-transparent before:border-b-transparent before:border-r-white/80 before:[filter:drop-shadow(2px_2px_4px_rgba(0,0,0,0.3))] after:content-[""] after:absolute after:-left-2 after:top-1/2 after:-translate-y-1/2 after:w-0 after:h-0 after:border-t-[8px] after:border-b-[8px] after:border-r-[8px] after:border-t-transparent after:border-b-transparent after:border-r-white' : ''}`} 
                        to={"/dnd/all"}
                    >
                        Arrastre
                    </Link>
                    <Link 
                        className={`border-none text-white py-3 px-4 text-lg rounded-xl no-underline font-semibold relative backdrop-blur-[10px] border border-white/10 shadow-[0_4px_15px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] bg-gradient-to-br from-[#e74c3c] to-[#f56565] hover:translate-x-2 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] hover:border-white/20 hover:from-[#c0392b] hover:to-[#e74c3c] ${location.pathname.startsWith('/crossword') ? 'translate-x-3 -translate-y-[3px] shadow-[0_12px_30px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.3)] border-2 border-white/40 before:content-[""] before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2 before:w-0 before:h-0 before:border-t-[10px] before:border-b-[10px] before:border-r-[10px] before:border-t-transparent before:border-b-transparent before:border-r-white/80 before:[filter:drop-shadow(2px_2px_4px_rgba(0,0,0,0.3))] after:content-[""] after:absolute after:-left-2 after:top-1/2 after:-translate-y-1/2 after:w-0 after:h-0 after:border-t-[8px] after:border-b-[8px] after:border-r-[8px] after:border-t-transparent after:border-b-transparent after:border-r-white' : ''}`} 
                        to={"/crossword/all"}
                    >
                        Crucigrama
                    </Link>
                    <Link 
                        className={`border-none text-white py-3 px-4 text-lg rounded-xl no-underline font-semibold relative backdrop-blur-[10px] border border-white/10 shadow-[0_4px_15px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] bg-gradient-to-br from-[#b8a9dc] to-[#c7b8e6] hover:translate-x-2 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] hover:border-white/20 hover:from-[#a395c7] hover:to-[#b8a9dc] ${location.pathname.startsWith('/writing') ? 'translate-x-3 -translate-y-[3px] shadow-[0_12px_30px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.3)] border-2 border-white/40 before:content-[""] before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2 before:w-0 before:h-0 before:border-t-[10px] before:border-b-[10px] before:border-r-[10px] before:border-t-transparent before:border-b-transparent before:border-r-white/80 before:[filter:drop-shadow(2px_2px_4px_rgba(0,0,0,0.3))] after:content-[""] after:absolute after:-left-2 after:top-1/2 after:-translate-y-1/2 after:w-0 after:h-0 after:border-t-[8px] after:border-b-[8px] after:border-r-[8px] after:border-t-transparent after:border-b-transparent after:border-r-white' : ''}`} 
                        to={"/writing/all"}
                    >
                        Escritura
                    </Link>
                </div>
            </div>
            {isGamePage ? (
                <div className="w-[90%] py-[10px] mt-[30px] rounded-[20px] bg-gradient-to-br from-[#5e17eb] via-primary-purple to-[#6d28d9] shadow-[0_15px_35px_rgba(94,23,235,0.4),inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-[15px] border border-white/10 relative z-[2] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05)_0%,transparent_50%)] before:rounded-[20px] before:pointer-events-none">
                    <div>
                        <h2 className="text-[30px] pl-4 text-white font-bold [text-shadow:0_2px_4px_rgba(0,0,0,0.3)] relative z-[3]">Puntos</h2>
                        <div className="animate-fade-in p-4 flex flex-col gap-3 relative z-[3]">
                            <p className="text-xl font-semibold text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.3)]">Nivel actual: {exercisePerLevel()}</p>
                            <ProgressBar
                                className="m-1 rounded-xl relative overflow-hidden shadow-[0_6px_20px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] bg-gradient-to-br from-slate-700 to-slate-600 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] border border-white/10 hover:-translate-y-[3px] hover:shadow-[0_10px_30px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.2)] hover:border-white/20"
                                bgColor="#FFB347"
                                height="30px"
                                completed={levelCount}
                                maxCompleted={15}
                                customLabel={levelCount.toString()}
                                borderRadius="8px"
                            />
                        </div>
                        <div className="animate-fade-in p-4 flex flex-col gap-3 relative z-[3]">
                            <p className="text-xl font-semibold text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.3)]">Tus puntos</p>
                            <div className="flex text-[45px] items-center gap-2">
                                <CountUp
                                    from={0}
                                    to={points}
                                    duration={1}
                                    separator=","
                                    direction="up"
                                    className={color}
                                />
                                <p className="text-white/80 text-2xl font-medium"> /1500</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="w-[90%] py-[10px] mt-[30px] rounded-[20px] bg-gradient-to-br from-[#5e17eb] via-primary-purple to-[#6d28d9] shadow-[0_15px_35px_rgba(94,23,235,0.4),inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-[15px] border border-white/10 relative z-[2] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05)_0%,transparent_50%)] before:rounded-[20px] before:pointer-events-none">
                    <div className="animate-fade-in p-4 flex flex-col gap-3 relative z-[3]">
                        <p className="text-xl font-semibold text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.3)]">Puntos totales</p>
                        <span className="text-sm px-4 text-white/80 leading-[1.5] font-normal">
                            Aquí podrás ver la suma de tus puntos totales de
                            todos los juegos.
                        </span>
                        <div className="flex text-[45px] items-center gap-2">
                            <CountUp
                                from={0}
                                to={totalPoints}
                                duration={1}
                                separator=","
                                direction="up"
                                className={color}
                            />
                            <p className="text-white/80 text-2xl font-medium"> /90000</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
