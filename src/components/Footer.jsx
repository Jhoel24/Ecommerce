import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Container = styled.div`
    display: flex;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1``

const Desc = styled.p`
    margin: 20px 0px;
`

const SocialContainer = styled.div`
    display: flex;
    gap: 0.3rem;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        cursor: pointer;
    }
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    font-weight: 200;
    text-transform: uppercase;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    font-weight: 400;
`

const Payment = styled.img`
    width: 50%;
`


const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>REDUXSTORE</Logo>    
                <Desc>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words wich don't look even slightly believable</Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999" >
                        <FacebookIcon />
                    </SocialIcon>
                    <SocialIcon color="E4405F" >
                        <InstagramIcon />
                    </SocialIcon>
                    <SocialIcon color="E63458" >
                        <YouTubeIcon />
                    </SocialIcon>
                    <SocialIcon color="55ACEE" >
                        <TwitterIcon />
                    </SocialIcon>
                    <SocialIcon color="E60023" >
                        <PinterestIcon />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My account</ListItem>
                    <ListItem>Order tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <FmdGoodIcon style={{ marginRight: '10px' }} />
                    622 Dixie Path, South Tobinchester 98337
                </ContactItem>
                <ContactItem>
                    <PhoneIcon style={{ marginRight: '10px' }}/>
                    +1 234 56 78
                </ContactItem>
                <ContactItem>
                    <MailOutlineIcon style={{ marginRight: '10px' }} />
                    contact@reduxstore.dev
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
}

export default Footer