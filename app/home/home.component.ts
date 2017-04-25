import { Component, OnInit } from '@angular/core';
import {RouterLink,RouterLinkActive} from '@angular/router';
import {DataServiceService} from '../data-service.service';
import {Response}  from "@angular/http";
import {Pipe} from '@angular/core';
// import {FormBuilder,Validators,FormGroup,FormControl} from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 public clubs;
 public clubform;
 
 public isclubmember;
 public clubflag=false;
  constructor(private _dataservice:DataServiceService) { 
  //       ,private _formbuilder:FormBuilder
  // this.clubform=this._formbuilder.group(
  //   { 'name':['name', Validators.required],
  //     'description':['description', Validators.required],
  //     'city':['city', Validators.required],
  //     'state':['state', Validators.required]  
  //   }
                
  // );

  }

  ngOnInit() {
  }

  noClubs(){
    this.clubflag=true;
  }

  getClub(){
     
     this.clubs=new Promise((resolve,reject)=>{
       this._dataservice.getData().subscribe(function(res:Response){
           resolve(res);
            // console.log(this.clubs);
             
             
    });
    
  });
}

createClub(){
          
   
}
joinClub(id){
  this._dataservice. joinClub(id).subscribe(function(res:Response){
          this.isclubmember=res.ok;
          
            console.log(res);
    });
    

}


}
