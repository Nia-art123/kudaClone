import styled from 'styled-components'
import freedom from '../assets/freedom.png'

const FeeTable = () => {
  return (
    <>
        <Container>
            <img src={freedom} alt="" />
        </Container>
    </>
  )
}

export default FeeTable
const Container = styled.div`
text-align: center;
img{
    @media screen and (max-width:800px) {
    max-width: 400px;
}
}

`