import http from './http';

export function getUserProfile(token: string) {
  return http.get('user');
}
