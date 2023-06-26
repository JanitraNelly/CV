import { Navbar, Container, Nav } from "react-bootstrap"

const NavigationBar = () => {
    return(
        //href="/" artinya ketika diklik akan direfresh
    <div>
        <Navbar variant="dark">
            <Container>
            <Navbar.Brand href="/">JANITRAFILMS</Navbar.Brand>
                <Nav>
                    <Nav.Link href="#trending">TRENDING</Nav.Link>
                    <Nav.Link href="#superhero">SUPERHERO</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </div>
    )
}

export default NavigationBar