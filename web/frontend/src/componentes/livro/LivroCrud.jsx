import React, {Component} from 'react'
import axios from 'axios'
import Main from '../template/Main'

const baseUrl = 'http://localhost:3001/livro'

const initialState = {
    livros:{nome: '', autor:''},
    list:[]
}





const headerProps = {
    icon: 'Livros',
    title: 'Livros',
    subtitle: 'Cadastro de Livros: Incluir, Listar, Alterar e Excluir!'
}

export default class LivroCrud extends Component{
    state = {...initialState}

    clear(){
        this.setState({livros: initialState.livros})
    }

    getUpdateList(livros){
        const list = this.state.list.filter(u => u.id !== livros.id)
        list.unshift(livros)
        return list
    }

    updateField(event){
        const livros = {...this.state.livros}
        livros[event.target.nome] = event.target.value
        this.setState({livros})
    }


    renderForm(){
        return(
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control"
                                name="nome"
                                value={this.state.livros.nome}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o nome do livro..."/>

                        </div>

                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Autor</label>
                            <input type="text" className="form-control"
                                name="autor"
                                value={this.state.livros.autor}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o nome do autor..."/>

                        </div>

                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-12 d-flex justify-content-end">
                            <button className="btn btn-primary"
                                onClick={e => this.save(e)}>
                                Salvar
                            </button>

                            <button className="btn btn-secundary ml-2"
                                onClick={e => this.clear(e)}>
                                Cancelar
                            </button>

                        </div>
                    
                    </div> 
                </div>

            </div>
        )
    }


    save(){
        const livros = this.state.livros
        const method = livros.id ? 'put' : 'post'
        const url = livros.id ? `${baseUrl}/${livros.id}` : baseUrl
        axios[method](url, livros)
        .then(resp =>{
            const list = this.getUpdateList(resp.data)
            this.setState({livros: initialState.livros, list})
        })
    }
    render(){
        return(
            <Main {...headerProps}>
                {this.renderForm()}
            </Main>
        )
    }
}