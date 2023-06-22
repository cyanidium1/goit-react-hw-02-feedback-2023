import css from './Stats.module.css';
// import PropTypes from 'prop-types';

const Stats = ({ params }) => {
  if (!params.good && !params.neutral && !params.bad) {
    return <p>No stats</p>;
  }

  function average() {
    return Math.round((params.good / (params.good + params.bad)) * 100);
  }

  return (
    <div className={css.list}>
      <p className={css.item}>Good: {params.good}</p>
      <p className={css.item}>Neutral: {params.neutral}</p>
      <p className={css.item}>Bad: {params.bad}</p>
      <p className={css.item}>
        Total: {params.good + params.neutral + params.bad}
      </p>
      <p className={css.item}>Percents: {average()}</p>
    </div>
  );
};

// Stats.propTypes = {
//   params: PropTypes.arrayOf(PropTypes.string),
// };

export default Stats;
