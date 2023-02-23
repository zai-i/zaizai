import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

export default class ThemeToggle extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
            <button className="unstyled"
            onClick={e => theme === 'light' ? toggleTheme('dark') : toggleTheme('light')}>
            {theme === 'light' ? <img className="light-mode" /> :  <img className="dark-mode" /> }
          </button>
        )}
      </ThemeToggler>
    )
  }
}
