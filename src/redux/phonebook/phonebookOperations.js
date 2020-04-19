import axios from 'axios';
import phonebookActions from './phonebookActions';

const addContact = (name, number) => dispatch => {
    dispatch(phonebookActions.addContactRequest());

    axios
        .post('http://localhost:2000/contacts', { name, number })
        .then(({ data }) => (dispatch(phonebookActions.addContactSuccess(data))))
        .catch(error => dispatch(phonebookActions.addContactError(error)));
};

const fetchContacts = () => dispatch => {
    dispatch(phonebookActions.fetchContactsRequest());

    axios
        .get('http://localhost:2000/contacts')
        .then(({ data }) => dispatch(phonebookActions.fetchContactsSuccess(data)))
        .catch(error => dispatch(phonebookActions.fetchContactsError(error)));
};

const removeContact = id => dispatch => {
    dispatch(phonebookActions.removeContactRequest());

    axios
        .delete(`http://localhost:2000/contacts/${id}`)
        .then(() => (dispatch(phonebookActions.removeContactSuccess(id))))
        .catch(error => dispatch(phonebookActions.removeContactError(error)));
};

export default {
    addContact,
    fetchContacts,
    removeContact,
};

