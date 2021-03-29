import React, { Component } from 'react';
import styled from 'styled-components';
import ScoreBoard from './ScoreBoard';

const BackDiv = styled.div`
    background-image: radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%));
    height: 100vh;
    width: 100%;
    overflow: hidden;
    margin: auto;
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: all 1s ease-in-out;
    @media(max-width: 375px) {
      padding: 0;
    }
`

export default class Screen extends Component {
  render() {
    return (
      <BackDiv>
          <ScoreBoard />
      </BackDiv>
    );
  }
}
