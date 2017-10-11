import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import {FormControl,NgForm} from '@angular/forms';
import {AuthenticatedUserProfile} from '../../shared/datatypes';
import {CommonUtilService} from '../../services/common-util.service'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  @Output() onSigninSuccessful:EventEmitter<AuthenticatedUserProfile> = new EventEmitter();
  public crProfile:AuthenticatedUserProfile = {userName:'',password:''};
  private profiles:Array<AuthenticatedUserProfile> = [
    {userName:'admin',password:'admin'},
    {userName:'iqx',password:'iqx'}
  ];
  constructor() { }

  ngOnInit() {
    if(CommonUtilService.getUserFromLocalStorage()){
      this.onSigninSuccessful.emit(this.crProfile);
    }
  }

  private authenticateProfile():boolean{
    var success:boolean = false;
    this.profiles.forEach((prf)=>{
      if(!success){
        if(prf.userName === this.crProfile.userName && prf.password === this.crProfile.password){
           success = true;
        }
      }
      
    })

    return success;
  }

  public loginStatus(){
    
    if(this.authenticateProfile()){
      CommonUtilService.setUserFromLocalStorage();
      this.onSigninSuccessful.emit(this.crProfile);
    }
  }



}
