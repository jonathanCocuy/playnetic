import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Level1 } from "./Levels";
import { Level2 } from "./Levels";
import { Level3 } from "./Levels";
import { informationData } from "../Data/index";
import "../../styles.scss";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../../../app/store";
import { setPointsGame } from "../../../../../features/gamePuntuation/gameSlice";

interface CreatingAnAnecdoteJCComponentProps {
    exerciseCount: number;
    levelCount: number;
    setExerciseCount: (count: number) => void;
    setLevelCount: (count: number) => void;
}

const CreatingAnAnecdoteJCComponent = ({ exerciseCount, levelCount, setExerciseCount, setLevelCount }: CreatingAnAnecdoteJCComponentProps) => {
    const navigate = useNavigate();
    /* Nivel actual */
    const dispatch = useDispatch<AppDispatch>();
    const points = useSelector((state: RootState) => state.game.pointsGame);

    /* La funcion information nos trae la informacion dependiendo el nivel que se le pase como parametro y luego almacenamos en el estado. */
    const dataExercise1 = informationData("level1");
    const dataExercise2 = informationData("level2");
    const dataExercise3 = informationData("level3");

    const [dataLevel1, setDataLevel1] = useState(dataExercise1);
    const [dataLevel2, setDataLevel2] = useState(dataExercise2);
    const [dataLevel3, setDataLevel3] = useState(dataExercise3);

    useEffect(() => {
        // Reset when reaching the end of all levels (3 levels * 5 exercises = 15 total)
        if (levelCount > 3) {
            setLevelCount(1);
            setExerciseCount(1);
        }
    }, [levelCount, setLevelCount, setExerciseCount]);

    /* Funcion que valida si se cumple la condicion para pasar al siguiente nivel y envia la respuesta */
    const onSubmit = (isCorrect: boolean) => {
        if (isCorrect) {
            Swal.fire({
                title: '¡Correcto!',
                text: 'Has completado el ejercicio',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            });
            dispatch(setPointsGame({ points: points + 100, color: "green" }));
            
            // Increment exercise count
            const newExerciseCount = exerciseCount + 1;
            setExerciseCount(newExerciseCount);
            
            // If we completed 5 exercises, move to next level
            if (newExerciseCount > 5) {
                setLevelCount(levelCount + 1);
                setExerciseCount(1); // Reset exercise count for new level
            }
        } else {
            Swal.fire({
                title: '¡Incorrecto!',
                text: 'Intenta de nuevo',
                icon: 'error',
                showConfirmButton: false,
                timer: 1500
            });
            dispatch(setPointsGame({ points: points - 50, color: "red" }));
        }
    };

    const isFirstLevel = levelCount === 1;
    const isSecondLevel = levelCount === 2;
    const isThirdLevel = levelCount === 3;

    return (
        <div className="explorers_of_the_animal_kingdom">
            <button 
                onClick={() => navigate('/selection/all')}
                style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    padding: '10px 20px',
                    backgroundColor: '#4A90E2',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: '600',
                    zIndex: 10
                }}
            >
                ← Volver
            </button>
            <h3 className="title_level">
                {isFirstLevel
                    ? dataLevel1[0]?.title
                    : isSecondLevel
                    ? dataLevel2[0]?.title
                    : dataLevel3[0]?.title}
            </h3>
            {isFirstLevel ? (
                <div className="level">
                    <Level1
                        level={exerciseCount}
                        onSubmit={onSubmit}
                        setLevel={setExerciseCount}
                        dataLevel={dataLevel1}
                        setDataLevel={setDataLevel1}
                    />
                </div>
            ) : isSecondLevel ? (
                <div className="level">
                    <Level2
                        level={exerciseCount}
                        onSubmit={onSubmit}
                        setLevel={setExerciseCount}
                        dataLevel={dataLevel2}
                        setDataLevel={setDataLevel2}
                    />
                </div>
            ) : isThirdLevel ? (
                <div className="level">
                    <Level3
                        level={exerciseCount}
                        onSubmit={onSubmit}
                        setLevel={setExerciseCount}
                        dataLevel={dataLevel3}
                        setDataLevel={setDataLevel3}
                    />
                </div>
            ) : null}
        </div>
    );
};

export default CreatingAnAnecdoteJCComponent;
