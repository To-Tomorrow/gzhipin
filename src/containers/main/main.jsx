import React, {Component} from 'react';
import {Switch,Route} from "react-router";
import Cookies from 'js-cookie'


import LaobanInfo from "../laoban-info/laoban-info";
import DashenInfo from "../dashen-info/dashen-info";

class Main extends Component {
    render() {
        //如果浏览器中没有保持userid的cookie，直接跳转到Login
        const userid = Cookies.get('userid')
        if(!userid){
            this.props.history.replace('/login')
            return null
        }
        return (
            <div>
                <Switch>
                    <Route path='/laobaninfo' component={LaobanInfo}/>
                    <Route path='/dasheninfo' component={DashenInfo}/>

                </Switch>
            </div>
        );
    }
}

export default Main;