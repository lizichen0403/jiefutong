
import React from 'react'
import Header from '../../components/header/header.js'
import Footer from "../../components/footer/footer";

export default class  Community extends React.Component{
    render (){
        return (
            <div>
                <Header title={'社区中心'}/>
                <div className="scrollTop">
                    <h1>社区中心</h1>
                </div>
                <Footer/>
            </div>

        )
    }
}
