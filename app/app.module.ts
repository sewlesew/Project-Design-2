import { BrowserModule } from '@angular/platform-browser';
import {appRouter} from './routes.service';
import { NgModule } from '@angular/core';
import { FormsModule,FormBuilder } from '@angular/forms';
import { HttpModule } from '@angular/http';



import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import  {MaterialModule} from '@angular/material'
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import 'hammerjs';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
// import {RouterModule} from '@angular/router';
// import {AUTH_PROVIDERS} from 'angular2-jwt';
import {Auth } from './auth.service';
import { HomeComponent } from './home/home.component';
import { ClubsComponent } from './clubs/clubs.component';
import { LiveRidesComponent } from './live-rides/live-rides.component';
import { EventsComponent } from './events/events.component';
import { ProfileComponent } from './profile/profile.component';
import {DataServiceService} from './data-service.service';
import { SubscribeUserComponent } from './subscribe-user/subscribe-user.component';
import { UnsubscribeUserComponent } from './unsubscribe-user/unsubscribe-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    HomeComponent,
    ClubsComponent,
    LiveRidesComponent,
    EventsComponent,
    ProfileComponent,
    SubscribeUserComponent,
    UnsubscribeUserComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    appRouter,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
     MdCheckboxModule,
     MaterialModule.forRoot()
  ],
  providers: [Auth,DataServiceService,FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
