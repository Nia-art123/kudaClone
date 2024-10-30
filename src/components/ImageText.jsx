import styled from 'styled-components'
const ImageText = (props)=>{
    return(
        <>
        <Container>
        <Divider>
                <ImageLeft>
                    <img src={props.image} alt="" />
                </ImageLeft>
                <Imagetext>
                    <h1>{props.text}</h1>
                    <p>{props.para}</p>
                </Imagetext>
            </Divider>
        </Container>
        </>
    )
}
export default ImageText
const Container = styled.div`
 max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    min-height: calc(100vh - 70px);
    margin-block: -5em;
    display: flex;
    align-items: center;
       justify-content: space-between;
    @media screen and (max-width:800px) {
        margin: 0;
    }
`

const Divider = styled.div`
width: 90%;
display:flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
margin-left: auto;
margin-right: auto;
gap: 5em;
@media screen and (max-width:800px) {
    width: 90%;
    flex-direction: column-reverse;
    /* background-color: red; */

}
`
const Imagetext = styled.div`
max-width:500px;
display: flex;
flex-direction: column;
@media screen and (max-width:800px){
    max-width: 90%;
    /* border: 2px solid; */
    align-items:center;
    /* text-align: center; */
    font-size: 20px;
    margin-right: auto;
    margin: 0 30px;

}
h1{
font-size: 33px;
font-weight: 800;
line-height: normal;
line-break: auto;
color:#40196D;
margin-bottom: -5px;
@media screen and (max-width:800px) {
    font-size: 27px;

}
}
p{
    font-size: 18px;
}

`

const ImageLeft = styled.div`
img{
    width: 500px;
}
@media screen and (max-width:800px) {
    img{
        width: 100%;
        /* border: 2px solid; */
        margin-bottom: 100px;
        margin-top: -50px;
    }
}
`