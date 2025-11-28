import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { gameCardData } from "../Data";
import GameCard from "../../components/GameCard/GameCard";
import "./gamesCatalog.scss";

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
        <div className="games-catalog">
            <div className="catalog-header">
                <h1 className="catalog-title">🎮 Catálogo de Juegos</h1>
                <p className="catalog-subtitle">Explora todos nuestros juegos</p>
            </div>
            
            {/* Filtros */}
            <div className="filters">
                <div className="filter-group">
                    <label>Dificultad:</label>
                    <select 
                        value={selectedDifficulty} 
                        onChange={(e) => setSelectedDifficulty(e.target.value)}
                    >
                        <option value="all">Todas</option>
                        <option value="easy">Fácil</option>
                        <option value="medium">Medio</option>
                        <option value="hard">Difícil</option>
                    </select>
                </div>
                
                <div className="filter-group">
                    <label>Tipo:</label>
                    <select 
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
            <div className="games-grid">
                {filteredGames.map((game, index) => (
                    <div key={index} className="game-item">
                        <div className="game-type-badge">
                            {game.typeLabel}
                        </div>
                        <div className="game-card-container">
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
                <div className="no-games">
                    <p>No se encontraron juegos con los filtros seleccionados</p>
                </div>
            )}
        </div>
    );
};
