import React, { Component } from 'react';
import ThemeContext, { themeConfig } from '../ThemeContext/ThemeContext';
import App from '../App';

class Theme extends Component {
  constructor() {
    super();
    this.state = {
      theme: 'light',
    };
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme(newTheme) {
    const { theme } = this.state;
    this.setState(() => {
      return { theme: theme === 'dark' ? 'light' : 'dark' };
    });
  }

  render() {
    const { theme } = this.state;
    return (
      <ThemeContext.Provider value={themeConfig[theme]}>
        <App toggleTheme={this.toggleTheme} />
      </ThemeContext.Provider>
    );
  }
}

export default Theme;
