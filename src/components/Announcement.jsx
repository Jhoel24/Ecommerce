import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Text = styled.p`
    margin: 0;
    font-weight: 200;
    /* text-transform: uppercase; */
    font-size: 14px;
`

const Announcement = () => {
    return (
        <Container>
            <Text>Super deal! Free shipping on orders over $50</Text>
        </Container>
    )
}

export default Announcement