import "./buttongame.scss";

export const ButtonGame = () => {
  return (
    <button className="button_game">
      J U G A R
      <div id="clip">
        <div id="leftTop" className="corner"></div>
        <div id="rightBottom" className="corner"></div>
        <div id="rightTop" className="corner"></div>
        <div id="leftBottom" className="corner"></div>
      </div>
      <span id="rightArrow" className="arrow"></span>
      <span id="leftArrow" className="arrow"></span>
    </button>
  );
};
