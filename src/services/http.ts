import * as axios from 'axios';

// let baseURL = (process.env.NODE_ENV !== 'production') ?
//   'http://localhost:5000/': 'https://call-jumper-api.herokuapp.com/';

let baseURL = 'https://call-jumper-api.herokuapp.com/';

let http = axios.create({
    baseURL: baseURL,
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
});

export default http;
