import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Angular Material Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

import { SantanderFormComponent } from './pages/santander-form/santander-form.component';
import { SantanderListaComponent } from './pages/santander-lista/santander-lista.component';



@NgModule({
  declarations: [
    AppComponent,
    SantanderListaComponent,
    SantanderFormComponent
  ],
  imports: [
    BrowserModule,
     BrowserAnimationsModule,
     AppRoutingModule,
     HttpClientModule,
     ReactiveFormsModule,
     RouterModule,

    // Angular Material
     MatToolbarModule,
     MatButtonModule,
     MatFormFieldModule,
     MatInputModule,
     MatCardModule,
     MatTableModule,
     MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
