import React from 'react'
import {Switch, Route} from "react-router-dom"
import Home from "./Components/Home"
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Skills from './Components/Skills'
import Contact from './Components/Contact'


export default(
    <Switch>
        <Route component={Home} exact path="/"/>
        <Route component={About} path="/about"/>
        <Route component={Portfolio} path="/portfolio" />
        <Route component={Skills} path="/skills" />
        <Route component={Contact} path='/contact' />
       
        
    </Switch>
)