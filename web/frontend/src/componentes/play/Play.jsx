import React from 'react'
import Main from '../template/Main'
import ReactPlayer from 'react-player'

export default props =>
<Main icon="play" title="Vídeo Sobre Leitura" subtitle="Se inspire a ler" >
            <div className="display-4">
                <ReactPlayer url="https://www.youtube.com/watch?v=KW4sZROK5hU" controls={true}/>
            </div>
            <hr/>
            <p className="mb-0">Leitura mantém a mente afiada</p>
            
</Main>