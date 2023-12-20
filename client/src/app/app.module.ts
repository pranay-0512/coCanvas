import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CollaborateComponent } from './component/collaborate/collaborate.component';
import { CanvasComponent } from './component/dashboard/canvas/canvas.component';
import { ToolBarComponent } from './component/dashboard/tool-bar/tool-bar.component';
import { ChatComponent } from './component/dashboard/chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    CollaborateComponent,
    CanvasComponent,
    ToolBarComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
