import React, { Component } from 'react';
import styled from 'styled-components';
import ScoreBoard from './ScoreBoard';

const BackDiv = styled.div`
    position: relative;
    height: 100vh;
    width: 100%;
    max-width: 800px;
    overflow: none;
    margin: auto;
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
