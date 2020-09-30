import './Footer.css'
import React from 'react'

export default props => 
    <footer className="footer">
        <span>
            Desenvolvido por
            <button onClick={() => alert('Equipe:\n  Matheus de Oliveira Silva\n  Tamires Ariane Silva Sousa\n  João Vitor de Lima\nDisciplina:\n  Desenvolvimento de Software para Web')}><strong>Créditos</strong> </button>
            
        </span>
        
    </footer>