import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {HashRouter,Route,Switch} from 'react-router-dom';
import {Button} from "antd-mobile";


import store from "./redux/store";
import Login from "./containers/login/login";
import Register from "./containers/register/register";
import Main from "./containers/main/main";

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Switch>
                {/*<Route path='/login' component={Login} />*/}
                {/*<Route path='/register' component={Register}/>*/}
                <Route component={Main}/>
            </Switch>
        </HashRouter>
    </Provider>
    ,
  document.getElementById('root')
);

