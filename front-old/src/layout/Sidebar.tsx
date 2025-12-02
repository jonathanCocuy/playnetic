import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGamepad,
    faHouse,
    faBell,
    faStar,
    faRightFromBracket,
    faUsers,
} from "@fortawesome/free-solid-svg-icons";

interface LoginScreenProps {
    isLogged: boolean;
    setIsLogged: (value: boolean) => void;
}

export const Sidebar = ({ isLogged, setIsLogged }: LoginScreenProps) => {
    return (
        <aside className="w-[100px] h-screen bg-gradient-to-b from-[#8338ec] via-primary-purple to-[#6d28d9] fixed top-0 left-0 z-[1000] flex flex-col items-center justify-start gap-[5%] shadow-[4px_0_30px_rgba(131,56,236,0.4),inset_0_1px_0_rgba(255,255,255,0.15),inset_-1px_0_0_rgba(0,0,0,0.1)] border-r border-white/20 backdrop-blur-[25px] overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12)_0%,transparent_60%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.08)_0%,transparent_60%),radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_0%,transparent_60%)] before:pointer-events-none before:animate-background-shift after:content-[''] after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:bg-gradient-to-b after:from-white/10 after:via-transparent after:via-transparent after:to-black/10 after:pointer-events-none">
            <div className="pt-10 flex items-center justify-center relative z-[2]">
                <NavLink to="/home" className="relative flex items-center justify-center group">
                    <img className="w-[60px] h-[60px] rounded-[18px] bg-white/12 backdrop-blur-[15px] border border-white/25 shadow-[0_10px_25px_rgba(131,56,236,0.4),inset_0_1px_0_rgba(255,255,255,0.2),inset_0_-1px_0_rgba(0,0,0,0.1)] transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] relative z-[2] p-2 hover:scale-[1.08] hover:-translate-y-0.5 hover:bg-white/18 hover:shadow-[0_15px_35px_rgba(131,56,236,0.5),inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-1px_0_rgba(0,0,0,0.1)] hover:border-white/35" src={logo} alt="Playnetic" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_70%)] rounded-full opacity-0 transition-all duration-300 z-[1] group-hover:opacity-100 group-hover:scale-120"></div>
                </NavLink>
            </div>

            <nav className="flex-1 flex flex-col items-center justify-between w-full py-5 relative z-[2]">
                <div className="flex flex-col items-center gap-[15px]">
                    <ul className="list-none m-0 p-0 flex flex-col items-center gap-[15px]">
                        <li className="flex items-center justify-center">
                            <NavLink to="/home" className="nav-link flex items-center justify-center w-[60px] h-[60px] text-white/85 no-underline rounded-[18px] bg-white/8 backdrop-blur-[15px] border border-white/15 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] relative text-xl shadow-[0_6px_15px_rgba(131,56,236,0.15),inset_0_1px_0_rgba(255,255,255,0.15),inset_0_-1px_0_rgba(0,0,0,0.1)] hover:bg-white/18 hover:text-white hover:scale-[1.12] hover:-translate-y-[3px] hover:shadow-[0_12px_25px_rgba(131,56,236,0.4),inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(0,0,0,0.1)] hover:border-white/35 [&.active]:bg-gradient-to-br [&.active]:from-white/25 [&.active]:to-white/15 [&.active]:text-white [&.active]:shadow-[0_12px_25px_rgba(131,56,236,0.5),inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-1px_0_rgba(0,0,0,0.1)] [&.active]:border-white/40 [&.active]:before:content-[''] [&.active]:before:absolute [&.active]:before:-left-3 [&.active]:before:top-1/2 [&.active]:before:-translate-y-1/2 [&.active]:before:w-[5px] [&.active]:before:h-[35px] [&.active]:before:bg-gradient-to-b [&.active]:before:from-white [&.active]:before:to-white/80 [&.active]:before:rounded-none [&.active]:before:rounded-r-md [&.active]:before:shadow-[0_0_15px_rgba(255,255,255,0.6)]" title="Inicio">
                                <div className="flex items-center justify-center transition-all duration-300">
                                    <FontAwesomeIcon icon={faHouse} />
                                </div>
                            </NavLink>
                        </li>
                        <li className="flex items-center justify-center">
                            <NavLink to="/games" className="nav-link flex items-center justify-center w-[60px] h-[60px] text-white/85 no-underline rounded-[18px] bg-white/8 backdrop-blur-[15px] border border-white/15 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] relative text-xl shadow-[0_6px_15px_rgba(131,56,236,0.15),inset_0_1px_0_rgba(255,255,255,0.15),inset_0_-1px_0_rgba(0,0,0,0.1)] hover:bg-white/18 hover:text-white hover:scale-[1.12] hover:-translate-y-[3px] hover:shadow-[0_12px_25px_rgba(131,56,236,0.4),inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(0,0,0,0.1)] hover:border-white/35 [&.active]:bg-gradient-to-br [&.active]:from-white/25 [&.active]:to-white/15 [&.active]:text-white [&.active]:shadow-[0_12px_25px_rgba(131,56,236,0.5),inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-1px_0_rgba(0,0,0,0.1)] [&.active]:border-white/40 [&.active]:before:content-[''] [&.active]:before:absolute [&.active]:before:-left-3 [&.active]:before:top-1/2 [&.active]:before:-translate-y-1/2 [&.active]:before:w-[5px] [&.active]:before:h-[35px] [&.active]:before:bg-gradient-to-b [&.active]:before:from-white [&.active]:before:to-white/80 [&.active]:before:rounded-none [&.active]:before:rounded-r-md [&.active]:before:shadow-[0_0_15px_rgba(255,255,255,0.6)]" title="Juegos">
                                <div className="flex items-center justify-center transition-all duration-300">
                                    <FontAwesomeIcon icon={faGamepad} />
                                </div>
                            </NavLink>
                        </li>
                        <li className="flex items-center justify-center">
                            <NavLink to="/notifications" className="nav-link flex items-center justify-center w-[60px] h-[60px] text-white/85 no-underline rounded-[18px] bg-white/8 backdrop-blur-[15px] border border-white/15 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] relative text-xl shadow-[0_6px_15px_rgba(131,56,236,0.15),inset_0_1px_0_rgba(255,255,255,0.15),inset_0_-1px_0_rgba(0,0,0,0.1)] hover:bg-white/18 hover:text-white hover:scale-[1.12] hover:-translate-y-[3px] hover:shadow-[0_12px_25px_rgba(131,56,236,0.4),inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(0,0,0,0.1)] hover:border-white/35 [&.active]:bg-gradient-to-br [&.active]:from-white/25 [&.active]:to-white/15 [&.active]:text-white [&.active]:shadow-[0_12px_25px_rgba(131,56,236,0.5),inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-1px_0_rgba(0,0,0,0.1)] [&.active]:border-white/40 [&.active]:before:content-[''] [&.active]:before:absolute [&.active]:before:-left-3 [&.active]:before:top-1/2 [&.active]:before:-translate-y-1/2 [&.active]:before:w-[5px] [&.active]:before:h-[35px] [&.active]:before:bg-gradient-to-b [&.active]:before:from-white [&.active]:before:to-white/80 [&.active]:before:rounded-none [&.active]:before:rounded-r-md [&.active]:before:shadow-[0_0_15px_rgba(255,255,255,0.6)]" title="Notificaciones">
                                <div className="flex items-center justify-center transition-all duration-300">
                                    <FontAwesomeIcon icon={faBell} />
                                </div>
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="w-1/2 h-0.5 bg-gradient-to-r from-transparent via-white/10 via-white/30 to-transparent border-none my-[25px] relative rounded-sm">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[radial-gradient(circle,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0.2)_100%)] rounded-full shadow-[0_0_8px_rgba(255,255,255,0.4)]"></div>
                </div>

                <div className="flex flex-col items-center gap-[15px]">
                    <ul className="list-none m-0 p-0 flex flex-col items-center gap-[15px]">
                        <li className="flex items-center justify-center">
                            <NavLink to="/profile" className="nav-link flex items-center justify-center w-[60px] h-[60px] text-white/85 no-underline rounded-[18px] bg-white/8 backdrop-blur-[15px] border border-white/15 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] relative text-xl shadow-[0_6px_15px_rgba(131,56,236,0.15),inset_0_1px_0_rgba(255,255,255,0.15),inset_0_-1px_0_rgba(0,0,0,0.1)] hover:bg-white/18 hover:text-white hover:scale-[1.12] hover:-translate-y-[3px] hover:shadow-[0_12px_25px_rgba(131,56,236,0.4),inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(0,0,0,0.1)] hover:border-white/35 [&.active]:bg-gradient-to-br [&.active]:from-white/25 [&.active]:to-white/15 [&.active]:text-white [&.active]:shadow-[0_12px_25px_rgba(131,56,236,0.5),inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-1px_0_rgba(0,0,0,0.1)] [&.active]:border-white/40 [&.active]:before:content-[''] [&.active]:before:absolute [&.active]:before:-left-3 [&.active]:before:top-1/2 [&.active]:before:-translate-y-1/2 [&.active]:before:w-[5px] [&.active]:before:h-[35px] [&.active]:before:bg-gradient-to-b [&.active]:before:from-white [&.active]:before:to-white/80 [&.active]:before:rounded-none [&.active]:before:rounded-r-md [&.active]:before:shadow-[0_0_15px_rgba(255,255,255,0.6)]" title="Perfil">
                                <div className="flex items-center justify-center transition-all duration-300">
                                    <FontAwesomeIcon icon={faUsers} />
                                </div>
                            </NavLink>
                        </li>
                        <li className="flex items-center justify-center">
                            <NavLink to="/points" className="nav-link flex items-center justify-center w-[60px] h-[60px] text-white/85 no-underline rounded-[18px] bg-white/8 backdrop-blur-[15px] border border-white/15 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] relative text-xl shadow-[0_6px_15px_rgba(131,56,236,0.15),inset_0_1px_0_rgba(255,255,255,0.15),inset_0_-1px_0_rgba(0,0,0,0.1)] hover:bg-white/18 hover:text-white hover:scale-[1.12] hover:-translate-y-[3px] hover:shadow-[0_12px_25px_rgba(131,56,236,0.4),inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(0,0,0,0.1)] hover:border-white/35 [&.active]:bg-gradient-to-br [&.active]:from-white/25 [&.active]:to-white/15 [&.active]:text-white [&.active]:shadow-[0_12px_25px_rgba(131,56,236,0.5),inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-1px_0_rgba(0,0,0,0.1)] [&.active]:border-white/40 [&.active]:before:content-[''] [&.active]:before:absolute [&.active]:before:-left-3 [&.active]:before:top-1/2 [&.active]:before:-translate-y-1/2 [&.active]:before:w-[5px] [&.active]:before:h-[35px] [&.active]:before:bg-gradient-to-b [&.active]:before:from-white [&.active]:before:to-white/80 [&.active]:before:rounded-none [&.active]:before:rounded-r-md [&.active]:before:shadow-[0_0_15px_rgba(255,255,255,0.6)]" title="Puntos">
                                <div className="flex items-center justify-center transition-all duration-300">
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="w-1/2 h-0.5 bg-gradient-to-r from-transparent via-white/10 via-white/30 to-transparent border-none my-[25px] relative rounded-sm">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[radial-gradient(circle,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0.2)_100%)] rounded-full shadow-[0_0_8px_rgba(255,255,255,0.4)]"></div>
                </div>

                <div className="flex flex-col items-center gap-[15px] mt-auto pb-[30px]">
                    <ul className="list-none m-0 p-0 flex flex-col items-center gap-[15px]">
                        <li className="flex items-center justify-center">
                            <button className="flex items-center justify-center w-[60px] h-[60px] text-white/85 no-underline rounded-[18px] bg-white/8 backdrop-blur-[15px] border border-white/15 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] relative text-xl shadow-[0_6px_15px_rgba(131,56,236,0.15),inset_0_1px_0_rgba(255,255,255,0.15),inset_0_-1px_0_rgba(0,0,0,0.1)] cursor-pointer hover:bg-red-500/25 hover:text-white hover:scale-[1.12] hover:-translate-y-[3px] hover:border-red-500/40 hover:shadow-[0_12px_25px_rgba(239,68,68,0.4),inset_0_1px_0_rgba(255,255,255,0.2),inset_0_-1px_0_rgba(0,0,0,0.1)]" onClick={() => setIsLogged(!isLogged)} title="Cerrar sesión">
                                <div className="flex items-center justify-center transition-all duration-300">
                                    <FontAwesomeIcon icon={faRightFromBracket} />
                                </div>
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </aside>
    );
};
