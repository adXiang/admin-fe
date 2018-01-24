/*
* @Author: MaWenXiang
* @Date:   2018-01-20 18:24:39
* @Last Modified by:   MaWenXiang
* @Last Modified time: 2018-01-20 18:24:39
*/
'use strict';
import React        from 'react';
import ReactDOM     from 'react-dom';

import PageTitle    from 'component/page-title/index.jsx';

const Home = React.createClass({
    getInitialState() {
        return {
            hello: 'Welcome'
        };
    },
    componentDidMount: function(){
       console.log('Home did mount');
    },
    render() {
        return (
            <div id="page-wrapper">
                <PageTitle pageTitle="Home"/>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        Welcome
                    </div>
                </div>
            </div>
        );
    }
});

export default Home;
