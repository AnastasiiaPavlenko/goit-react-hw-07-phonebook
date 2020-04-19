import React from 'react';

export const themeConfig = {
    light: {
        fontColor: 'black',
        bodybg: 'white',
        changeTo: 'dark',
    },
    dark: {
        fontColor: 'white',
        bodybg: 'black',
        changeTo: 'light',
    }
};

const ThemeContext = React.createContext(themeConfig.light);
export default ThemeContext;