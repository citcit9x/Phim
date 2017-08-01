import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Headers} from '@angular/http';
import {BaseService} from '../base/base.service';
import 'rxjs/add/operator/map';



@Injectable()
export class UsersService {

  constructor(private _http: Http, private _base: BaseService ) { }



  public sign_in(phone_si: string, pass_si: string){
    var url = this._base.BASE_URL() + ':' + this._base.BASE_EXPRESS_PORT() + '/api/auth';
    var params = {phone: phone_si, pass: pass_si, type: '0'};
    var headers = new Headers({ 'Content-Type': 'application/json',
                                'charset': 'utf=8'
         });
    
    return (
        this._http.post(url, params,{headers:headers})
    ).map(res => res.json());
  }

  public sign_up(phone_su: string, name_su: string, pass_su: string, age_su: string, sex_su: string, email_su: string){
    var url = this._base.BASE_URL() + ':' + this._base.BASE_EXPRESS_PORT() + '/api/user/self';
    var params = {phone: phone_su, name: name_su, pass: pass_su, age: age_su, sex: sex_su, email: email_su};
    var headers = new Headers({ 'Content-Type': 'application/json',
                                'charset': 'utf=8'
         });
    
    return (
        this._http.post(url, params,{headers:headers})
    ).map(res => res.json())
  }
}   