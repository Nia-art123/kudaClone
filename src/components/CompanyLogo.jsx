import styled from "styled-components"
import tec from '../assets/TEC.png'
import forum from '../assets/economic-forum.png'
import fintech from '../assets/fintech.png'
import bbc from '../assets/bbc.png'
import cnbc from '../assets/cnbc.png'
import euromoney from '../assets/euromoney.png'
const CompanyLogo = (props)=>{
    return(
        <>
        <Container>
            <img src={tec} alt="" />
            <img src={forum} alt="" />
            <img src={fintech} alt="" />
            <img src={bbc} alt="" />
            <img src={cnbc} alt="" />
            <img src={euromoney} alt="" />
        </Container>
        </>
    )
}
export default CompanyLogo
const Container = styled.div`
width: 90%;
/* height: 100px; */
display: flex;
justify-content:space-between;
/* flex-direction: row; */
flex-wrap: wrap;
/* background-color: red; */
/* padding-inline: 10px; */
margin-left: auto;
margin-right: auto;
/* overflow: auto; */
align-items: center;
@media screen and (max-width:800px) {
    margin-inline: 30px;

    img{
        width: 120px;
    }
}
`