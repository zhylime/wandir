import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.styl']
})
export class SigninComponent implements OnInit {
  public show = 1;
  constructor() { }

  ngOnInit() {


  }

  onSubmitSignIn(f: NgForm){
    console.log(f.value);
    console.log(f.valid);
  }
  onSubmitRegister(f: NgForm){
    console.log(f.value);
    console.log(f.valid);
    if(f.valid){
      this.show = 3;
    }
  }

}
