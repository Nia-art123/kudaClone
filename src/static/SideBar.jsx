import styled from "styled-components"
import {Link} from 'react-router-dom'
import Business from "../pages/Business"

const SideBar = ({toggle, setToggle})=>{
    const test = ()=>{
        setToggle(false)
    }
    return(
        <>
        <Container>
        <Link to="/" onClick={test}>
        <nav>Personal</nav>
        </Link>
        <Link to="/business" onClick={test}>
        <nav>Business</nav>
        </Link>
        <Link to="/companies" onClick={test}>
        <nav>Company</nav>
        </Link>
        </Container>
        
        </>
    )
}
export default SideBar

const Container = styled.div`
    min-height: calc(100vh);
    /* background-color: rebeccapurple; */
    color: #fff;

`