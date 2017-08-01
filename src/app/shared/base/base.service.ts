import { Injectable } from '@angular/core';

@Injectable()
export class BaseService {

  BASE_URL(){
    return 'http://127.0.0.1';
  }
  BASE_EXPRESS_PORT(){
    return '8080';
  }
}
