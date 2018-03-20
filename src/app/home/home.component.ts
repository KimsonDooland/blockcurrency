import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as _ from 'lodash';

import { AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public BTC_Coinome: any[];
  public LTC_buyucoin: any[];
  public ETH_Koinex: any[];
  public BCH_Coinome: any[];
  public XRP_Koinex: any[];
  public OMG_Koinex: any[];
  
    
  public Coinome: any[];

  constructor(db:AngularFireDatabase) {
    db.list('/crypto/BTC/Coinome/current').valueChanges()
    .subscribe(BTC_Coinome => {
      this.BTC_Coinome = BTC_Coinome;
                        
    });
    db.list('/crypto/LTC/buyucoin/current').valueChanges()
    .subscribe(LTC_buyucoin => {
      this.LTC_buyucoin = LTC_buyucoin;
      console.log(this.LTC_buyucoin);                   
    });
    db.list('/crypto/ETH/Koinex/current').valueChanges()
    .subscribe(ETH_Koinex => {
      this.ETH_Koinex = ETH_Koinex;
                      
    });
    db.list('/crypto/BCH/Coinome/current').valueChanges()
    .subscribe(BCH_Coinome => {
      this.BCH_Coinome = BCH_Coinome;
                        
    });
    db.list('/crypto/XRP/Koinex/current').valueChanges()
    .subscribe(XRP_Koinex => {
      this.XRP_Koinex = XRP_Koinex;
                        
    });
    
    db.list('/crypto/OMG/Koinex/current').valueChanges()
    .subscribe(OMG_Koinex => {
      this.OMG_Koinex = OMG_Koinex;
                        
    });
   }

  ngOnInit() {
  }

}
