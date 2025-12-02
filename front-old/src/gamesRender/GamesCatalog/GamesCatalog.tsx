import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { gameCardData } from "../Data";
import GameCard from "../../components/GameCard/GameCard";

interface GameWithType {
    title: string;
    image: string;
    difficulty: string;
    wordsKey: unknown[];
    gameId?: string;
    gameType: string;
    typeLabel: string;
}

// Función para combinar todos los juegos y agregar el tipo
const getAllGamesWithTypes = (): GameWithType[] => {
    const allGames: GameWithType[] = [];
    
    // Agregar juegos de selección
    gameCardData.selection.forEach(game => {
        allGames.push({
            ...game,
            gameType: "selection",
            typeLabel: "Juego de Selección"
        });
    });
    
    // Agregar juegos de drag & drop
    gameCardData.dnd.forEach(game => {
        allGames.push({
            ...game,
            gameType: "dnd", 
            typeLabel: "Drag & Drop"
        });
    });
    
    // Agregar juegos de inglés
    gameCardData.english.forEach(game => {
        allGames.push({
            ...game,
            gameType: "english",
            typeLabel: "Inglés"
        });
    });
    
    // Agregar juegos de sopa de letras
    gameCardData.lettersoup.forEach(game => {
        allGames.push({
            ...game,
            gameType: "lettersoup",
            typeLabel: "Sopa de Letras"
        });
    });
    
    // Agregar juegos de crucigrama
    gameCardData.crossword.forEach(game => {
        allGames.push({
            ...game,
            gameType: "crossword",
            typeLabel: "Crucigrama"
        });
    });
    
    // Agregar juegos de escritura
    gameCardData.writing.forEach(game => {
        allGames.push({
            ...game,
            gameType: "writing",
            typeLabel: "Escritura"
        });
    });
    
    // Agregar juegos de relaciones
    gameCardData.relationship.forEach(game => {
        allGames.push({
            ...game,
            gameType: "relationship",
            typeLabel: "Relaciones"
        });
    });
    
    // Mezclar los juegos aleatoriamente
    return allGames.sort(() => Math.random() - 0.5);
};

export const GamesCatalog = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all");
    const [selectedType, setSelectedType] = useState<string>("all");
    const [searchGame, setSearchGame] = useState<string>("");
    
    const allGames = getAllGamesWithTypes();
    
    // Obtener el término de búsqueda de la URL
    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const searchFromUrl = urlParams.get('search');
        if (searchFromUrl) {
            setSearchGame(searchFromUrl);
        }
    }, [location.search]);
    
    // Filtrar juegos por dificultad, tipo y búsqueda
    const filteredGames = allGames.filter(game => {
        const difficultyMatch = selectedDifficulty === "all" || game.difficulty === selectedDifficulty;
        const typeMatch = selectedType === "all" || game.gameType === selectedType;
        const searchMatch = !searchGame || 
            game.title.toLowerCase().includes(searchGame.toLowerCase()) ||
            game.typeLabel.toLowerCase().includes(searchGame.toLowerCase()) ||
            game.title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(searchGame.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()) ||
            game.typeLabel.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(searchGame.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase());
        return difficultyMatch && typeMatch && searchMatch;
    });
    
    const handleGameSelect = (gameType: string, gameId: string) => {
        // Navegar al juego específico con el gameId
        navigate(`/${gameType}/${selectedDifficulty}?game=${gameId}`);
    };
    
    return (
        <div className="p-8 mx-auto w-full bg-transparent min-h-[calc(100vh-120px)]">
            <div className="text-center mb-8">
                <h1 className="text-[2.5rem] text-[#6a1b9a] mb-2 font-bold [text-shadow:0_2px_4px_rgba(138,43,226,0.2)]">🎮 Catálogo de Juegos</h1>
                <p className="text-[#8a2be2] text-[1.1rem]">Explora todos nuestros juegos</p>
            </div>
            
            {/* Filtros */}
            <div className="flex gap-8 justify-center mb-8 flex-wrap">
                <div className="flex flex-col gap-2">
                    <label className="text-[#6a1b9a] font-medium">Dificultad:</label>
                    <select 
                        className="py-2 px-4 border-2 border-[#8a2be2] rounded-lg bg-white text-[#6a1b9a] text-base min-w-[150px] shadow-[0_2px_8px_rgba(138,43,226,0.2)] focus:outline-none focus:border-[#da70d6] focus:shadow-[0_0_15px_rgba(218,112,214,0.3)] [&_option]:bg-white [&_option]:text-[#6a1b9a]"
                        value={selectedDifficulty} 
                        onChange={(e) => setSelectedDifficulty(e.target.value)}
                    >
                        <option value="all">Todas</option>
                        <option value="easy">Fácil</option>
                        <option value="medium">Medio</option>
                        <option value="hard">Difícil</option>
                    </select>
                </div>
                
                <div className="flex flex-col gap-2">
                    <label className="text-[#6a1b9a] font-medium">Tipo:</label>
                    <select 
                        className="py-2 px-4 border-2 border-[#8a2be2] rounded-lg bg-white text-[#6a1b9a] text-base min-w-[150px] shadow-[0_2px_8px_rgba(138,43,226,0.2)] focus:outline-none focus:border-[#da70d6] focus:shadow-[0_0_15px_rgba(218,112,214,0.3)] [&_option]:bg-white [&_option]:text-[#6a1b9a]"
                        value={selectedType} 
                        onChange={(e) => setSelectedType(e.target.value)}
                    >
                        <option value="all">Todos</option>
                        <option value="selection">Juegos de Selección</option>
                        <option value="dnd">Drag & Drop</option>
                        <option value="english">Inglés</option>
                        <option value="lettersoup">Sopa de Letras</option>
                        <option value="crossword">Crucigrama</option>
                        <option value="writing">Escritura</option>
                        <option value="relationship">Relaciones</option>
                    </select>
                </div>
            </div>
            
            {/* Lista de juegos */}
            <div className="grid grid-cols-[repeat(auto-fit,300px)] gap-6 py-4 w-full justify-center max-[1400px]:grid-cols-[repeat(auto-fit,280px)] max-[1400px]:gap-5 max-[1200px]:grid-cols-[repeat(auto-fit,260px)] max-[1200px]:gap-4 max-[992px]:grid-cols-[repeat(auto-fit,240px)] max-[768px]:grid-cols-[repeat(auto-fit,220px)] max-[768px]:gap-3 max-[576px]:grid-cols-1 max-[480px]:grid-cols-1 max-[480px]:gap-3">
                {filteredGames.map((game, index) => (
                    <div key={index} className="flex flex-col items-center gap-3">
                        <div className="bg-gradient-to-br from-[#8a2be2] to-[#6a1b9a] text-white py-2 px-4 rounded-[20px] text-[0.85rem] font-semibold text-center shadow-[0_3px_6px_rgba(138,43,226,0.4)] w-fit whitespace-nowrap -order-1 border border-[rgba(218,112,214,0.3)]">
                            {game.typeLabel}
                        </div>
                        <div className="w-full flex-1 [&_.card-spotlight]:w-full [&_.card-spotlight]:min-h-[250px] [&_.card-spotlight]:max-w-full">
                            <GameCard
                                title={game.title}
                                image={game.image}
                                difficulty={game.difficulty as "easy" | "medium" | "hard"}
                                gameId={game.gameId}
                                onGameSelect={() => handleGameSelect(game.gameType, game.gameId || '')}
                            />
                        </div>
                    </div>
                ))}
            </div>
            
            {filteredGames.length === 0 && (
                <div className="text-center py-12 text-[#8a2be2] text-[1.1rem] bg-[rgba(138,43,226,0.05)] rounded-[15px] border border-[rgba(138,43,226,0.2)]">
                    <p>No se encontraron juegos con los filtros seleccionados</p>
                </div>
            )}
        </div>
    );
};
