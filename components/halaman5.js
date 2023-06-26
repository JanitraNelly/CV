//import { Navbar, Container, Nav } from "react-bootstrap"
import { Card, Container, Row, Col, Image } from "react-bootstrap"
import ccnaImage from "../assets/ccna.jpeg"
import englishCertiImage from "../assets/englishcerti.png"

const Sertifikat = () => {
    return(
            <div id="sertifikat">
                <Container>
                    <div className="text-white text-center">
                    <h1>Sertifikat</h1>
                    </div>
                    <br />
                <Row>
                    <Col>
                    <Card className="bg-dark">
                        <Image src={ccnaImage} className="sertifikatImages"/>
                            <div className="bg-dark">
                                <div className="p-2 n-1 text-white">
                                    <Card.Title className="text-center">CCNA</Card.Title>
                                </div>
                            </div>
                    </Card>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                    <Card className="bg-dark">
                        <Image src={englishCertiImage} className="sertifikatImages"/>
                            <div className="bg-dark">
                                <div className="p-2 n-1 text-white">
                                    <Card.Title className="text-center">English First</Card.Title>
                                </div>
                            </div>
                    </Card>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                    <Card className="contact">
                            <div>
                                <div className="p-2 n-1">
                                    <Card.Title className="text-center">Contact</Card.Title>
                                    <Card.Text className="text-center">WA: 0895805190557</Card.Text>
                                    <Card.Text className="text-center">IG: @janitranelly06</Card.Text>
                                </div>
                            </div>
                    </Card>
                    </Col>
                </Row>
                </Container>
            </div>
    )
}

export default Sertifikat
