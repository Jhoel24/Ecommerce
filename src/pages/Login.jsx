import styled from "styled-components"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('../src/assets/images/register-login.jpg') center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
`
const Title = styled.h1`
    margin: 0;
    font-size: 24px;
    font-weight: 300;
    text-transform: uppercase;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
    border: 1px solid gray;
    outline: none;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    text-transform: uppercase;
    background-color: teal;
    color: white;
    margin-bottom: 10px;
    &:hover {
        cursor: pointer;
    }
`

const Link = styled.a`
    margin: 10px 0px;
    font-size: 14px;
    text-decoration: underline;
    cursor: pointer;
`

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Sign in</Title>
                <Form>
                    <Input placeholder="username" />
                    <Input placeholder="password" />
                    <Button>Login</Button>
                    <Link>Do not you remember the password?</Link>
                    <Link>Create a new account</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login