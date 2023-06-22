import css from './Buttons.module.css';
import Button from 'components/Button/Button';
import PropTypes from 'prop-types';

const ButtonsSet = ({ increase }) => {
  return (
    <div className={css.buttons}>
      <Button name="good" action={() => increase('good')} />
      <Button name="neutral" action={() => increase('neutral')} />
      <Button name="bad" action={() => increase('bad')} />
    </div>
  );
};

ButtonsSet.propTypes = {
  increase: PropTypes.func.isRequired,
};

export default ButtonsSet;
