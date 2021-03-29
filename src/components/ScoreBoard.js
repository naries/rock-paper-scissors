import React, { Component, useState } from 'react'
import logo from '../images/logo.svg'
import PlayArea from './PlayArea'
import { TopBar, Board, Score, ScoreSpan, TopCoat, LogoImage } from '../components-styles' 
import Rules from './Rules'
import { useCookies } from 'react-cookie'

const ScoreBoard = () => {
    const [cookies, setCookie] = useCookies(['score'])

    const _updateScore = (incOrDec) => {
        if(incOrDec === 'inc') {
            setCookie('score', parseInt(cookies.score || 0) + 1, {path: '/'})
        }
        if(incOrDec === 'dec') {
            setCookie('score', parseInt(cookies.score || 0) - 1, {path: '/'})
        }
    }

    return (
    <>
        <TopCoat>

            <TopBar>
                <div>
                    <LogoImage src={logo} />
                </div>
                <Board>
                    <ScoreSpan>SCORE</ScoreSpan>
                    <Score>{cookies.score || 0}</Score>
                    <Rules />
                </Board>
            </TopBar>
        </TopCoat>
        <PlayArea _updateScore={_updateScore} />
    </>
    )
}

export default ScoreBoard