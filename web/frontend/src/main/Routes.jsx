import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

import Home from '../componentes/home/Home'
import LivroCrud from '../componentes/livro/LivroCrud'
import Play from '../componentes/play/Play'


export default props =>
<Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/livro' component={LivroCrud}/>
    <Route exact path='/play' component={Play}/>
    <Redirect from = '*' to = '/'/>
</Switch>