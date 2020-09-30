import React, {Component} from 'react'
import axios from 'axios'
import Main from '../template/Main'

const baseUrl = 'http://localhost:3001/livros'

const initialState = {
    livros:{nome: '', autor:''},
    list:[]
}





const headerProps = {
    icon: 'fas fa-book',
    title: 'Livros',
    subtitle: 'Cadastro de Livros: Incluir, Listar, Alterar e Excluir!'
}

export default class LivroCrud extends Component{
    state = {...initialState}


    componentWillMount(){
        axios(baseUrl).then(resp =>{
            this.setState({list: resp.data})
        })
    }
    clear(){
        this.setState({livros: initialState.livros})
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

    
    getUpdateList(livros, add = true){
        const list = this.state.list.filter(u => u.id !== livros.id)
        if(add) list.unshift(livros)
        return list
    }

    updateField(event){
        const livros = {...this.state.livros}
        livros[event.target.name] = event.target.value
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
                     
                </div>
                <hr />
                    <div className="row">
                        <div className="col-12 d-flex justify-content-end">
                            <button className="btn btn-primary"
                                onClick={e => this.save(e)}>
                                Salvar
                            </button>

                            <button className="btn btn-secondary ml-2"
                                onClick={e => this.clear(e)}>
                                Cancelar
                            </button>

                        </div>
                    
                    </div>

            </div>
        )
    }

    load(livros){
        this.setState({livros})
    }

    remove(livros){
        axios.delete(`${baseUrl}/${livros.id}`).then(
            resp => {
               const list = this.getUpdateList(livros,false)
               this.setState({list}) 
            }
        )
    }

    renderRows(){
        return this.state.list.map(livros => {
            return(
                <tr key={livros.id}>
                    <td>{livros.id}</td>
                    <td>{livros.nome}</td>
                    <td>{livros.autor}</td>
                    <td>
                        <button className="btn btn-warning" onClick={() => this.load(livros)}>
                            <i className="fa fa-pencil"></i>

                        </button>
                        <button className="btn btn-danger ml-2" onClick={() => this.remove(livros)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>

                </tr>
            )
        })
    }

    renderTable(){
        return(
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Autor</th>
                    </tr>
                </thead>
                <tbody>{this.renderRows()}</tbody>

            </table>
        )
    }


    render(){
        return(
            
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
            
        )
    }
}