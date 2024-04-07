import './App.css';
import { useState, useEffect } from 'react';

import Description from './SipHappensCafe/Description/Description.jsx';
import Options from './SipHappensCafe/Options/Options.jsx';
import Feedback from './SipHappensCafe/Feedback/Feedback.jsx';
import Notification from './SipHappensCafe/Notification/Notification';

export default function App() {
  const [options, setOptions] = useState(() => {
    const localOptions = localStorage.getItem('options');
    return localOptions ? JSON.parse(localOptions) : { good: 0, neutral: 0, bad: 0 };
  });

  const totalFeedback = options.good + options.neutral + options.bad;
  const positiveFeedback = Math.round((parseInt(options.good) / totalFeedback) * 100);

  useEffect(() => {
    localStorage.setItem('options', JSON.stringify(options));
  }, [options]);

  function updateFeedback(feedbackType) {
    setOptions({
      ...options,
      [feedbackType]: options[feedbackType] + 1,
    });
  }

  function resetFeedback() {
    setOptions({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {!totalFeedback ? (
        <Notification />
      ) : (
        <Feedback
          options={options}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </>
  );
}
