import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

import Home from '../componentes/home/Home'
import CaronaCrud from '../componentes/carona/CaronaCrud'
import CaronaP from '../componentes/carona/CaronaP'
import Login from '../login/index'


export default props =>
<Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/carona' component={CaronaCrud}/>
    <Route exact path='/caronapassageiro' component={CaronaP}/>
    <Route exact path='/login' component={Login}/>
    <Redirect from = '*' to = '/'/>
</Switch>