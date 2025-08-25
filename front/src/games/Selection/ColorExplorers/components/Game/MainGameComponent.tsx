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

interface ColorExplorersComponentProps {
    levelCount: number;
    setLevelCount: (level: number) => void;
}

const ColorExplorersComponent = ({ levelCount, setLevelCount }: ColorExplorersComponentProps) => {
    const navigate = useNavigate();
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
        if (levelCount >= 16) setLevelCount(1);
    }, [levelCount, setLevelCount]);

    /* Funcion que valida si se cumple la condicion para pasar al siguiente nivel y envia la respuesta */
    const onSubmit = (isCorrect: boolean) => {
        if (isCorrect) {
            Swal.fire({
                title: '¡Correcto! 🎨',
                text: '¡Excelente trabajo! Has completado el nivel',
                icon: 'success',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                customClass: {
                    popup: 'swal-custom-popup'
                },
                showClass: {
                    popup: 'animate__animated animate__zoomIn animate__faster'
                },
                hideClass: {
                    popup: 'animate__animated animate__zoomOut animate__faster'
                },
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            });
            dispatch(setPointsGame({ points: points + 100, color: "green" }));
            setLevelCount(levelCount + 1);
        } else {
            Swal.fire({
                title: '¡Incorrecto! 🎨',
                text: 'No te rindas, ¡intenta de nuevo!',
                icon: 'error',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                customClass: {
                    popup: 'swal-custom-popup'
                },
                showClass: {
                    popup: 'animate__animated animate__shakeX animate__faster'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOut animate__faster'
                },
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            });
            dispatch(setPointsGame({ points: points - 50, color: "red" }));
        }
    };

    const isFirstLevel = levelCount <= 5;
    const isSecondLevel = levelCount >= 6 && levelCount <= 10;
    const isThirdLevel = levelCount >= 11 && levelCount <= 15;

    // Función para obtener el título del ejercicio actual
    const currentTitle = () => {
        if (isFirstLevel) {
            const exerciseIndex = levelCount - 1; // Convertir levelCount a índice (1->0, 2->1, etc.)
            return dataLevel1[exerciseIndex]?.title || "Explorador de Colores";
        } else if (isSecondLevel) {
            const exerciseIndex = levelCount - 6; // Convertir levelCount a índice (6->0, 7->1, etc.)
            return dataLevel2[exerciseIndex]?.title || "Mezcla de Colores";
        } else if (isThirdLevel) {
            const exerciseIndex = levelCount - 11; // Convertir levelCount a índice (11->0, 12->1, etc.)
            return dataLevel3[exerciseIndex]?.title || "Teoría del Color";
        }
        return "¡Felicidades!";
    };

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
                {currentTitle()}
            </h3>
            {isFirstLevel ? (
                <div className="level">
                    <Level1
                        level={levelCount}
                        onSubmit={onSubmit}
                        setLevel={setLevelCount}
                        dataLevel={dataLevel1}
                        setDataLevel={setDataLevel1}
                    />
                </div>
            ) : isSecondLevel ? (
                <div className="level">
                    <Level2
                        level={levelCount}
                        onSubmit={onSubmit}
                        setLevel={setLevelCount}
                        dataLevel={dataLevel2}
                        setDataLevel={setDataLevel2}
                    />
                </div>
            ) : isThirdLevel ? (
                <div className="level">
                    <Level3
                        level={levelCount}
                        onSubmit={onSubmit}
                        setLevel={setLevelCount}
                        dataLevel={dataLevel3}
                        setDataLevel={setDataLevel3}
                    />
                </div>
            ) : null}
        </div>
    );
};

export default ColorExplorersComponent;
