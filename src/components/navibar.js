import React from 'react'

import NavibarItem from './navibaritem'

import { AuthConsumer } from '../main/provedorAutenticacao'


function Navibar(props){
    return(
        <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary" >
      <div className="container">
        <a href="#/home" className="navbar-brand">Minhas Finanças</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
            <NavibarItem render={props.isUsuarioAutenticado} href="#/home" label="Página Inicial"/>

            <NavibarItem render={props.isUsuarioAutenticado} href="#/consulta-lancamentos" label="Lançamentos"/>

            <NavibarItem render={props.isUsuarioAutenticado} href="#/cadastro-usuario" label="Cadastrar"/>

            <NavibarItem render={props.isUsuarioAutenticado} onClick={props.deslogar} href="#/login" label="Sair"/>
            
        </ul>

        </div>
      </div>
    </div>
    )

}

export default () => (
  <AuthConsumer>
    {(context) => (
      <Navibar isUsuarioAutenticado={context.isAutenticado} deslogar={context.encerrarSessao}/>
    )}
  </AuthConsumer>
)