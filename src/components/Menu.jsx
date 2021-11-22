import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="Inicio" >Máquinas Laser</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/maquinas">Aparelhos</Link>
                        <Link className="nav-link" to="/vendas">Vendas</Link>
                        <Link className="nav-link" to="/locacao">Locação</Link>
                        <Link className="nav-link" to="/clientes">Clientes</Link>
                        <Link className="nav-link" to="/funcionarios">Funcionários</Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Menu
