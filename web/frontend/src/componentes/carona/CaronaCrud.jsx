import React, {Component} from 'react'
import axios from 'axios'
import Main from '../template/Main'

const baseUrl = 'http://localhost:3001/carona'

const initialState = {
    carona:{nome: '', destino:'', data:'', passageiro: ''},
    list:[]
}





const headerProps = {
    icon: 'fas fa-car',
    title: 'Cadastro Carona',
    subtitle: 'Cadastro de Carona: Seja Legal, ofereça uma carona!'
}

export default class CaronaCrud extends Component{
    state = {...initialState}


    componentWillMount(){
        axios(baseUrl).then(resp =>{
            this.setState({list: resp.data})
        })
    }
    clear(){
        this.setState({carona: initialState.carona})
    }

    save(){
        const ride = this.state.carona
        const method = ride.id ? 'put' : 'post'
        const url = ride.id ? `${baseUrl}/${ride.id}` : baseUrl
        axios[method](url, ride)
        .then(resp =>{
            const list = this.getUpdateList(resp.data)
            this.setState({carona: initialState.carona, list})
        })
    }

    
    getUpdateList(carona, add = true){
        const list = this.state.list.filter(u => u.id !== carona.id)
        if(add) list.unshift(carona)
        return list
    }

    updateField(event){
        const carona = {...this.state.carona}
        carona[event.target.name] = event.target.value
        this.setState({carona})
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
                                value={this.state.carona.nome}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o nome do Motorista..."/>

                        </div>

                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Destino</label>
                            <input type="text" className="form-control"
                                name="destino"
                                value={this.state.carona.destino}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o destino da viagem..."/>

                        </div>

                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Data</label>
                            <input type="date" className="form-control"
                                name="data"
                                value={this.state.carona.data}
                                onChange={e => this.updateField(e)}
                            />

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

    load(carona){
        this.setState({carona: carona})
    }

    remove(carona){
        axios.delete(`${baseUrl}/${carona.id}`).then(
            resp => {
               const list = this.getUpdateList(carona,false)
               this.setState({list}) 
            }
        )
    }

    renderRows(){
        return this.state.list.map(carona => {
            return(
                <tr key={carona.id}>
                    <td>{carona.id}</td>
                    <td>{carona.nome}</td>
                    <td>{carona.destino}</td>
                    <td>{carona.data}</td>
                    <td>{carona.passageiro}</td>
                    <td>
                        <button className="btn btn-warning" onClick={() => this.load(carona)}>
                            <i className="fa fa-pencil"></i>

                        </button>
                        <button className="btn btn-danger ml-2" onClick={() => this.remove(carona)}>
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
                        <th>Nome (Motorista)</th>
                        <th>Destino</th>
                        <th>Data</th>
                        <th>Passageiro</th>
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