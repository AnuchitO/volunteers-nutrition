import http from './http';

export function getCapabilityToken(clientName: string) {
  return http.get('capability-token/' + clientName);
}

export function transfer() {
  return http.post('transfer');
}

