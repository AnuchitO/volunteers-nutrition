import http from './http';

export function register(company: string, name: string, email: string,
                        password: string, creditCardNumber: string,
                        expiryDate: string, securityCode: string) {
  let body = {
    "company_name": company,
    "name": name,
    "email": email,
    "password": password,
    "status": "pending",
    "credit_card": {
      "credit_card_number": creditCardNumber,
      "credit_card_expire_date": expiryDate,
      "credit_card_security_code": securityCode
    }
  };
  return http.post('register', body);
}
