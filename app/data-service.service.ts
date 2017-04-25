

import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Auth} from './auth.service';

@Injectable()
export class DataServiceService {

  constructor(private _http:Http,private _auth:Auth) {

   }

   getData(){
     return this._http.get('http://localhost:3000/api/clubs').map(x=>x.json());
    
   }

   joinClub(value){
     return this._http.post('http://localhost:3000/api/subscribeclub/'+value+"/"+"user10",JSON.stringify({})).map(x=>x.json());
    
   }
   
   
  //  isClubMember(){
  //    return this._http.
  //  }

}
