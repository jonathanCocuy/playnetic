import React, { useState } from "react";
import { Level1 } from "./Levels";
import { Level2 } from "./Levels";
import { Level3 } from "./Levels";
import { informationData } from "../Data/index";
import "../../styles.scss";
import Swal from "sweetalert2";

const CreatingAnAnecdoteJCComponent = () => {
    /* Nivel actual */
    const [level, setLevel] = useState(1);

    /* La funcion information nos trae la informacion dependiendo el nivel que se le pase como parametro y luego almacenamos en el estado. */
    const dataExercise1 = informationData("level1");
    const dataExercise2 = informationData("level2");
    const dataExercise3 = informationData("level3");

    const [dataLevel1, setDataLevel1] = useState(dataExercise1);
    const [dataLevel2, setDataLevel2] = useState(dataExercise2);
    const [dataLevel3, setDataLevel3] = useState(dataExercise3);

    React.useEffect(() => {
        if (level >= 16) setLevel(1);
    }, [level]);

    /* Funcion que valida si se cumple la condicion para pasar al siguiente nivel y envia la respuesta */
    const onSubmit = (isCorrect: boolean) => {
        if (isCorrect) {
            Swal.fire({
                title: '¡Correcto!',
                text: 'Has completado el nivel',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            });
            setLevel(level + 1);
        } else {
            Swal.fire({
                title: '¡Incorrecto!',
                text: 'Intenta de nuevo',
                icon: 'error',
                showConfirmButton: false,
                timer: 1500
            });
        }
    };

    const isFirstLevel = level <= 5;
    const isSecondLevel = level >= 6 && level <= 10;
    const isThirdLevel = level >= 11 && level <= 15;

    return (
        <div className="explorers_of_the_animal_kingdom">
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
                        level={level}
                        onSubmit={onSubmit}
                        setLevel={setLevel}
                        dataLevel={dataLevel1}
                        setDataLevel={setDataLevel1}
                    />
                </div>
            ) : isSecondLevel ? (
                <div className="level">
                    <Level2
                        level={level}
                        onSubmit={onSubmit}
                        setLevel={setLevel}
                        dataLevel={dataLevel2}
                        setDataLevel={setDataLevel2}
                    />
                </div>
            ) : isThirdLevel ? (
                <div className="level">
                    <Level3
                        level={level}
                        onSubmit={onSubmit}
                        setLevel={setLevel}
                        dataLevel={dataLevel3}
                        setDataLevel={setDataLevel3}
                    />
                </div>
            ) : null}
        </div>
    );
};

export default CreatingAnAnecdoteJCComponent;
