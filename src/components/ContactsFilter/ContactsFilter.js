import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/contactsReducer';

import styles from './contactsFilter.module.scss';
import translateStyles from '../../scss/transition/translate.module.scss';

const ContactsFilter = ({ value, contactsLength, changeFilter }) => {
  return (
    <CSSTransition
      in={contactsLength > 1}
      appear
      classNames={translateStyles}
      timeout={250}
      unmountOnExit
    >
      <div className={styles.wrapper}>
        <label htmlFor="contacts-filter" className={styles.label}>
          Find contacts by name
        </label>
        <input
          name="filter"
          value={value}
          onChange={(e) => changeFilter(e.target.value)}
          id="contacts-filter"
          className={styles.input}
          autoComplete="off"
        />
      </div>
    </CSSTransition>
  );
};

ContactsFilter.propTypes = {
  value: PropTypes.string.isRequired,
  contactsLength: PropTypes.number.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = ({ contacts: { filter, items } }) => ({
  value: filter,
  contactsLength: items.length,
});
const mapDispatchToProps = {
  changeFilter: changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsFilter);
