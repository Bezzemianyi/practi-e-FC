import { useEffect, useState } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

const App = () => {
  const [votingData, setVotingData] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem("votingData"));
    if (
      savedData &&
      typeof savedData === "object" &&
      savedData.good !== undefined &&
      savedData.neutral !== undefined &&
      savedData.bad !== undefined
    ) {
      return savedData;
    }
    return { good: 0, neutral: 0, bad: 0 };
  });
  useEffect(() => {
    localStorage.setItem("votingData", JSON.stringify(votingData));
  }, [votingData]);
  const updateFeedback = (feedbackType) => {
    setVotingData((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };
  const resetFeedback = () => {
    setVotingData({ good: 0, neutral: 0, bad: 0 });
  };
  const totalFeedback = votingData.good + votingData.neutral + votingData.bad;
  const positiveFeedback = Math.round((votingData.good / totalFeedback) * 100);

  return (
    <div>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          votingData={votingData}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};
export default App;
