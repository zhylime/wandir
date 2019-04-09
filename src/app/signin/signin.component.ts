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

  onSubmit(f: NgForm){
    console.log(f.value);
    console.log(f.valid);
  }

}
