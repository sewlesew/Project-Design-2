import { Component, OnInit } from '@angular/core';
import {Auth} from '../auth.service';
import {FormBuilder, FormGroup,FormGroupName,Validators,FormControl,NgForm,NgModel} from '@angular/forms';

@Component({
  selector: 'app-subscribe-user',
  templateUrl: './subscribe-user.component.html',
  styleUrls: ['./subscribe-user.component.css']
})
export class SubscribeUserComponent implements OnInit {
     private profile;
     private mygroup:FormGroup;
    public  in1;
  constructor(private _auth:Auth,private _formBuilder:FormBuilder) {
    this.profile=JSON.parse(localStorage.getItem('profile'));
    console.log("from subscribe: "+JSON.parse(localStorage.getItem('profile')));

    //  this.mygroup=_formBuilder.group({
    //    "email":[''],
    //    "name":[''],
    //    "gender":[''],
    //    "city":['',Validators.required],
    //    "state":['',Validators.required]
       
    //  });

   }

  ngOnInit() {
    this.profile=JSON.parse(localStorage.getItem('profile'));
  }

onSubmit(){
   console.log("output>>>>>>>>>>>"+this.mygroup.value);
  }

}
