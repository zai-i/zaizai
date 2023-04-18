import React from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';

export default function ThemeToggle() {

  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <button
          className='unstyled'
          onClick={(e) =>
            theme === 'light' ? toggleTheme('dark') : toggleTheme('light')
          }
        >
          {theme === 'light' ? (
            <img className='light-mode' alt='switch to dark mode' />
          ) : (
            <img className='dark-mode' alt='switch to light mode' />
          )}
        </button>
      )}
    </ThemeToggler>
  );
}
