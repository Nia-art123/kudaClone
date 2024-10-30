import React from 'react'
import styled from 'styled-components'
import valar from '../assets/valar.png'
import visa from '../assets/visa.png'
import holdings from '../assets/holdings.png'
import target from '../assets/target.png'
import capital from '../assets/capital.png'

const Partners = () => {
  return (
    <>
        <Container>
            <img src={valar} alt="" />
            <img src={capital} alt="" />
            <img src={holdings} alt="" />
            <img src={target} alt="" />
            <img src={visa} alt="" />
        </Container>
    </>
  )
}

export default Partners

const Container = styled.div`
min-width: 400px;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
gap: 30px;
margin:0 auto;
img{
    width: 140px;
}
`