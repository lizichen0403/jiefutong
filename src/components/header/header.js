

import React from 'react';
import "./header.less"

export default class Header extends React.Component{
    render (){
        // console.log(this.props);
        return (
            <div className="header">
               {this.props.title}
            </div>
        )
    }
}