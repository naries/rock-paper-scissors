import { useParams } from 'react-router'
import paper from '../images/icon-paper.svg'
import rock from '../images/icon-rock.svg'
import scissors from '../images/icon-scissors.svg'
import {
    Container,
    BigInnerPallete,
    BigPlayIcon,
    BigRoundPallete, 
    HorizontalSpacer, 
    Text, 
    PlaceHolder, 
    OuterHolder, 
    ShadowMain, 
    BackDrop, 
    BigText, 
    MiddleUpdate, 
    Button,
    FirstShadow,
    SecondShadow,
    ThirdShadow,
    DownText,
    ExtraSpace,
    BottomUpdate
} from "../components-styles"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const PickSection = ({ updateScore, generated }) => {
    let { which } = useParams()
    const [loading, setLoading] = useState(false)
    if(!loading) {
        setTimeout(() => {
            setLoading(true)
        }, 500)
    }
    
    const [updateText, setUpdateText] = useState('')
    let text = ''

    useEffect(() => {
        if(loading){
            if(which === generated) {
                updateScore()
                text="A tie"
            } else if (which === "rock" && generated === 'paper') {
                updateScore('dec')
                text="YOU LOSE"
            } else if( which === "rock" && generated === 'scissors') {
                updateScore('inc')
                text="YOU WIN"
            } else if (which === "paper" && generated === "scissors") {
                updateScore('dec')
                text = "YOU LOSE"
            } else if (which ==="paper" && generated === "rock") {
                updateScore('inc')
                text = "YOU WIN"
            } else if (which ==="scissors" && generated === "paper") {
                updateScore('inc')
                text = "YOU WIN"
            } else if (which ==="scissors" && generated === "rock") {
                updateScore('dec')
                text= "YOU LOSE"
            }   
            
            setUpdateText(text)
        }
    }, [loading])
    
    
    return <> 
    <HorizontalSpacer extraWidth={loading ? true: false}>
        <div>
            <Text>YOU PICKED</Text>
            <div style={{position: 'relative'}}>
                {updateText === "YOU WIN" && <><FirstShadow/>
                <SecondShadow />
                <ThirdShadow /></>}
                {which === "rock" &&
                <Container>
                    <ShadowMain rock/>
                    <BigRoundPallete rock>
                        <BackDrop />
                        <BigInnerPallete>
                            <BigPlayIcon src ={rock} alt="rock" />
                        </BigInnerPallete>
                    </BigRoundPallete>
                </Container>}

                {which === "scissors" && <Container>
                    <ShadowMain scissors/>
                    <BigRoundPallete scissors>
                        <BackDrop />
                        <BigInnerPallete>
                            <BigPlayIcon src ={scissors} alt="scissors" />
                        </BigInnerPallete>
                    </BigRoundPallete>
                </Container>}

                {which === "paper" && 
                <Container>
                    <ShadowMain paper/>
                    <BigRoundPallete paper>
                        <BackDrop />
                        <BigInnerPallete>
                            <BigPlayIcon src ={paper} alt="paper" />
                        </BigInnerPallete>
                    </BigRoundPallete>
                </Container>
                }
            </div>
            <DownText>YOU PICKED</DownText>
        </div>

        {/* info section */}

        {loading && <MiddleUpdate>
            <BigText>
                {updateText}
            </BigText>
            <Link to ="/begin">
                <Button>PLAY AGAIN</Button>
            </Link>
        </MiddleUpdate>}

        {/* computer section */}
        <div>
            <Text>THE HOUSE PICKED</Text>
            {!loading && <OuterHolder>
                <PlaceHolder/>
            </OuterHolder>}
            <div>
            {loading && <div style={{position: 'relative'}}>
                {updateText === "YOU LOSE" && <><FirstShadow/>
                <SecondShadow />
                <ThirdShadow /></>}
                {generated === "rock" && <Container>
                        <ShadowMain rock/>
                        <BigRoundPallete rock>
                            <BackDrop />
                            <BigInnerPallete>
                                <BigPlayIcon src ={rock} alt="rock" />
                            </BigInnerPallete>
                        </BigRoundPallete>
                    </Container>
                }

                {generated === "scissors" && <Container>
                    <ShadowMain scissors/>
                    <BigRoundPallete scissors>
                        <BackDrop />
                        <BigInnerPallete>
                            <BigPlayIcon src ={scissors} alt="scissors" />
                        </BigInnerPallete>
                    </BigRoundPallete>
                </Container>
                }
                
                {generated === "paper" && 
                <Container>
                    <ShadowMain paper/>
                    <BigRoundPallete paper>
                        <BackDrop />
                        <BigInnerPallete>
                            <BigPlayIcon src ={paper} alt="paper" />
                        </BigInnerPallete>
                    </BigRoundPallete>
                </Container>
                }
            </div>}
        </div>
        <DownText>THE HOUSE PICKED</DownText>
        </div>

    </HorizontalSpacer>
    {loading && <BottomUpdate>
            <BigText>
                {updateText}
            </BigText>
            <Link to ="/begin">
                <Button>PLAY AGAIN</Button>
            </Link>
    </BottomUpdate>}
    <ExtraSpace/>
    </>
};

export default PickSection;