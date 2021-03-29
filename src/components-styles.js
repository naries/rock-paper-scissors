import styled, { css } from 'styled-components'

export const Area = styled.div`
    position: relative;
    margin: 50px;
    margin-top: 90px;
    @media(max-width: 585px){
        margin-top: 0;
        margin: 0;
    }
`

export const ExtraSpace = styled.div`
    display: none;
    flex:1;
    @media(max-width: 585px) {
        display: flex;
    }
`

export const RoundPallete = styled.div`
    height: 150px;
    width: 150px;
    display: flex;
    border-radius: 100%;
    position: relative;
    cursor: pointer;
    justify-content: center;
    z-index: 2;
    align-items: center;

    ${props => props.paper && css`
        background-image: linear-gradient(to bottom, hsl(230, 89%, 62%), hsl(230, 89%, 65%));
    `}
    ${props => props.rock && css`
        background-image: linear-gradient(to bottom, hsl(349, 71%, 52%), hsl(349, 70%, 56%));
    `}
    ${props => props.scissors && css`
        background-image: linear-gradient(to bottom, hsl(39, 89%, 49%), hsl(40, 84%, 53%));
    `}

    @media(max-width: 585px) {
        width: 120px;
        height: 120px;
    }

`
export const Image = styled.img`
    width: 250px;
    height: 200px;
    @media(max-width: 585px) {
        width: 200px;
        height: 150px;
    }
`
export const PlayIcon = styled.img`
    @media(max-width: 585px) {
        width: 40px;
        height: 40px;
    }
`

export const LogoImage = styled.img`
    @media(max-width: 585px) {
        height: 60px;
        width: 100px;
    }
`

export const InnerPallete = styled.div`
    height: 95px;
    width: 110px;
    z-index: 4;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: hsl(0, 0%, 89%);
    border-radius: 100%;
    ${props => props.clickable && `
        &:hover{
            background-color: rgba(255,255,255, .7);
        }
    `}

    @media(max-width: 585px) {
        width: 80px;
        height: 65px;
    }
`

export const TopCoat = styled.div`
    @media(max-width: 585px) {
        flex: 1;
        justify-content:center;
        align-items: center;
        padding-top: 20px;
    }
`
export const MiddleCoat = styled(TopCoat)`
    @media(max-width: 585px) {
        padding-top: unset;
        flex: .8;
    }
`

export const TopBar = styled.div`
    width: 500px;
    height: 100px;
    border: 3px solid hsl(217, 16%, 45%);
    border-radius: 16px;
    padding: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: space-between;
    @media(max-width: 585px) {
        padding: 10px;
        height: unset;
        width: 290px;
    }
    
`

export const Board = styled.div`
    background-color: white;
    padding: 10px;
    width: 120px;
    border-radius: 6px;
    @media(max-width: 585px) {
        width: 70px;
    }
`

export const Score = styled.div`
    font-size: 50px;
    @media(max-width: 585px) {
        font-size: 30px;
    }
    
`
    
export const ScoreSpan = styled.div`
    color: hsl(229, 64%, 46%);
    font-weight: 700;
    @media(max-width: 585px) {
        font-size: 12px;
    }
`

export const BigInnerPallete = styled(InnerPallete)`
    width: 190px;
    height: 170px;
    @media(max-width: 585px) {
        width: 80px;
        height: 65px;
    }
`
export const BigRoundPallete = styled(RoundPallete)`
    width: 250px;
    height: 250px;
    cursor: initial;
    @media(max-width: 585px) {
        width: 120px;
        height: 120px;
    }
`
export const BigPlayIcon = styled(PlayIcon)`
    width: 100px;
    height: 100px;
    @media(max-width: 585px) {
        width: 40px;
        height: 40px;
    }
`

export const Text = styled.div`
    color: white;
    margin-bottom: 60px;
    font-size: 18px;
    font-weight: 600;
    display: block;
    @media(max-width: 585px) {
        display: none;
    }
`
export const DownText = styled(Text)`
    display: none;
    @media(max-width: 585px) {
        display: block;
        margin-top: 30px;
        font-size: 13px;
    }
`

export const HorizontalSpacer = styled.div`
    display: flex;
    flex-direction: row;
    width: 600px;
    justify-content: space-between;
    align-items: space-between;
    ${props => props.extraWidth && css`
        width: 850px;
    `}
    @media(max-width: 585px) {
        width: 320px;
    }
`

export const PlaceHolder = styled(BigInnerPallete)`
    background-color: rgba(0, 0, 0, .2);
    height: 150px;
    width: 150px;
    @media(max-width: 585px) {
        width: 120px;
        height: 120px;
    }
`

export const OuterHolder = styled(BigRoundPallete)`
    background-color: transparent;
`
export const ShadowMain = styled.div`
    height: 230px;
    width: 240px;
    position: absolute;
    bottom: -10px;
    left: 5px;
    z-index: 1;
    border-radius: 100%;
    ${props => props.small && css`
        width: 150px;
        height: 150px;
        left:0;
        bottom: -5px;
    `}
    ${props => props.rock && css`
        background-color: hsl(358, 54%, 40%);
    `}
    ${props => props.scissors && css`
        background-color: hsl(27, 73%, 45%);
    `}
    ${props => props.paper && css`
        background-color: hsl(220, 62%, 47%);
    `}

    @media(max-width: 585px) {
        width: 120px;
        height: 110px;
        left:0;
        bottom: -5px;
    }
`
export const Container = styled.div`
    position: relative;
    ${props =>  props.topLeft && css`
        position: absolute;
        top: -55px;
        left: -55px;
    `}

    ${props => props.topRight && css`
        position: absolute;
        top: -55px;
        right: -55px;
    `}
    ${props => props.bottom && css`
        position: absolute;
        bottom: -55px;
        left: 22%;
    `}
`

export const BackDrop = styled.div`
    height: 190px;
    width: 190px;
    z-index: 3;
    position: absolute;
    border-radius: 1000px;
    background-image: linear-gradient(to bottom, hsl(228, 22%, 78%) 2%, hsl(0, 0%, 89%));
    ${props => props.small && css`
        height: 110px;
        width: 110px;
    `}
    @media(max-width: 585px) {
        width: 80px;
        height: 80px;
    }
`
export const MiddleUpdate = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    @media(max-width: 585px) {
        display: none;
        width: 0;
    }
`

export const BottomUpdate = styled(MiddleUpdate)`
    flex: 1;
    display: none;
    @media(max-width: 585px) {
        display: block;
        width: auto!important;
    }
`

export const BigText = styled(Text)`
    font-size: 50px;
    margin-bottom: 20px;
    @media(max-width: 585px) {
        display: block;
    }
`

export const Button = styled.button`
    background-color: white;
    padding: 20px 20px;
    outline: none;
    font-size: 12px;
    color: purple;
    width: 220px;
    font-weight: 600;
    letter-spacing: 2px;
    border: none;
    cursor: pointer;
    border-radius: 10px;
`

export const FirstShadow = styled.div`
    background-color: rgba(255,255,255, .1);
    border-radius: 1000px;
    position: absolute;
    width: 350px;
    height: 350px;
    left: -50px;
    top: -50px;
    @media(max-width: 585px) {
        height: 160px;
        width: 160px;
        left:-15%;
        top: -15%;
    }
`

export const SecondShadow = styled(FirstShadow)`
    left: -100px;
    top: -100px;
    width: 450px;
    height: 450px;
    background-color: rgba(255,255,255, .05);
    @media(max-width: 585px) {
        height: 200px;
        width: 200px;
        left:-32%;
        top: -32%;
    }
`

export const ThirdShadow = styled(FirstShadow)`
    left: -150px;
    top: -150px;
    height: 550px;
    width: 550px;
    background-color: rgba(255,255, 255, .0125);
    @media(max-width: 585px) {
        height: 240px;
        width: 240px;
        left: -50%;
        top: -50%;
    }
`