import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResponseComponent } from './response/response.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BtnsdirDirective } from './btnsdir.directive';

@NgModule({
  declarations: [AppComponent, ResponseComponent, BtnsdirDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
