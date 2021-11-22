import React, { useEffect } from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { FaArrowLeft, FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { mask, unMask } from 'remask';
import Box from '../../components/Box';
import apiCNPJ from '../../services/apiCNPJ';
import ClienteService from '../../services/negocios/ClienteService';
import validador from '../../validators/ClienteValidator';

const ClientesForm = (props) => {

    const {register, handleSubmit, setValue, formState: {errors}} = useForm()

    useEffect(() => {
        const id = props.match.params.id
        if (id) {
            const cliente = ClienteService.get(id)
            for (let campo in cliente) {
                setValue(campo, cliente[campo])
            }
        }
    }, [props, setValue]);

    function enviarDados(dados) {
        const id = props.match.params.id
        id ? ClienteService.update(dados, id) : ClienteService.create(dados) 
        props.history.push('/clientes')
    }

    function handleChange(event) {
        const name = event.target.name
        const mascara = event.target.getAttribute('mask')

        let valor = unMask(event.target.value)
        valor = mask(valor, mascara)

        setValue(name, valor)
    }
    
    function handleCNPJ(event) {
        const valor = unMask(event.target.value)

        apiCNPJ.get(`${valor}/json/`).then(resultado => {
            const empresa = resultado.data
            
            setValue('fantasia', empresa.fantasia)
            setValue('cnpj', empresa.cnpj)
            setValue('nome', empresa.nome)
            setValue('status', empresa.status)
            setValue('cep', empresa.cep)
            setValue('logradouro', empresa.logradouro)
            setValue('numero', empresa.numero)
            setValue('uf', empresa.uf)
            setValue('telefone', empresa.telefone)
            setValue('email', empresa.email)

        })
    }  
    
    return (
        <>
            <Box title="Clientes">
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="nome">
                        <Form.Label column sm={2}>Razão Social: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("nome", validador.nome)} />
                            {errors.nome && <span className="text-danger">{errors.nome.message}</span>}
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="cnpj">
                        <Form.Label column sm={2}>CNPJ: </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type="text"
                                {...register("cnpj")}
                                mask="999.999.999/9999-99"
                                onChange={handleChange}
                                onBlur={handleCNPJ}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="data">
                        <Form.Label column sm={2}>Data: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("data")} mask="99/99/9999" onChange={handleChange} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="fantasia">
                        <Form.Label column sm={2}>Nome Fantasia: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("fantasia")} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="status">
                        <Form.Label column sm={2}>Status: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("status")} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="cep">
                        <Form.Label column sm={2}>CEP: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("cep")} mask="99.999-999" onChange={handleChange} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="logradouro">
                        <Form.Label column sm={2}>Endereço: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("logradouro")} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="numero">
                        <Form.Label column sm={2}>Número: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("numero")} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="uf">
                        <Form.Label column sm={2}>UF: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("uf")} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="telefone">
                        <Form.Label column sm={2}>Telefone: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("telefone")} mask="(99) 99999-9999 / (99) 9999-9999" onChange={handleChange} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="email">
                        <Form.Label column sm={2}>E-mail: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("email")} />
                        </Col>
                    </Form.Group>

                    <div className="text-center">
                        <Button variant="success" onClick={handleSubmit(enviarDados)}><FaCheck /> Salvar</Button>
                        <Link className="btn btn-danger" to="/clientes"><FaArrowLeft /> Voltar</Link>
                    </div>
                
                </Form>

            </Box>




        </>
    )
}

export default ClientesForm
