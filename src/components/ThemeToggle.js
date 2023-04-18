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
          <img className='mode' alt='switch mode' />
        </button>
      )}
    </ThemeToggler>
  );
}
