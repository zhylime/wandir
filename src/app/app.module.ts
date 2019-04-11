import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { PreferenceComponent } from './preference/preference.component';
import { PersonInfoComponent } from './person-info/person-info.component';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { CreatepostComponent } from './createpost/createpost.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    HomepageComponent,
    SigninComponent,
    RegisterComponent,
    PreferenceComponent,
    PersonInfoComponent,
    ListComponent,
    CreatepostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
