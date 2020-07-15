import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MainMenuComponent} from './main-menu/main-menu.component';
import {OtherMenuComponent} from './other-menu/other-menu.component';
import {AppRoutingModule} from "./app-routing.module";
import {LoginComponent} from './login/login.component';
import {FormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        MainMenuComponent,
        OtherMenuComponent,
        LoginComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
