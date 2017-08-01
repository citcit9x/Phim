import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HttpModule} from '@angular/http';
import {UsersService} from './shared/users/users.service';
import {BaseService} from './shared/base/base.service';
import {appRouterModule} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    appRouterModule
  ],
  providers: [
    UsersService,
    BaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
