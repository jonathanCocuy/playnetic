import { Link } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";
import "./rightaside.scss";
import CountUp from "../components/CounterFramer/CountUp";
// Redux
import { RootState } from "../app/store";
import { useSelector } from "react-redux";
interface RightAsideProps {
  exerciseCount: number;
  levelCount: number;
}

export const RightAside = ({ exerciseCount, levelCount }: RightAsideProps) => {
  const points = useSelector((state: RootState) => state.game.pointsGame);
  const color = useSelector((state: RootState) => state.game.color);

  console.log(points);

  return (
    <div className="right_aside">
      <div className="categories">
        <h2 className="title">Categorías</h2>
        <div className="category_list">
          <Link className="item selection" to={"/selection"}>Selección</Link>
          <Link className="item relationship" to={"/relationship"}>Relacionar</Link>
          <Link className="item dnd" to={"/dnd"}>Arrastre</Link>
          <Link className="item lettersoup" to={"/lettersoup"}>Sopa de letras</Link>
          <Link className="item crossword" to={"/crossword"}>Crucigrama</Link>
          <Link className="item writing" to={"/writing"}>Escritura</Link>
        </div>
      </div>
      <div className="points">
        <div className="container_title">
          <h2 className="title">Puntos</h2>
          <div className="progress">
            <p className="progress_text">Nivel actual</p>
            <ProgressBar
              className="progress_bar"
              bgColor="blue"
              height="30px"
              completed={levelCount}
              maxCompleted={2}
              customLabel={`${levelCount}/2`}
              borderRadius="8px"
            />
            <p className="progress_text">Ejercicio actual</p>
            <ProgressBar
              className="progress_bar"
              bgColor="red"
              height="30px"
              completed={exerciseCount}
              maxCompleted={2}
              customLabel={`${exerciseCount}/2`}
              borderRadius="8px"
            />
          </div>
          <div className="progress">
            <p className="progress_text">Tus puntos</p>
            <div className="container_points">
              <CountUp
                from={0}
                to={points}
                separator=","
                direction="up"
                duration={1}
                className={color}
              />
              <p className="points_text">/1000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
