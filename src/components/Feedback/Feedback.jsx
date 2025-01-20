import s from "./Feedback.module.css";
const Feedback = ({ votingData, positiveFeedback, totalFeedback }) => {
  return (
    <div>
      <ul className={s.list}>
        <li>
          <p>Good: {votingData.good}</p>
        </li>
        <li>
          <p>Neutral: {votingData.neutral}</p>
        </li>
        <li>
          <p>Bad: {votingData.bad}</p>
        </li>
        <li>
          <p>Total: {totalFeedback}</p>
        </li>
        <li>
          <p>Positive: {positiveFeedback}%</p>
        </li>
      </ul>
    </div>
  );
};

export default Feedback;
