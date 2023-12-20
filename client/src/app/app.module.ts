import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CanvasComponent } from './component/canvas/canvas.component';
import { ToolBarComponent } from './component/tool-bar/tool-bar.component';
import { CollaborateComponent } from './component/collaborate/collaborate.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    CanvasComponent,
    ToolBarComponent,
    CollaborateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
