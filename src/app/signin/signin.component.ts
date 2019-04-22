import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.styl']
})
export class SigninComponent implements OnInit {
  public show = 1;
  public active = false;
  preferenceData=[
    {
      img: '1.jpg',
      name:'Moments',
      active: false,
    },
    {
      img: '2.jpg',
      name:'Comedy',
      active: false,
    },
    {
      img: '3.jpg',
      name:'Womanly',
      active: false,
    },
    {
      img: '4.jpg',
      name:'Manly',
      active: false,
    }
  ];
  constructor() { }

  ngOnInit() {


  }

  onSubmitSignIn(f: NgForm){
    console.log(f.value);
    console.log(f.valid);
    if(f.valid){
      document.querySelector('.close-modal').click();
    }
  }
  onSubmitRegister(f: NgForm){
    console.log(f.value);
    console.log(f.valid);
    if(f.valid){
      this.show = 3;
    }
  }
  onSubmitPersonalInfo(f: NgForm){
    this.show = 4;
  }
  onSubmitPreference(f: NgForm){
    console.log('close');
    document.querySelector('.close-modal').click();
  }



}
