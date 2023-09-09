/**
 * Contains upper header including logo and
 * dark mode/light mode toggle button.
 */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

import Lottie from 'react-lottie';
import musicnote from './musicnote.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: musicnote,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export default class Navbar extends React.Component {
  render() {
    return (
      <header className="navbar">
        <div className="logo">
          <Lottie
            options={defaultOptions}
            height={30}
            width={30}
            isStopped={this.props.isPlaying}
          />
          &nbsp;&nbsp;Guitar Metronome
        </div>
        <div>
          <button onClick={this.props.toggleTheme}>
            {this.props.theme === 'dark' ? (
              <>
                <FontAwesomeIcon icon={faMoon} />
                &nbsp;&nbsp;Dark Mode
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faSun} />
                &nbsp;&nbsp;Light Mode
              </>
            )}
          </button>
        </div>
      </header>
    );
  }
}
