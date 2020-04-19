import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import ThemeContext from './ThemeContext/ThemeContext';
import phonebookOperations from './redux/phonebook/phonebookOperations';

class App extends Component {
  static get propTypes() {
    return {
      toggleTheme: PropTypes.func.isRequired,
    };
  }

  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    const { toggleTheme } = this.props;

    return (
      <ThemeContext.Consumer>
        {theme => (
          <div
            className="body"
            style={{ background: theme.bodybg, color: theme.fontColor }}
          >
            <div className="theme-selector">
              <label htmlFor="theme" className="switch">
                <input
                  type="checkbox"
                  id="theme"
                  checked={theme.type === 'light'}
                  onChange={event => toggleTheme(event.currentTarget.value)}
                />
                <span className="slider round">
                  Change to {theme.changeTo} theme
              </span>
              </label>
            </div>
            <h1>Phonebook</h1>
            <ContactForm />
            <h2>Contacts</h2>
            <Filter />
            <ContactList />
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
};

const mapDispatchToProps = {
  onFetchContacts: phonebookOperations.fetchContacts,
};

export default connect(null, mapDispatchToProps)(App);

