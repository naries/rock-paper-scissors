import { Component, createRef } from 'react'
import triangle from '../images/bg-triangle.svg'
import paper from '../images/icon-paper.svg'
import rock from '../images/icon-rock.svg'
import scissors from '../images/icon-scissors.svg'
import { Area, BackDrop, Container, Image, InnerPallete, PlayIcon, RoundPallete, ShadowMain, ExtraSpace, MiddleCoat } from '../components-styles'
import { Redirect, Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'
import PickSection from './PickSection'
import { generateRPS } from '../engine/main'

export default class playArea extends Component {
    constructor(props) {
        super(props)
        this.state = {
            generated: generateRPS()
        }

    }

    _generatedRPS = () => {
        this.setState({generated: generateRPS()})
    }
  render() {
    return (<>
      <MiddleCoat>

          <Area>
        <Switch>
            <Route path = '/begin'>
            <>
                <Image src={triangle} alt="triangle linker" />
                <Link to ="/picked/paper/">
                    <Container topLeft onClick={this._generatedRPS}>
                        <ShadowMain paper small/>                    
                        <RoundPallete topLeft paper>
                            <BackDrop small/>
                            <InnerPallete clickable>
                                <PlayIcon src ={paper} alt="paper" />
                            </InnerPallete>
                        </RoundPallete>
                    </Container>
                </Link>
                <Link to ="/picked/scissors">
                <Container topRight onClick={this._generatedRPS}>
                    <ShadowMain scissors small/>
                    <RoundPallete  scissors>
                        <BackDrop small/>
                        <InnerPallete clickable>
                            <PlayIcon src ={scissors} alt="scissors"/>
                        </InnerPallete>
                    </RoundPallete>
                </Container>
                </Link>
                <Link to ="/picked/rock">
                <Container bottom onClick={this._generatedRPS}>
                    <ShadowMain rock small/>
                    <RoundPallete bottom rock>
                        <BackDrop small/>
                        <InnerPallete clickable>
                            <PlayIcon src ={rock} alt="rock"/>
                        </InnerPallete>
                    </RoundPallete>
                </Container>
                </Link>
                
            </>
            </Route>
            <Route path = '/picked/:which'>
                <PickSection updateScore={this.props._updateScore} generated = {this.state.generated}/>
            </Route>
            <Route path="/">
                <Redirect to="/begin" />    
            </Route>
        </Switch>
      </Area>
      </MiddleCoat>
    <ExtraSpace />
    </>
    );
  }
}