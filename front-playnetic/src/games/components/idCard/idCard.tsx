import { useState, useEffect } from "react";
import ImgIdCard from "../../Images/id-image.avif";
import "./idCard.css";
import { Level1 } from "../../Levels/level-1";
import type { InterfaceTypes } from "../../Interface/Levels-types";
import type { ColumnsTypes } from "../../Interface/columns-types";
import { columns } from "../../Levels/columns";
import { Level2 } from "../../Levels/level-2";
import Swal from "sweetalert2";

interface IdCardProps {
  exerciseCount: number;
  setExerciseCount: React.Dispatch<React.SetStateAction<number>>;
}

const IdCard = ({ exerciseCount, setExerciseCount }: IdCardProps) => {
  const [options, setOptions] = useState<InterfaceTypes[][]>(Level1);
  const [personInfo, setPersonInfo] = useState<InterfaceTypes[]>([]);
  const [optionInfo, setOptionInfo] = useState<InterfaceTypes[]>([]);
  const [levelCount, setLevelCount] = useState<number>(1);
  const [columnsInfo, setColumnsInfo] = useState<ColumnsTypes[]>(columns[0]);
  const [correctAnswers, setCorrectAnswers] = useState<string[]>([]);
/*   const [exerciseCount, setExerciseCount] = useState<number>(1); */

  useEffect(() => {
    getPerson();
    changeLevel();
  }, [levelCount, exerciseCount]);

  function getPerson() {
    const person: InterfaceTypes[] = [];
    const selectedOptions: InterfaceTypes[] = [];
    function ddzone(numberlist: number) {
      return {
        id: 1,
        type: "dd-zone",
        description: "dd-zone",
        gender: "",
        list: numberlist,
      };
    }

    function ramdomInfo(max: number) {
      return Math.round(Math.random() * max);
    }

    let getName = options[0][ramdomInfo(1)];
    let getLastName = options[1][ramdomInfo(1)];
    let getAge = options[2][ramdomInfo(1)];
    let getNationality =
      getName?.gender === "male" ? options[3][0] : options[3][1];

    if (levelCount === 1) {
      person.push(getName, getLastName, ddzone(4), ddzone(5));
      selectedOptions.push(getAge, getNationality);
    }

    if (levelCount === 2) {
      person.push(getName, ddzone(3), ddzone(4), ddzone(5));
      selectedOptions.push(getLastName, getAge, getNationality);
    }

    setOptionInfo(selectedOptions.sort(() => Math.random() - 0.6));
    setPersonInfo(person);
  }

  const getList = (list: number) => {
    return optionInfo.filter((item) => item.list === list);
  };

  const startDrag = (evt: any, item: InterfaceTypes) => {
    evt.dataTransfer.setData("itemID", item.id);
  };

  const draggingOver = (evt: any) => {
    evt.preventDefault();
  };

  function eliminatedWrongAnswer(item: InterfaceTypes) {
    const newAnswers: string[] = correctAnswers.filter(
      (answer) => answer !== item.type
    );
    setCorrectAnswers(newAnswers);
  }

  const onDrop = (evt: any, list: number, type: string) => {
    const itemID = evt.dataTransfer.getData("itemID");
    const item = optionInfo.find((item) => item.id == itemID);
    if (!item) return;
    item.list = list;

    const newState = optionInfo.map((optionInfo) => {
      if (optionInfo.id === itemID) return item;
      return optionInfo;
    });

    setOptionInfo(newState);

    if (item.type === type) {
      setCorrectAnswers([...correctAnswers, type]);
    }

    if (item.type !== type) {
      eliminatedWrongAnswer(item);
    }
  };

  function changeLevel() {
    if (levelCount === 1 && exerciseCount > 2) {
      setExerciseCount(1);
      setLevelCount(2);
      setCorrectAnswers([]);
      setOptions(Level2);
      setColumnsInfo(columns[1]);
      Swal.fire({
        title: "¡Muy bien!",
        text: "Continua en el siguiente nivel",
        icon: "success",
      });
    }

    if (levelCount === 2 && exerciseCount > 2) {
      setExerciseCount(1);
      setLevelCount(1);
      setCorrectAnswers([]);
      setOptions(Level1);
      setColumnsInfo(columns[0]);
      Swal.fire({
        title: "¡Perfecto!",
        text: "Haz terminado el juego",
        icon: "success",
      });
    }
  }

  function changeExercise() {
    setTimeout(() => {
      changeLevel();
      setExerciseCount(exerciseCount + 1);
    }, 2000)
    setCorrectAnswers([]);
    getPerson();
    Swal.fire({
        title: "Respuesta correcta",
        text: "Muy bien",
        icon: "success",
      });
  }

  function validateAnswer() {
    if (levelCount === 1 && correctAnswers.length === 2) {
      changeExercise();
    } else if (levelCount === 2 && correctAnswers.length === 3) {
      changeExercise();
    } else {
      Swal.fire({
        title: "Respuesta incorrecta",
        text: "Intentalo de Nuevo",
        icon: "error",
      });
    }
    const initialPositions = optionInfo.map((item) => {
      item.list = 1;
      return item;
    });
    setOptionInfo(initialPositions);
  }

  return (
    <div className="container-principal">
      <div className="container-title-principal">
        <h4 className="title-principal">
          Completa la tarjeta de identidad arrastrando las palabras de la
          derecha hacia donde le corresponde la imagen de la tarjeta.
        </h4>
      </div>
{/*       <ProgressBar
        className="wrapper"
        completed={exerciseCount}
        maxCompleted={2}
        customLabel={`${exerciseCount}/2`}
        animateOnRender={true} bgColor="#4B8BE6"
      /> */}
      <div className="container-principal-game">
        <div className="container-card">
          <section className="id-card">
            <div className="container-title-card">
              <h2 className="title-card">TARJETA DE IDENTIDAD</h2>
            </div>
            <div className="container-img-labels">
              <div className="container-img-card">
                <img
                  className="img-card-id"
                  width={150}
                  src={ImgIdCard}
                  alt="photo-id"
                ></img>
              </div>

              <div className="container-labels">
                {columnsInfo.map((column: any) => (
                  <>
                    {column.draggable === true ? (
                      <div className="container-info" key={column.id}>
                        <p>{column.name}</p>
                        {getList(column.columnNumber).length < 1 ? (
                          <div
                            className="dd-zone"
                            draggable={false}
                            onDragOver={(evt) => draggingOver(evt)}
                            onDrop={(evt) =>
                              onDrop(evt, column.columnNumber, column.type)
                            }
                          >
                            {getList(column.columnNumber).map((item: any) => (
                              <div
                                key={item.id}
                                className="dd-element"
                                draggable
                                onDragStart={(evt) => startDrag(evt, item)}
                              >
                                <p>{item?.description}</p>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="dd-zone">
                            {getList(column.columnNumber).map((item: any) => (
                              <div
                                key={item.id}
                                className="dd-element"
                                draggable
                                onDragStart={(evt) => startDrag(evt, item)}
                              >
                                <p>{item?.description}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="draggable-false">
                        <p>{column.name}</p>
                        <div>{personInfo[column.id - 1]?.description}</div>
                      </div>
                    )}
                  </>
                ))}
              </div>
            </div>
          </section>
        </div>
        <div
          className="options-drag-and-drop"
          onDragOver={(evt) => draggingOver(evt)}
          onDrop={(evt) => onDrop(evt, 1, "Answer")}
          draggable={false}
        >
          {getList(1).map((item) => (
            <div
              className="options"
              key={item.id}
              draggable
              onDragStart={(evt) => startDrag(evt, item)}
            >
              <p>{item?.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="container-button">
        <button onClick={validateAnswer}>Continuar</button>
      </div>
    </div>
  );
};

export default IdCard;
