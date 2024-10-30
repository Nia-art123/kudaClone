import styled from 'styled-components'
import fatimah from '../assets/fatimah.jpg'

const Testimonial = ({text, profileImage, profileName})=>{
    return(
        <>
        <Container>
            <Wrapper>
            <Card>
                <p className='text'>Well done to the guys at @kudabank had a dispensing error on Friday night and reached out to them on Sunday... 48 working hours after and my money is back in my account... Special shout out to Maxwell and Norah</p>
                <Profile>
                <img src={fatimah} alt="" />
                <p>Mu'azu Muhammad Kudu</p>
                </Profile>
            </Card>
            <Card>
                <p className='text'>Well done to the guys at @kudabank had a dispensing error on Friday night and reached out to them on Sunday... 48 working hours after and my money is back in my account... Special shout out to Maxwell and Norah</p>
                <Profile>
                <img src={fatimah} alt="" />
                <p>Mu'azu Muhammad Kudu</p>
                </Profile>
            </Card>
            <Card>
                <p className='text'>Well done to the guys at @kudabank had a dispensing error on Friday night and reached out to them on Sunday... 48 working hours after and my money is back in my account... Special shout out to Maxwell and Norah</p>
                <Profile>
                <img src={fatimah} alt="" />
                <p>Mu'azu Muhammad Kudu</p>
                </Profile>
            </Card>
            <Card>
                <p className='text'>Well done to the guys at @kudabank had a dispensing error on Friday night and reached out to them on Sunday... 48 working hours after and my money is back in my account... Special shout out to Maxwell and Norah</p>
                <Profile>
                <img src={fatimah} alt="" />
                <p>Mu'azu Muhammad Kudu</p>
                </Profile>
            </Card>
            <Card>
                <p className='text'>Well done to the guys at @kudabank had a dispensing error on Friday night and reached out to them on Sunday... 48 working hours after and my money is back in my account... Special shout out to Maxwell and Norah</p>
                <Profile>
                <img src={fatimah} alt="" />
                <p>Mu'azu Muhammad Kudu</p>
                </Profile>
            </Card>
            <Card>
                <p className='text'>Just joined the best Digital Bank in Nigeria I have no complaints whatsoever since i started using Kuda</p>
                <Profile>
                <img src={profileImage } alt="" />
                <p>{profileName}</p>
                </Profile>
            </Card>
            <Card>
                <p className='text'>Never thought an app would stylish become my everyday way to bank and have access to physical cash.
                @kudabank is sleek</p>
                <Profile>
                <img src={profileImage } alt="" />
                <p>{profileName}</p>
                </Profile>
            </Card>
            <Card>
                <p className='text'>This is the best banking app! I'm enjoying seamless banking plus the free transfers to other banks is a thing of joy. This is what I call freedom. I've made kuda my main bank account and I’m gonna refer all my friends</p>
                <Profile>
                <img src={profileImage } alt="" />
                <p>{profileName}</p>
                </Profile>
            </Card>
            <Card>
                <p className='text'>{text}</p>
                <Profile>
                <img src={profileImage } alt="" />
                <p>{profileName}</p>
                </Profile>
            </Card>
            </Wrapper>
        </Container>
        </>
    )
}
export default Testimonial

const Container = styled.div`
width: 100%; 
margin-top: 2em;
display: flex;
margin-bottom: 5em;
overflow-x: hidden;
margin-bottom: 5em;

`
const Wrapper = styled.div`
 display: flex;
    /* flex-direction: row; */
    flex-wrap: nowrap;
    animation: scroll 20s linear infinite;  

    @keyframes scroll {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-100%);
        }
    }

`
const Card = styled.div`
min-width: 300px;
    max-width: 300px;
    border: 1px solid hsl(0 0% 80%);
    padding: 10px 15px;
    margin: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    display: flex;
    flex-direction: column;

`
const Profile = styled.div`
display: flex;
gap: 30px;
p{
    line-height: 5px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
    /* color: floralwhite; */
    /* background-color: red; */
}
img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
`