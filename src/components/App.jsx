import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import Section from './Section';

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const FeedbacType = { good, neutral, bad };

  const leaveFeedbackGood = () => {
    setGood(good + 1);
  };
  const leaveFeedbackNeutral = () => {
    setNeutral(neutral + 1);
  };
  const leaveFeedbackBad = () => {
    setBad(bad + 1);
  };

  const leaveFeedback = key => {
    if (key === 'good') {
      leaveFeedbackGood();
    }
    if (key === 'neutral') {
      leaveFeedbackNeutral();
    }
    if (key === 'bad') {
      leaveFeedbackBad();
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedback() === 0
      ? '0'
      : ((good / countTotalFeedback()) * 100).toFixed(0);
  };

  return (
    <div className="Feedback">
      <Section title="Please, leave feedback">
        <div>
          <FeedbackOptions
            options={Object.keys(FeedbacType)}
            onLeaveFeedback={leaveFeedback}
          />
        </div>
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            options={FeedbacType}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}
