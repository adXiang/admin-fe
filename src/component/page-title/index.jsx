/*
* @Author: WangHangYun
* @Date:   2018-01-20 18:24:39
* @Last Modified by:   WangHangYun
* @Last Modified time: 2018-01-20 18:24:39
*/

'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

const PageTitle = React.createClass({
    componentDidMount(){
        document.title = this.props.pageTitle || 'WHMALL Admin'
    },
    render() {
        return (
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-header">{this.props.pageTitle}</h1>
                    {this.props.children}
                </div>
            </div>
        );
    }
});

export default PageTitle;