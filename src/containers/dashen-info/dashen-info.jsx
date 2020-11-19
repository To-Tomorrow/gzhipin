import React,{Component} from 'react'
import {NavBar,InputItem,TextareaItem,Button} from "antd-mobile";
import {connect} from 'react-redux'
import {Redirect} from "react-router";

import HeaderSelector from "../../components/header-selector/header-selector";
import {updateUser} from "../../redux/actions";

class DashenInfo extends Component{
    state = {
        header: '', // 头像名称
        info: '', // 个人简介
        post: '', // 求职岗位
    }

    handleChange = (name,val) => {
        this.setState({[name]:val})
    }

    //设置更新header
    setHeader = (header) => {
        this.setState({header})
    }

    render() {
        const {user} = this.props
        //如果用户信息以完善，自动跳转到老板主页面
        if(user.headerList){
            return <Redirect to='/dashen'/>
        }
        return (
            <div>
                <NavBar>大神信息完善</NavBar>
                <HeaderSelector setHeader={this.setHeader}/>
                <InputItem onChange={val => this.handleChange('post',val)}>求职岗位：</InputItem>
                <TextareaItem title='个人介绍' rows={3} onChange={val => this.handleChange('info',val)}/>
                <Button type='primary' onClick={() => this.props.updateUser(this.state)}>保存</Button>
            </div>
        );
    }

}

export default connect(
    state => ({user:state.user}),
    {updateUser}
)(DashenInfo)