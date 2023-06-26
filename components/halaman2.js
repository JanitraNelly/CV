/*
import { Card, Container, Row, Col, Image } from "react-bootstrap"
import formalEducationImage from "../assets/formal.jpg"
import inFormalEducationImage from "../assets/informal.jpg"

const Pendidikan = () => {
    <div>
        <Container>
        <br />
            <h1 className="text-dark">PENDIDIKAN</h1>
        <br />
        <Row>
        <Col md={6} className="movieWrapper" id="pendidikan">
                    <Card className="bg-dark movieImage">
                        <Image src={formalEducationImage} alt="Dune Movies" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 n-1 text-white">
                                    <Card.Title className="text-center">Ini adalah pendidikan</Card.Title>
                                <Card.Text className="text-dark"></Card.Text>
                            <Card.Text className="text-left">Janitra Nelly</Card.Text>
                                </div>
                            </div>
                    </Card>
        </Col>
        <Col md={6} className="movieWrapper" id="pendidikan">
                    <Card className="bg-dark movieImage">
                        <Image src={inFormalEducationImage} alt="Dune Movies" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 n-1 text-white">
                                    <Card.Title className="text-center">Ini adalah pendidikan</Card.Title>
                                <Card.Text className="text-dark"></Card.Text>
                            <Card.Text className="text-left">Janitra Nelly</Card.Text>
                                </div>
                            </div>
                    </Card>
        </Col>
        </Row>
        </Container>
    </div>
}

export default Pendidikan
*/
//import { Navbar, Container, Nav } from "react-bootstrap"
import { Card, Container, Row, Col, Image } from "react-bootstrap"
import formalEducationImage from "../assets/formalEducation.png"
import informalEducationImage from "../assets/informal.jpg"

const Profile = () => {
    return(
            <div id="pendidikan">
                <Container>
                    <div className="text-center">
                    <h1>Pendidikan</h1>
                    </div>
                <Row>
                    <Col md={6}>
                    <Card className="bg-dark">
                        <Image src={formalEducationImage} alt="Dune Movies" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 n-1 text-white">
                                <Card.Title className="text-center">Formal</Card.Title>
                                <Card.Text className="text-left">2006-2008: TK Providensia</Card.Text>
                                <Card.Text className="text-left">2010-2014: SD Providensia</Card.Text>
                                <Card.Text className="text-left">2014-2017: SMP Providensia</Card.Text>
                                <Card.Text className="text-left">2017-2020: SMA Dian Harapan</Card.Text>
                                <Card.Text className="text-left">2020-2024: Universitas Kabat</Card.Text>
                                </div>
                            </div>
                    </Card>
                    </Col>
                    <Col md={6} className="movieWrapper">
                    <Card className="bg-dark movieImage">
                        <Image src={informalEducationImage} alt="Dune Movies" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 n-1 text-white">
                                <Card.Title className="text-center">Informal</Card.Title>
                                <Card.Text className="text-left">2011-2015: Piano</Card.Text>
                                <Card.Text className="text-left">2018-2019: WE English Course</Card.Text>
                                <Card.Text className="text-left">2019-2020: English First</Card.Text>
                                <Card.Text className="text-left">2023: Bootcamp</Card.Text>
                                </div>
                            </div>
                    </Card>
                    </Col>
                </Row>
                </Container>
            </div>
    )
}

export default Profile
