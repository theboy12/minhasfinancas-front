import React from 'react'

import Card from '../components/card.js'

import FormGroup from '../components/form-group.js'

import { withRouter } from 'react-router-dom'

import UsuarioService from '../app/service/usuarioservice'

import { mensagemErro, mensagemSucesso  } from '../components/toastr'

class CadastroUser extends React.Component{

    state = {
        nome: '',
        email: '',
        senha: '',
        senhaRepeticao: ''
    }

    constructor(){
        super()
        this.service = new UsuarioService()
    }
    
    cadastrar = () =>{

        const {nome, email, senha, senhaRepeticao} = this.state
        const usuario = {nome, email, senha, senhaRepeticao}

        try{
            this.service.validar(usuario)
        }catch(erro){
            const msgs = erro.mensagens;
            msgs.forEach(msg => mensagemErro(msg))
            return false
        }

        this.service.salvar(usuario)
            .then(response => {
                mensagemSucesso('Usuário cadastrado com sucesso!')
                this.props.history.push('/login')
            }).catch(error => {
                mensagemErro(error.response.data)
            })
    }

    voltaLogin = () => {
        this.props.history.push('/login')
    }

    render(){
        return(
                <Card title= "Cadastrar">                   
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bs-component">
                            <FormGroup label="Nome: *" htmlFor="inputNome">
                                <input type="text" 
                                    id="inputNome" 
                                    className="form-control"
                                    name="nome"
                                    onChange={e => this.setState({nome: e.target.value})}/>
                            </FormGroup>
                            <FormGroup label = "Email: * " htmlFor="inputEmail">
                                <input type="email" 
                                    id ="inputEmail" 
                                    className="form-control"
                                    name="email" 
                                    onChange={e => this.setState({email: e.target.value})}/>
                            </FormGroup>
                            <FormGroup label = "Senha: * " htmlFor="inputSenha">
                                <input type="password" 
                                    id ="inputSenha"
                                    className="form-control"
                                    name="senha" 
                                    onChange={e => this.setState({senha: e.target.value})}/>
                            </FormGroup>
                            <FormGroup label = "Digite a Senha Novamente: * " htmlFor="inputSenhaRep">
                                <input type="password" 
                                    id ="inputSenhaRep"
                                    className="form-control"
                                    name="senhaRep" 
                                    onChange={e => this.setState({senhaRepeticao: e.target.value})}/>
                            </FormGroup>
                            <button onClick={this.cadastrar} 
                                    type="button" 
                                    className="btn btn-success">
                                    <i className="pi pi-save"></i> 
                                        Salvar
                            </button>

                            <button onClick={this.voltaLogin} 
                                    type="button" 
                                    className="btn btn-danger">
                                    <i className="pi pi-times"></i>
                                        Cancelar
                            </button>
                        </div>
                    </div>
                </div>
                </Card>
        )
    }
}

export default withRouter( CadastroUser )