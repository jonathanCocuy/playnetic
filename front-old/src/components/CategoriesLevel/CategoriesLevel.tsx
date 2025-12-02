import { Link, useParams } from "react-router-dom";

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
        <div className="flex flex-col items-center justify-center gap-[10px]">
            <div className="flex gap-[10px]">
                <Link
                    className={`text-[17px] font-bold border-none cursor-pointer rounded-[0.75em] bg-black no-underline ${isActive("all") ? '[&_.button-top]:-translate-y-[0.5em]' : ''}`}
                    to={`/${game}/all`}
                >
                    <span className="block box-border border-2 border-black rounded-[0.75em] py-3 px-6 bg-[#401D95] text-white -translate-y-[0.2em] transition-transform duration-100 ease hover:-translate-y-[0.5em] active:-translate-y-[0.5em] font-medium">Todos</span>
                </Link>
                <Link 
                    className={`text-[17px] font-bold border-none cursor-pointer rounded-[0.75em] bg-black no-underline ${isActive("easy") ? '[&_.button-top]:-translate-y-[0.5em]' : ''}`}
                    to={`/${game}/easy`}
                >
                    <span className="block box-border border-2 border-black rounded-[0.75em] py-3 px-6 bg-[#4CAF50] text-white -translate-y-[0.2em] transition-transform duration-100 ease hover:-translate-y-[0.5em] active:-translate-y-[0.5em] font-medium">Fácil</span>
                </Link>
                <Link 
                    className={`text-[17px] font-bold border-none cursor-pointer rounded-[0.75em] bg-black no-underline ${isActive("medium") ? '[&_.button-top]:-translate-y-[0.5em]' : ''}`}
                    to={`/${game}/medium`}
                >
                    <span className="block box-border border-2 border-black rounded-[0.75em] py-3 px-6 bg-[#FFC107] text-white -translate-y-[0.2em] transition-transform duration-100 ease hover:-translate-y-[0.5em] active:-translate-y-[0.5em] font-medium">Medio</span>
                </Link>
                <Link 
                    className={`text-[17px] font-bold border-none cursor-pointer rounded-[0.75em] bg-black no-underline ${isActive("hard") ? '[&_.button-top]:-translate-y-[0.5em]' : ''}`}
                    to={`/${game}/hard`}
                >
                    <span className="block box-border border-2 border-black rounded-[0.75em] py-3 px-6 bg-[#F44336] text-white -translate-y-[0.2em] transition-transform duration-100 ease hover:-translate-y-[0.5em] active:-translate-y-[0.5em] font-medium">Difícil</span>
                </Link>
            </div>
        </div>
    );
};