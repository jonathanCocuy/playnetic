import "./rightaside.scss";
import ProgressBar from "@ramonak/react-progress-bar";
import { BiSolidStar, BiSolidStarHalf, BiStar } from "react-icons/bi";

interface RightAsideProps {
  exerciseCount: number;
}

export const RightAside = ({ exerciseCount }: RightAsideProps) => {
  return (
    <div className="right_aside">
      <div className="categories">
        <div className="container_title">
          <h2 className="title">Categorías</h2>
        </div>
        <div className="category_list">
          <button className="item selection">Selección</button>
          <button className="item relationship">Relacionar</button>
          <button className="item dnd">Arrastre</button>
          <button className="item lettersoup">Sopa de letras</button>
        </div>
      </div>
      <div className="points">
        <div>
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
