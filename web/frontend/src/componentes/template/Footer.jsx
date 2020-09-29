import './Footer.css'
import React from 'react'

export default props => 
    <footer className="footer">
        <span>
            Desenvolvido por <i className="fa fa-heart text-danger"></i>
            <button onClick={() => alert('Equipe:\n  Matheus de Oliveira Silva\n  Tamires Ariane Silva Sousa\n  João Vitor de Lima\nDisciplina:\n  Desenvolvimento de Software para Web')}><strong>Créditos</strong> </button>
            <i className="fa fa-heart text-danger"></i>
        </span>
        
    </footer>