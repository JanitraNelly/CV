import { Navbar, Container, Nav } from "react-bootstrap"

const Navi = () => {
    return(
        //href="/" artinya ketika diklik akan direfresh
    <div className="navbar">
        <Navbar variant="dark">
            <Container>
            <Navbar.Brand href="/">Curriculum Vitae</Navbar.Brand>
                <Nav>
                    <Nav.Link href="#profile">Profile</Nav.Link>
                    <Nav.Link href="#pendidikan">Pendidikan</Nav.Link>
                    <Nav.Link href="#skill">Skill</Nav.Link>
                    <Nav.Link href="#project">Project</Nav.Link>
                    <Nav.Link href="#sertifikat">Sertifikat</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </div>
    )
}

export default Navi