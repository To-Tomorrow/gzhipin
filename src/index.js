import React from 'react'
import ReactDom from 'react-dom'
import Main from "./containers/main/main";
import Login from './containers/login/login'
import Register from './containers/register/register'
import {HashRouter,Switch,Route} from "react-router-dom";


import {Provider} from 'react-redux'
import store from './redux/store'




ReactDom.render(
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register}/>
                <Route component={Main}/>
            </Switch>
        </HashRouter>
    </Provider>

    ,document.getElementById('root')
)