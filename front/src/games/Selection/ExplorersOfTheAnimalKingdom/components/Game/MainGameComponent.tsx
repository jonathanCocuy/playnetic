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

interface ExplorersOfTheAnimalKingdomComponentProps {
    levelCount: number;
    setLevelCount: (level: number) => void;
}

const ExplorersOfTheAnimalKingdomComponent = ({ levelCount, setLevelCount }: ExplorersOfTheAnimalKingdomComponentProps) => {
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
                title: '¡Correcto! 🎉',
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
                title: '¡Incorrecto! 😅',
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

export default ExplorersOfTheAnimalKingdomComponent;
