import styled from "styled-components"
import creditCArd from '../../assets/credit-card.png'
import moon from '../../assets/moon.png'
import utils from '../../assets/utils.png'
import transfer from '../../assets/transfer.png'
import save from '../../assets/save.png'

const Info = (props)=>{
    const cardArray = [
        {
            id: 1,
            // image:<BsFillCreditCardFill />,
            image:`${creditCArd}` ,
            description: "Order a Kuda card on the app with pickup and delivery options."
        },
        {
            id: 2,
            // image:<BsFillCreditCardFill />,
            image: `${moon}`,
            description: "Enjoy cashless payment options online and offline.."
        },
        {
            id: 3,
            // image:<BsFillCreditCardFill />,
            image: `${utils}`,
            description: "Pay your essential bills and buy gift cards easily."
        },
        {
            id: 4,
            // image:<BsFillCreditCardFill />,
            image: `${transfer}`,
            description: "Get 25 free transfers to Nigerian banks every month."
        },
        {
            id: 5,
            // image:<BsFillCreditCardFill />,
            image: `${save}`,
            description: "Save money automatically any time you spend.."
        }
    ]

    return(
        <Container>
            {cardArray.map((infoo)=>(
                <Card key={infoo.id}>
                    <img className="image-profile" src={infoo.image} alt="" />
                    <p>{infoo.description}</p>
                </Card>
            ))}
        </Container>
    )
}
export default Info
const Container = styled.div`
    max-width: 1280px;
    min-height: 80%;
    margin-block-end: 5em;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    /* background-color: red; */
    align-items: center;
    gap: 20px;
    margin-right: auto;
    margin-left: auto;

    @media screen and (max-width:800px) {
        margin: 0;
    }

`

const Card = styled.div`
    /* height: 120px; */
    width: 300px;
    padding: 20px;
    /* text-align: center; */
    /* background-color: darkcyan; */
    color: #40196D;
    display: block;
    font-size: 14px;
    font-weight: 800;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 10px;
     .image-profile{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        outline: none;
        border: none;
        background-color:lightgray;
        height: 40px;
        width: 40px;
        border-radius: 50%  ;
    }

    @media screen and (max-width:800px) {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 20px;
            font-weight: 800;
            width: 90%;
    }
    
`