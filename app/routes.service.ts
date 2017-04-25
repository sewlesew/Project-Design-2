import{Routes,RouterModule} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {BodyComponent} from './body/body.component';
import {AppComponent} from './app.component';
import { HomeComponent } from './home/home.component';
import {ClubsComponent} from './clubs/clubs.component';
import {EventsComponent} from './events/events.component';
import {LiveRidesComponent} from './live-rides/live-rides.component';
import {ProfileComponent} from './profile/profile.component';
import {SubscribeUserComponent} from  './subscribe-user/subscribe-user.component';
import {UnsubscribeUserComponent} from './unsubscribe-user/unsubscribe-user.component';
import {UpdateUserComponent} from './update-user/update-user.component';

const appRoutes:Routes=[
  {  
    path:'home', component:  HomeComponent 
    
  },
  {  
    path:'clubs', component:  ClubsComponent 
    
  },
  {  
    path:'liverides', component: LiveRidesComponent 
    
  },
  {  
    path:'events', component:  EventsComponent 
    
  },
   {  
    path:'profile', component:  ProfileComponent ,
    children:[      
    {path:'subscribe', component: SubscribeUserComponent },
     {path:'unsubscribe', component: UnsubscribeUserComponent },
     {path:'update', component: UpdateUserComponent }   
  
    ]

    
  }
  


];

export const appRouter=RouterModule.forRoot(appRoutes);