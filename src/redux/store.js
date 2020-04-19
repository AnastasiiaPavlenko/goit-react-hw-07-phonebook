import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './phonebook/phonebookReducer';

const store = configureStore({
  reducer: {
    contacts: tasksReducer.contacts,
    filter: tasksReducer.filter,
  },
});

export default store;
