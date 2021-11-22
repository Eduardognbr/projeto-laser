import React from 'react'
import { Container } from 'react-bootstrap'
import { Route, Switch } from 'react-router'
import Clientes from './pages/clientes/Clientes'
import ClientesForm from './pages/clientes/ClientesForm';
import FuncionariosForm from './pages/funcionarios/FuncionariosForm';
import Inicio from './pages/inicio/Inicio';
import LocacaoForm from './pages/locacao/LocacaoForm';
import MaquinasForm from './pages/maquinas/MaquinasForm';
import VendasForm from './pages/vendas/VendasForm';


const Rotas = () => {
    return (
        <Container className="mt-3">
            <Switch>
                <Container className="mt-3">
                    <Route exact path="/inicio" component={Inicio} />
                    <Route exact path="/maquinas" component={MaquinasForm} />


                    <Route exact path="/vendas" component={VendasForm} />



                    <Route exact path="/locacao" component={LocacaoForm} />



                    <Route exact path="/clientes" component={Clientes} />
                    <Route exact path="/clientes/create" component={ClientesForm} />



                    <Route exact path="/funcionarios" component={FuncionariosForm} />

                </Container>
            </Switch>
        </Container>
    )
}

export default Rotas
