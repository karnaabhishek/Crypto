import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

function Navbars() {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link href="/chart">Chart</Nav.Link>
                    <Nav.Link href="/table">Table</Nav.Link>
                    <Nav.Link href="/detail">Detail</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </div>
  )
}

export default Navbars