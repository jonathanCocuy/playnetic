import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// React Icons
import { BsCaretDownFill } from "react-icons/bs";
// Images
import User from "../assets/user.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const Topbar = () => {
    const [profileOpen, setProfileOpen] = useState<boolean>(false);
    const [searchGame, setSearchGame] = useState<string>("");
    const navigate = useNavigate();
    
    function openIt() {
        setProfileOpen(!profileOpen);
    }
    
    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchGame.trim()) {
            // Navegar a la página de juegos con el término de búsqueda
            navigate(`/games?search=${encodeURIComponent(searchGame.trim())}`);
        }
    };
    
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchGame(e.target.value);
    };

    return (
        <div className="h-20 z-[1000] rounded-[20px] bg-gradient-to-br from-[#5f27cd] via-primary-purple to-[#6d28d9] fixed top-5 left-[130px] right-[415px] flex items-center justify-between shadow-[0_10px_30px_rgba(95,39,205,0.4),inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-[10px] border border-white/10 overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.05)_0%,transparent_50%)] before:pointer-events-none">
            <form className="w-[60%] ml-[70px] relative flex items-center justify-center gap-5 z-[2]" onSubmit={handleSearch}>
                <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" />
                <input
                    id="search"
                    name="search"
                    className="w-full border-none text-white text-xl box-border bg-transparent font-medium placeholder:text-white/70 placeholder:font-normal text-[20px] py-[15px] focus:outline-none focus:text-white peer"
                    type="text"
                    placeholder="Buscar juego..."
                    value={searchGame}
                    onChange={handleSearchChange}
                />
                <span className="absolute left-0 bottom-0 h-[3px] w-0 transition-[width] duration-300 ease-[cubic-bezier(0.42,0,0.58,1)] bg-gradient-to-r from-white via-indigo-100 to-white rounded-[2px] shadow-[0_0_10px_rgba(255,255,255,0.3)] peer-focus:w-full peer-focus:shadow-[0_0_15px_rgba(255,255,255,0.5)]"></span>
            </form>
            <div className="bg-gradient-to-br from-[#401d95] to-[#5b27da] w-[220px] h-[65px] p-2 relative mr-[50px] rounded-2xl shadow-[0_8px_25px_rgba(64,29,149,0.4),inset_0_1px_0_rgba(255,255,255,0.1)] flex items-center justify-center gap-[10px] z-[2] border border-white/10">
                <div className="leading-[1.3] flex flex-col justify-center">
                    <p className="text-sm text-white/80 font-medium">Disfruta tu juego,</p>
                    <p className="text-base font-semibold text-white">Usuario</p>
                </div>
                <button
                    className={`border-none p-[6px] rounded-[18px] bg-white/10 flex items-center justify-center gap-[6px] cursor-pointer transition-all duration-300 backdrop-blur-[10px] ${profileOpen ? 'bg-white/20 -translate-y-0.5 shadow-[0_6px_20px_rgba(0,0,0,0.3)]' : 'hover:bg-white/15 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)]'}`}
                    onClick={openIt}
                >
                    <img
                        className="h-10 rounded-full border-2 border-white/30 transition-all duration-300"
                        src={User}
                        alt="Profile image"
                    />
                    <BsCaretDownFill size={12} color="white" />
                </button>
                <div className={`w-full p-3 bg-gradient-to-br from-[#5b27da] to-primary-purple absolute left-0 top-[75px] flex flex-col rounded-2xl shadow-[0_15px_35px_rgba(91,39,218,0.4),inset_0_1px_0_rgba(255,255,255,0.1)] border border-white/10 backdrop-blur-[10px] ${profileOpen ? 'flex animate-slide-in-down' : 'hidden'}`}>
                    <li className="w-full flex list-none my-0.5">
                        <NavLink className="w-full text-white py-[10px] px-3 rounded-[10px] no-underline font-medium text-sm transition-all duration-300 flex items-center gap-2 hover:text-indigo-100 hover:bg-white/15 hover:translate-x-1" to="/profile">
                            Editar Perfil
                        </NavLink>
                    </li>
                    <li className="w-full flex list-none my-0.5">
                        <NavLink className="w-full text-white py-[10px] px-3 rounded-[10px] no-underline font-medium text-sm transition-all duration-300 flex items-center gap-2 hover:text-indigo-100 hover:bg-white/15 hover:translate-x-1" to="/profile">
                            Cambiar foto
                        </NavLink>
                    </li>
                </div>
            </div>
        </div>
    );
};
