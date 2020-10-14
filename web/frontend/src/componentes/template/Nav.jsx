import './Nav.css'
import React from 'react'
import {Link} from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <Link to ="/">
                <i className="fa fa-home">
                    Início
                </i>
            </Link>

            <Link to ="/carona">
                <i className="fa fa-car"></i>Cadastro Carona
            </Link>

            <Link to ="/caronapassageiro">
                <i className="fa fa-car"></i> Solicite uma carona ou procure uma vaga
            </Link>
        </nav>
    </aside>