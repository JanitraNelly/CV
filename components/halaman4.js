import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import { Card, Container, Row, Col, Image } from "react-bootstrap"

function Project() {
    const [data, setData] = useState([])
    useEffect(()=> {
        axios.get('http://localhost:3001/users')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])
    return(
        <div>
            <Container>
            <div className='text-white text-center' id='project'>
                    <h1>Project Saya</h1>
                </div>
                <Row>
            <Col >
            <Table striped bordered hover className='table'>
                <head>
                    <tr>
                        <th>tahun</th>
                        <th>proyek</th>
                    </tr>
                </head>
                <body>
                    {data.map((d, i)=>{
                        return <tr key={i}>
                            <td>{d.tahun}</td>
                            <td>{d.proyek}</td>
                        </tr>
                    })}
                </body>
            </Table>
            </Col>
            </Row>
            </Container>
        </div>
    )
}

export default Project