import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BtcComponent } from './btc/btc.component';
import { KoinexComponent } from './koinex/koinex.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NgStyle } from '@angular/common';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { LtcComponent } from './ltc/ltc.component';

@NgModule({
  declarations: [
    AppComponent,
    BtcComponent,
    KoinexComponent,
    HomeComponent,
    AboutComponent,
    LtcComponent,
    
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  exports:[
    NgStyle,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
