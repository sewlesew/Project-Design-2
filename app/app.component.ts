import { Component } from '@angular/core';
import {Auth} from './auth.service';
import {HeaderComponent} from './header/header.component';
import {RouterLink,RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [' .navbar-default{color:#fff;}']

})
export class AppComponent {
  title = 'app works!';
    
   constructor(private auth:Auth){

   }

}
