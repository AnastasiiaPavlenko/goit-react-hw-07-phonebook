import { createSelector } from '@reduxjs/toolkit';

const getFilter = state => state.filter;

const getContacts = state => state.contacts;

const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter),
    );
  },
);

export default {
  getFilter,
  getVisibleContacts,
};
