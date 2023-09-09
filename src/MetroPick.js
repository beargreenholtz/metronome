import React, { Component } from 'react';
import { styled } from 'fannypack';

class MetronomePick extends Component {
  render() {
    const MetronomeContainer = styled.div`
      width: 300px;
      background-color: #333;
      padding: 70px;
      position: relative;
      border-radius: 8px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, 10%);

      &:before {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        border-radius: 8px;
        background-color: rgba(255, 255, 255, 0.04);
        content: ' ';
        animation-duration: ${1 / (this.props.tempo / 60 / 1000)}ms;
        animation-iteration-count: infinite;
        animation-direction: infinite;
        animation-timing-function: ease-in-out;

        @keyframes blink {
          0%,
          40%,
          60%,
          100% {
            opacity: 0;
          }

          50% {
            opacity: 1;
          }
        }
      }

      &:after {
        animation-duration: ${1 / (this.props.tempo / 60 / 1000)}ms *
          ${this.props.beatsPerBar};
        animation-name: text;
        animation-iteration-count: infinite;
        animation-timing-function: step-end;
        animation-delay: ${1 / (this.props.tempo / 60 / 1000)}ms / 2;
        content: '';
        color: #999;
        position: absolute;
        left: 50%;
        top: 100%;
        transform: translate(-50%, 10px);
        font-family: Helvetica;
        @keyframes text {
          $%@for $i from 1 through ${this.props.beatsPerBar} {
            $pct: percentage(($i - 1) / ${this.props.beatsPerBar});

            #{ $pct } {
              content: '#{ $i }';
            }
          }
        }
      }
    `;

    const MetronomeViz = styled.div`
      position: relative;
    `;

    const MetronomeLine = styled.div`
      height: 1px;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 1),
        rgba(255, 255, 255, 0)
      );
      opacity: 0.3;
      position: relative;

      &:before {
        content: '';
        height: 20px;
        width: 1px;
        position: absolute;
        left: 50%;
        top: -9px;
        background-color: #fff;
        opacity: 0.3;
      }
    `;
    const MetronomeIndicator = styled.div`
      height: 11px;
      width: 11px;

      background: #f33;
      border: #000 1px solid;
      box-shadow: inset 5px 5px 3px #ec9, 4px 2px 10px 3px rgba(0, 0, 0, 0.3);

      border-top-left-radius: 50%;
      border-top-right-radius: 50% 100%;
      border-bottom-right-radius: 5px;
      border-bottom-left-radius: 100% 50%;

      transform: rotate(45deg);

      padding: 10px;

      width: 15px;
      height: 15px;
      background-color: #fd6a02;
      margin-left: -5px;
      margin-top: -10px;
      position: absolute;
      left: 50%;
      top: 50%;
      animation-duration: ${1 / (this.props.tempo / 60 / 1000)}ms;
      animation-name: metronome;
      animation-iteration-count: infinite;
      animation-direction: alternate;
      animation-timing-function: ease-in-out;

      @keyframes metronome {
        0% {
          transform: translateX(-150px);
        }

        100% {
          transform: translateX(150px);
        }

        0%,
        100% {
          opacity: 0.5;
        }

        40%,
        60% {
          opacity: 0.9;
        }

        50% {
          opacity: 1;
        }
      }
    `;

    return (
      <MetronomeContainer>
        <MetronomeViz>
          <MetronomeLine />
          {this.props.isPlaying && <MetronomeIndicator />}
        </MetronomeViz>
      </MetronomeContainer>
    );
  }
}

export default React.memo(MetronomePick);
