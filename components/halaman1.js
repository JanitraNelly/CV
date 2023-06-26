//import { Navbar, Container, Nav } from "react-bootstrap"
import { Card, Container, Row, Col, Image } from "react-bootstrap"
import duneImage from "../assets/foto2.jpg"

const Profile = () => {
    return(
            <div>
                <Container id="profil">
                    <h1>Profile</h1>
                <Row>
                    <Col md={6} Text>
                    <Card className="navbar">
                    <p>Halo nama saya Janitra Nelly. Saya lahir tanggal 6 januari 2003 di Manado.
                        Saya mahasiswa semester akhir yang sedang berkuliah di universitas Klabat
                        jurusan Informatika.
                        Cita-cita saya ingin bekerja atau membangun usaha di bidang IT sebagai 
                        data scientist dan game developer. Selain itu saya juga tertarik 
                        dengan Atificial Intelligence dan ingin menjadi praktisi AI.
                    </p>
                    </Card>
                    </Col>
                    <Col md={6}>
                    <Card className="bg-dark">
                        <Image src={duneImage} className="foto"/>
                            <div className="bg-dark">
                            </div>
                    </Card>
                    </Col>
                </Row>
                </Container>
            </div>
    )
}

export default Profile
