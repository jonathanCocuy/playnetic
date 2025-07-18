import { Link } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";
// React Icons
import { BiSolidStar, BiSolidStarHalf, BiStar } from "react-icons/bi";
import "./rightaside.scss";

interface RightAsideProps {
  exerciseCount: number;
}

export const RightAside = ({ exerciseCount }: RightAsideProps) => {
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
            <p className="progress_text">Tu progreso</p>
            <ProgressBar
              className="progress_bar"
              bgColor="blue"
              height="30px"
              completed={exerciseCount}
              maxCompleted={2}
              customLabel={`${exerciseCount}/2`}
            />
          </div>
          <div className="progress">
            <p className="progress_text">Tus estrellas</p>
            <div className="container_stars">
              <BiSolidStar className="star complete" size={40} />
              <BiSolidStar className="star complete" size={40} />
              <BiSolidStar className="star complete" size={40} />
              <BiSolidStar className="star complete" size={40} />
              <BiSolidStarHalf className="star mid" size={40} />
              <BiStar className="star non" size={40} />
              <BiStar className="star non" size={40} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
