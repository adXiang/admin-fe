/*
* @Author: MaWenXiang
* @Date:   2018-01-20 18:24:39
* @Last Modified by:   MaWenXiang
* @Last Modified time: 2018-01-20 18:24:39
*/

'use strict';

import React        from 'react';
import ReactDOM     from 'react-dom';
import FileUpload   from 'react-fileupload';

import MMUtile from 'util/mm.jsx';

const _mm = new MMUtile();

const FileUploader = React.createClass({
    getInitialState() {
        return {
            
        };
    },
    componentDidMount(){

    },
    render() {
        /*set properties*/
        const options={
            baseUrl         : _mm.getServerUrl('/manage/product/upload.do'),
            fileFieldName   : 'upload_file',
            accept          : 'image/gif,image/jpeg,image/jpg,image/png',
            chooseAndUpload : true,
            uploadSuccess   : this.props.onSuccess,
            uploadError     : this.props.onError
        }
        /*Use FileUpload with options*/
        /*Set two dom with ref*/
        return (
            <FileUpload options={options}>
                <button ref="chooseAndUpload">上传图片</button>
            </FileUpload>
        )           
    }
});

export default FileUploader;