import React from 'react';
import { connect } from 'react-redux';
import phonebookActions from '../redux/phonebook/phonebookActions.js';
import styles from './Filter.module.css';
import PropTypes from 'prop-types';
import uuidv1 from 'uuid/v1';

const Filter = ({ value, onChangeFilter }) => (
    <div className={styles.container}>
        <label htmlFor="filter">Find contacts by name</label>
        <input
            id={uuidv1()}
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
    value: state.filter,
});

const mapDispatchToProps = {
    onChangeFilter: phonebookActions.changeFilter
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter); 