import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
// Materialmodules
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { PersonalLoansModule } from './personal-loans/personal-loans.module';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule,} from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PersonalLoansModule,
    ReactiveFormsModule,
    // material modules
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  
   
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
