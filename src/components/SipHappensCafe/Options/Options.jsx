import css from './Options.module.css';

export default function Options({ updateFeedback, resetFeedback, totalFeedback }) {
  return (
    <div className={css.options}>
      <ul className={css['options-list']}>
        <li>
          <button onClick={() => updateFeedback('good')}>Good</button>
        </li>
        <li>
          <button onClick={() => updateFeedback('neutral')}>Neutral</button>
        </li>
        <li>
          <button onClick={() => updateFeedback('bad')}>Bad</button>
        </li>
        {totalFeedback != 0 && (
          <li>
            <button onClick={resetFeedback}>Reset</button>
          </li>
        )}
      </ul>
    </div>
  );
}
