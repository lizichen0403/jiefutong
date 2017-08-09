import React,{Component} from 'react'
import Header from '../../components/header/header.js'
import Footer from "../../components/footer/footer";
import {HashRouter as Router, Route, Redirect, Link, Switch} from 'react-router-dom';

export default class extends Component{
    render(){
        return(
            <div>
                <Header title={'产品详情'}/>
                <div className="scrollTop">
                    <div className="content">
                        <div className="avatar">
                            <img src="" alt=""/>
                        </div>
                        <div className="detail">
                            <div className="name">
                                <span>产品名称:</span>
                                <span>2222</span>
                            </div>
                            <div className="text">
                                <span>产品介绍:</span>
                                <span>1111</span>
                            </div>
                        </div>
                        <div className="btn">
                            <Link to="/List">返回</Link>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
import './detail.less'