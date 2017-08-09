
import React from 'react';
import Header from '../../components/header/header.js'
import {HashRouter as Router, Route, Redirect, Link, Switch} from 'react-router-dom';
import './wrap.less'
import Home from "../../container/home/Home";
import List from "../../container/list/List";
import User from "../../container/user/user";
import Community from "../../container/community/community";
import Detail from '../../container/detail/detail';

export default class Wrap extends React.Component{
    render (){
        return (
            <div className="wrap">
                <Header />
                <Router history={history}>
                    <div>
                        <ul className="Boom">
                            <li>
                                <Link to='/Home'>
                                <i className="iconfont icon-zhuye"></i>
                                <span className="title">首页</span>
                                </Link>
                            </li>
                            <li><Link to='/List'><i className="iconfont icon-listnormal"></i>
                                <span className="title">产品列表</span></Link></li>
                            <li><Link to='/Community'><i className="iconfont icon-shequ"></i>
                                <span className="title">社区中心</span></Link></li>
                            <li><Link to='/User'><i className="iconfont icon-gerenzhongxin"></i>
                                <span className="title">个人中心</span></Link></li>

                        </ul>
                        <Switch>
                            <Route exact path={'/'} component={Home}/>
                            <Route path={'/Home'} component={Home}/>
                            <Route path={'/List'} component={List}/>
                            <Route path={'/User'} component={User}/>
                            <Route path={'/detail'} component={Detail}/>
                            <Route path={'/Community'} component={Community}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}