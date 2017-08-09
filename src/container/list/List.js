
import React from 'react'
import Header from '../../components/header/header.js'
import Footer from "../../components/footer/footer";
import {HashRouter as Router, Route, Redirect, Link, Switch} from 'react-router-dom';
import './List.less'

export default class  List extends React.Component{
    constructor(){
        super();
        this.state={
            avatar:'',
            text:'',
        }
    }
    render (){
        return (
            <div>
                <Header title={'产品列表'}/>
                <div className="scrollTop">
                    <div className="biaoti">
                        <span>文本1</span>
                        <span className="line">文本2</span>
                        <span>文本3</span>
                    </div>
                    <Link to='/detail'>
                        <div className="weui-cells feed-card-item">
                            <div className="img-wrap">
                                <img src="" alt=""/>
                            </div>
                            <div className="info">
                                <span className="text">产品名称</span>
                                <span className="time">详情</span>
                            </div>
                        </div>
                    </Link>
                    <Link to='/detail'>
                        <div className="weui-cells feed-card-item">
                            <div className="img-wrap">
                                <img src="" alt=""/>
                            </div>
                            <div className="info">
                                <span className="text">产品名称</span>
                                <span className="time">详情</span>
                            </div>
                        </div>
                    </Link>
                    <Link to='/detail'>
                        <div className="weui-cells feed-card-item">
                            <div className="img-wrap">
                                <img src="" alt=""/>
                            </div>
                            <div className="info">
                                <span className="text">产品名称</span>
                                <span className="time">详情</span>
                            </div>
                        </div>
                    </Link>
                    <Link to='/detail'>
                        <div className="weui-cells feed-card-item">
                            <div className="img-wrap">
                                <img src="" alt=""/>
                            </div>
                            <div className="info">
                                <span className="text">产品名称</span>
                                <span className="time">详情</span>
                            </div>
                        </div>
                    </Link>
                </div>
                <Footer/>
            </div>

        )
    }
}
