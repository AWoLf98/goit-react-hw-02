import Notification from '../Notification/Notification';

export default function Feedback({options: {good, neutral, bad}, totalFeedback }) {
  const positiveFeedback = Math.round((parseInt(good) / totalFeedback) * 100);
  return !totalFeedback ? <Notification/> :(
    <>
      <ul>
        <li>
          <span>Good: </span>
          <span>{good}</span>
        </li>
        <li>
          <span>Neutral: </span>
          <span>{neutral}</span>
        </li>
        <li>
          <span>Bad: </span>
          <span>{bad}</span>
        </li>
        <li>
          <span>Total: </span>
          <span>{totalFeedback}</span>
        </li>
        <li>
          <span>Positive: </span>
          <span>{`${positiveFeedback}%`}</span>
        </li>
      </ul>
    </>
  );
}
