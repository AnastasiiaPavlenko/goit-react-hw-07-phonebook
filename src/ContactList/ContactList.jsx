import React from 'react';
import { connect } from 'react-redux';
import phonebookOperations from '../redux/phonebook/phonebookOperations';
import phonebookSelectors from '../redux/phonebook/phonebookSelectors';
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

const mapStateToProps = (state) => ({
    contacts: phonebookSelectors.getVisibleContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
    onRemove: (id) => dispatch(phonebookOperations.removeContact(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
