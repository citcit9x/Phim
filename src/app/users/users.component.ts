import { Component} from '@angular/core';
import {UsersService} from '../shared/users/users.service';
import { Cookie } from 'ng2-cookies';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  private phone_si: string;
  private pass_si: string;

  private phone_su: any;
  private name_su: string;
  private pass_su: string;
  private age_su: string;
  private sex_su: string;
  private email_su: string;

  private success: string;
  private token: string;

  private cookies: Object;
  private keys: Array<string>;

  constructor (private _userService: UsersService){}
 
  public Sign_In(): void{
      this._userService.sign_in(this.phone_si, this.pass_si).subscribe(
        data => {
          this.success = JSON.stringify(data.success);
          this.token = JSON.stringify(data.token);
          if(this.success =='true'){
              alert('Đăng nhập thành công');
              this.AddCookie('token', this.token);
          }
          else{
              alert('Đăng nhập thất bại');
          };
        },
        error => {
          alert(error.json());
        },
        () =>{ }
      );
    }


  public Sign_Up(): void{
      this._userService.sign_up(this.phone_su, this.name_su, this.pass_su, this.age_su, this.sex_su, this.email_su).subscribe(
         data => {
          this.success = JSON.stringify(data);
          console.log(this.success);
          if(this.success == 'true'){
             alert('Tạo tài khoản thành công');
          }
          else if(this.success == 'false'){
           console.log(this.success);
            alert('Tài khoản đã tồn tại trên hệ thống bạn vui lòng nhập một số điện thoại hoặc một email khác');
          }
        },
        error => {
          alert(error.json());
        },
        () =>{ }
      );
    }
 
  public GetCookies(){
    return Cookie.get('token');
  }
  public Update() {
    this.cookies = Cookie.getAll();
    this.keys = Object.keys(this.cookies);
  }
  public AddCookie(name: string, value: string) {
    console.log('Adding: ', name, value);
    Cookie.set(name, value);
    this.Update();
  }
  public RemoveCookie(name: string) {
    console.log('Removing: ', name);
    Cookie.delete(name);
    this.Update();
  }s
  public RemoveAllCookies() {
    console.log('Removing all cookies');
    Cookie.deleteAll();
    this.Update();
  }
}