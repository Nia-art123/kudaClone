import styled from 'styled-components'
import HeroImage from '../../assets/hero.png'
import { IoLogoApple, IoLogoGooglePlaystore } from 'react-icons/io5'



const Hero = ()=>{
    return(
        <Container>
            <Wrapper>
                <TextBox>
                    <h1>The Money App for Africans.</h1>
                    <p>Make free transfers, enjoy cashless payment options and earn interest on your savings with Kuda.</p>
                <Buttons>
                    <button>{IoLogoApple} <span>App Store</span></button>
                    <button>{IoLogoGooglePlaystore} <span>Play Store</span></button>
                </Buttons>
                </TextBox>

                <ImageBox>
                    <img src={HeroImage} alt="" />
                </ImageBox>
            </Wrapper>
        </Container>
    )
}
export default Hero

const Container = styled.div`
    /* background-color: yellow; */
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    min-height: calc(100vh - 70px);
    margin-block: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 800px) {
        margin-block-start: 2.5em;
    }
`
const Wrapper = styled.div`
    width: 85%;
    /* background-color: pink; */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media screen and (max-width:800px) {
        width: 90%;
    }
`
const TextBox = styled.div`
    max-width: 500px;
    /* background-color: aqua; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width: 800px) {
        max-width: 100%;
        align-items: center;
        /* text-align: center; */
        font-size: 20px;
    }
    h1{
        color: #40196D;
        font-size: 45px;
        font-weight: 800;
        line-height: normal;
        @media screen and (max-width: 800px) {
            font-size: 30px;
        }
    }
`
const ImageBox = styled.div`
img{
    @media screen and (max-width:800px) {
        width: 100%;
    }
}
`
const Buttons = styled.div``