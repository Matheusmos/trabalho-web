import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

import Home from '../componentes/home/Home'
import LivroCrud from '../componentes/livro/LivroCrud'

export default props =>
<Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/livro' component={LivroCrud}/>
    <Redirect from = '*' to = '/'/>
</Switch>