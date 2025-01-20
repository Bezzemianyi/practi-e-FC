import s from "./Options.module.css";
const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
  return (
    <div>
      <ul className={s.list}>
        <li>
          <button onClick={() => updateFeedback("good")}>Good</button>
        </li>
        <li>
          <button onClick={() => updateFeedback("neutral")}>Neutral</button>
        </li>
        <li>
          <button onClick={() => updateFeedback("bad")}>Bad</button>
        </li>
        {totalFeedback > 0 ? (
          <li>
            <button onClick={() => resetFeedback()}>Reset</button>
          </li>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
};

export default Options;
