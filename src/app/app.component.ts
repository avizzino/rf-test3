import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { FormDataModel } from './formdata.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectStatusList = ['Stable', 'Critical', 'Finished'];
  formModel: FormGroup;
  allowedProjectName = 'Test';

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(){
   this.formModel = this.formBuilder.group(new FormDataModel);
   this.formModel.get('projectName').setValidators([Validators.required, this.validateProjectName.bind(this)]);
   this.formModel.get('email').setValidators([Validators.required, Validators.email]);

  //  this.formModel.controls.projectName.setValidators(Validators.required);


    //  this.formModel = new FormGroup({
    //   projectName : new FormControl('',Validators.required),
    //   email : new FormControl(''),
    //   projectStatus:  new FormControl('')
   
    // });
    // console.log(this.formModel.controls.projectName.valid);
  }
  onSubmit(){
    console.log(this.formModel.controls);
    
  }

 
validateProjectName(control: FormControl){
   if(control.invalid || control.value===''){
     return;
   }   
   if(control.value!==this.allowedProjectName){
     return {
       error:{
         message: 'user is not a test'
       }
     }
   }
   return null;
 }

}
 