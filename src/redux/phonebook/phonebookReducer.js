import { createReducer } from '@reduxjs/toolkit';
import phonebookActions from './phonebookActions';

const addContact = (state, action) => [...state, action.payload];
const removeContact = (state, action) =>
  state.filter(contact => contact.id !== action.payload);

const contacts = createReducer([], {
  [phonebookActions.fetchContactsSuccess]: (state, action) => action.payload,
  [phonebookActions.addContactSuccess]: addContact,
  [phonebookActions.removeContactSuccess]: removeContact,
});

const filter = createReducer('', {
  [phonebookActions.changeFilter]: (state, action) => action.payload,
});

export default {
  contacts,
  filter,
};
