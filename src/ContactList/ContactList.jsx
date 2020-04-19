import React from 'react';
import { connect } from 'react-redux';
// import phonebookActions from '../redux/phonebook/phonebookActions';
import phonebookOperations from '../redux/phonebook/phonebookOperations';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import ListItem from '../ListItem/ListItem';

function ContactList({ contacts, onRemove }) {
    return (
        <ul className={styles.contactList} >
            {contacts.map(contact => (
                <ListItem key={contact.id} id={contact.id} name={contact.name} number={contact.number} onRemove={onRemove} />
            ))
            }
        </ul>
    )
};

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
    const { contacts, filter } = state;
    const visibleContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
    return {
        contacts: visibleContacts
    }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    onRemove: () => dispatch(phonebookOperations.removeContact(ownProps.id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
