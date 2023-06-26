//import { Navbar, Container, Nav } from "react-bootstrap"
import { Card, Container, Row, Col, Image } from "react-bootstrap"
import programingLanguageImage from "../assets/programminglanguage.jpg"
import itImage from "../assets/it.jpeg"
import languageImage from "../assets/language.jpg"

const Kemampuan = () => {
    return(
            <div id="skill">
                <Container>
                    <div className="text-center">
                        <h1>Kemampuan</h1>
                    </div>
                <Row>
                    <Col md={4}>
                    <Card className="bg-dark">
                        <Image src={programingLanguageImage} className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 n-1 text-white">
                                <Card.Title className="text-center">Bahasa Pemrograman</Card.Title>
                                <Card.Text className="text-left">C</Card.Text>
                                <Card.Text className="text-left">C++</Card.Text>
                                <Card.Text className="text-left">C#</Card.Text>
                                <Card.Text className="text-left">Python</Card.Text>
                                <Card.Text className="text-left">JavaScript</Card.Text>
                                </div>
                            </div>
                    </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark movieImage">
                        <Image src={itImage} className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 n-1 text-white">
                                <Card.Title className="text-center">IT</Card.Title>
                                <Card.Text className="text-left">Front End</Card.Text>
                                <Card.Text className="text-left">Data Science</Card.Text>
                                <Card.Text className="text-left">Computer Network</Card.Text>
                                <Card.Text className="text-left">Game</Card.Text>
                                <Card.Text className="text-left">Mobile Aplication Developer</Card.Text>
                                </div>
                            </div>
                    </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark movieImage">
                        <Image src={languageImage} className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 n-1 text-white">
                                <Card.Title className="text-center">Bahasa</Card.Title>
                                <Card.Text className="text-left">Indonesia</Card.Text>
                                <Card.Text className="text-left">English</Card.Text>
                                </div>
                            </div>
                    </Card>
                    </Col>
                </Row>
                </Container>
            </div>
    )
}

export default Kemampuan
