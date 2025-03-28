import styles from './Feedback.module.css';

function Feedback({ feedback, totalFeedback }) {
  const { good, neutral, bad } = feedback;
  const positivePercentage = Math.round((good / totalFeedback) * 100);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Feedback Statistics</h2>
      <ul className={styles.list}>
        <li className={styles.item}>Good: {good}</li>
        <li className={styles.item}>Neutral: {neutral}</li>
        <li className={styles.item}>Bad: {bad}</li>
        <li className={styles.item}>Total: {totalFeedback}</li>
        <li className={styles.item}>Positive: {positivePercentage}%</li>
      </ul>
    </div>
  );
}

export default Feedback;
