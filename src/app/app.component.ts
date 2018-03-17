import { Component } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  crypto: any[];
  constructor(db: AngularFireDatabase) {
    db.list('/crypto/BTC/Koinex/current').valueChanges()
    .subscribe(crypto => {
      this.crypto = crypto;
      console.log(this.crypto);      
    })
  }
}
