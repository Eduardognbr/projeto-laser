import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { FaEdit, FaPlus, FaRegTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Box from '../../components/Box'
import ClienteService from '../../services/negocios/ClienteService'

const Clientes = () => {

    const [clientes, setClientes] = useState([])

    useEffect(() => {
        const clientes = ClienteService.getAll()
        setClientes(clientes)
    }, []);

    function excluir(i) {
        if (window.confirm('Deseja deletar o cliente?')) {
            ClienteService.delete(i)
            setClientes(ClienteService.getAll())
        }
    };

    return (
        <>
        <Box title="Clientes">
            <Link to="/clientes/create" className="btn btn-primary mb-3"><FaPlus /> Novo</Link>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>CNPJ</th>
                            <th>Telefone</th>
                            <th>E-mail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.map((cliente, i) => (
                            <tr key={i}>
                                <td>
                                    <Link to={"/clientes/" + i}>
                                        <FaEdit title="Editar" />
                                    </Link>
                                    {' '}
                                    <FaRegTrashAlt className="text-danger" title="Excluir" onClick={() => excluir(i)} />
                                </td>
                                <td>{i}</td>
                                <td>{cliente.nome}</td>
                                <td>{cliente.cnpj}</td>
                                <td>{cliente.telefone}</td>
                                <td>{cliente.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

            </Box>
        </>
    )
}

export default Clientes