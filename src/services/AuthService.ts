import http from './http';
import * as axios from 'axios';

export function login(email: string, password: string) {
  let body = {
    "email": email,
    "password": password
  };
  return axios.post('https://call-jumper-api.herokuapp.com/login', body);
}

export function getUserProfile() {
  return http.get('user');
}
