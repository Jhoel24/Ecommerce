import styled from "styled-components"
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { mobile } from "../responsive";

const Container = styled.div`
    height: 60px;
    margin-bottom: 3rem;
    ${mobile({ height: "50px", marginBottom: '5rem' })}
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({ padding: "10px 0px", flexDirection: 'column' })}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const Language = styled.span`
    font-size: 14px;
    &:hover {
        cursor: pointer;
    }
    ${mobile({ display: "none" })}
    
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
    border: none;
    outline: none;
    ${mobile({ width: "200px" })}
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`

const Logo = styled.h1`
    font-weight: '900';
    ${mobile({ fontSize: "24px" })}
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1.5rem;
    ${mobile({ justifyContent: "center", gap: '1rem', flex: 2 })}
`

const MenuItem = styled.div`
    font-size: 14px;
    ${mobile({ fontSize: "12px" })}
    &:hover {
        cursor: pointer
    }
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <SearchIcon className="cursor" style={{ color: 'gray', fontSize: 16 }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>REDUXSTORE</Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="success">
                            <ShoppingCartOutlinedIcon color="action" />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar