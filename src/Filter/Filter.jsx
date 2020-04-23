import React from 'react';
import { connect } from 'react-redux';
import phonebookActions from '../redux/phonebook/phonebookActions.js';
import phonebookSelectors from '../redux/phonebook/phonebookSelectors';
import styles from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ value, onChangeFilter }) => (
    <div className={styles.container}>
        <label htmlFor="filter">Find contacts by name</label>
        <input
            type="text"
            name="filter"
            value={value}
            className={styles.input}
            onChange={e => onChangeFilter(e.target.value)}
        />
    </div>
);

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChangeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    value: phonebookSelectors.getFilter(state),
});

const mapDispatchToProps = {
    onChangeFilter: phonebookActions.changeFilter
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter); 