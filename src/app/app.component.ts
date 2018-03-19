import { Component } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navigation:any[];
  nav : string;  
  inr_navigation: any[];
  usd_navigation: any[];  

  selectedNav(nav) {
    console.log(nav);
  }
  constructor(db: AngularFireDatabase) {
    //get the Currency list
    db.list('/currencyList/INR').valueChanges()
    .subscribe(navigation => {
      this.navigation = navigation;    
    });
    db.list(`/crypto/${this.nav}/exchanges/INR`).valueChanges()
    .subscribe(inr_navigation => {
      this.inr_navigation = inr_navigation;  
      console.log(this.inr_navigation);
    });
    db.list(`/crypto/${this.nav}/exchanges/USD`).valueChanges()
    .subscribe(usd_navigation => {
      this.usd_navigation = usd_navigation;    
      console.log(this.usd_navigation);
    });
  }

  
}
