import css from './Feedback.module.css';

export default function Feedback({value}) {
  return (
    <div className={css.feedback}>
      <ul>
        <li>
          <span>Good: </span>
          <span>0</span>
        </li>
        <li>
          <span>Neutral: </span>
          <span>0</span>
        </li>
        <li>
          <span>Bad: </span>
          <span>0</span>
        </li>
        <li>
          <span>Total: </span>
          <span>0</span>
        </li>
        <li>
          <span>Positive: </span>
          <span>0%</span>
        </li>
      </ul>
    </div>
  );
}
