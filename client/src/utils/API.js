import axios from 'axios';
import fs from 'fs';

export default {
    getArticles: function (query) {
        return axios({
            method: 'get',
            url: 'http://bit.ly/2mTM3nY',
            responseType: 'stream'
        })
            .then(function (response) {
                console.log(response.data);
            })
    }
};