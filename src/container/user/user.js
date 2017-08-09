
import React from 'react'
import Header from '../../components/header/header.js'
import Footer from "../../components/footer/footer";
import './user.less'

export default class  User extends React.Component{
    render (){
        return (
            <div>
                <Header title={'个人中心'}/>
                <div className="scrollTop">
                    <div className="head">
                        <p className="photo">
                            <img src="" alt=""/>
                        </p>
                        <h4>用户名</h4>
                        <i className="iconfont icon-next"></i>
                    </div>
                    <div className="head-foot">
                        <span>讨论</span>
                        <span className="line">关注</span>
                        <span>粉丝</span>
                    </div>
                    <div className="flex"></div>
                    <ul className="list">
                        <li><span>每日签到</span><i className="iconfont icon-next"></i></li>
                        <li><span>每日签到</span><i className="iconfont icon-next"></i></li>
                        <li><span>每日签到</span><i className="iconfont icon-next"></i></li>
                        <li><span>每日签到</span><i className="iconfont icon-next"></i></li>
                        <li><span>每日签到</span><i className="iconfont icon-next"></i></li>
                    </ul>
                    <div className="flex"></div>
                    <ul className="list">
                        <li><span>每日签到</span><i className="iconfont icon-next"></i></li>
                        <li><span>每日签到</span><i className="iconfont icon-next"></i></li>
                    </ul>
                </div>
            </div>
        )
    }
}
