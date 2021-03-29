import { Link, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import GameRules from '../images/image-rules.svg'
import Close from '../images/icon-close.svg'

const BottomHang = styled.div`
    position: fixed;
    right: 60px;
    bottom: 60px;
    color: white;
    z-index: 2000;
    @media(max-width: 375px) {
      right: 35%;
    }
`
const BottomHangInner = styled.button`
    border: 1px solid white; 
    padding: 10px 30px;
    border-radius: 12px;
    font-size: 12px;
    cursor: pointer;
    outline: none;
    color: white;
    background-color: transparent;
`
    
const Overlay = styled.div`
    background-color: transparent;
    position: fixed;
    left: 0;
    right:0;
    bottom:0;
    top:0;
    display: flex;
    justify-content: center;
    align-items: center;
`

const OverlayInner = styled.div`
    background-color: white;
    color: initial;
    font-size: 32px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    @media(max-width: 375px) {
        padding: 0;
        border-radius: 0;
        width: 100%;
        height: 100vh;
    }
`
    
const OverlayHeader = styled.div`
    display: flex;
    justify-content: space-between;

    text-align: left;
    padding: 30px 30px 0px 30px;
    fontWeight: 700;
    @media(max-width: 375px) {
        flex: 1;
        justify-content: center;
        align-items: center;
    }
`
const OverlayBody = styled.div`
    padding: 50px;
    @media(max-width: 375px) {
        padding:25px;
        flex: 1;
    }
`

const CloseButton = styled.div`
    cursor: pointer;
    img {
        width: 20px;
        height: 20px;
        @media(max-width: 375px) {
            width: 30px;
            height: 30px;
        }
    }
    @media (max-width: 375px) {
        position: absolute;
        bottom: 50px;
        text-align: center;
        right: 45%;
    }
`
const ExtraSpace = styled.div`
    display: none;
    flex:1;
    @media(max-width: 375px) {
        display: block;
    }
`

function Rules() {
    return <BottomHang>
        <Link to ="/begin/rules">
            <BottomHangInner>
                RULES
            </BottomHangInner>
        </Link>
        <Switch>
            <Route path ="/begin/rules">
                <Overlay>
                    <OverlayInner>
                        <OverlayHeader>
                            <div>RULES</div>
                            <Link to ="/begin">
                                <CloseButton>
                                    <img src={Close}/>
                                </CloseButton>
                            </Link>
                        </OverlayHeader>
                        <OverlayBody>
                            <img src = {GameRules} alt = "game rules"/>
                        </OverlayBody>
                        <ExtraSpace />
                    </OverlayInner>
                </Overlay>
            </Route>
        </Switch>
    </BottomHang>    
}

export default Rules;