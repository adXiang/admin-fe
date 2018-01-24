/*
* @Author: WangHangYun
* @Date:   2018-01-20 18:24:39
* @Last Modified by:   WangHangYun
* @Last Modified time: 2018-01-20 18:24:39
*/

'use strict';

import React        from 'react';
import ReactDOM     from 'react-dom';

import RcPagination from 'rc-pagination';

import './index.scss';

// 通用分页组件
const Pagination = React.createClass({
    getInitialState() {
        return {
            
        };
    },
    render() {
        return (
            <RcPagination {...this.props}/>
        )           
    }
});

export default Pagination;