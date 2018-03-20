import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as _ from 'lodash';

import { AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // crypto currency 
  public BTC_Coinome: any[];
  public LTC_buyucoin: any[];
  public ETH_Koinex: any[];
  public BCH_Coinome: any[];
  public XRP_Koinex: any[];
  public OMG_Koinex: any[];
  
  //crypto exchanges
  public BTC_exchanges: any[];
  public LTC_exchanges: any[];
  public ETH_exchanges: any[];
  public BCH_exchanges: any[];
  public XRP_exchanges: any[];
  public OMG_exchanges: any[];

  constructor(db:AngularFireDatabase) {
    // crypto currency start
    db.list('/crypto/BTC/Coinome/current').valueChanges()
    .subscribe(BTC_Coinome => {
      this.BTC_Coinome = BTC_Coinome;
      console.log(this.BTC_Coinome);                   
      
                        
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
                        
    }); // EOF
    
    // crypto exhcnages start
    db.list('crypto/BTC/exchanges/INR').valueChanges()
    .subscribe(BTC_exchanges => {
      this.BTC_exchanges = BTC_exchanges;
      console.log(BTC_exchanges);
    });
    db.list('crypto/LTC/exchanges/INR').valueChanges()
    .subscribe(LTC_exchanges => {
      this.LTC_exchanges = LTC_exchanges;
      console.log(this.LTC_exchanges);                   
    });
    db.list('crypto/ETH/exchanges/INR').valueChanges()
    .subscribe(ETH_exchanges => {
      this.ETH_exchanges = ETH_exchanges;
      console.log(ETH_exchanges);
                      
    });
    db.list('crypto/BCH/exchanges/INR').valueChanges()
    .subscribe(BCH_exchanges => {
      this.BCH_exchanges = BCH_exchanges;
      console.log(BCH_exchanges);
                        
    });
    db.list('crypto/XRP/exchanges/INR').valueChanges()
    .subscribe(XRP_exchanges => {
      this.XRP_exchanges = XRP_exchanges;
      console.log(XRP_exchanges);
                        
    });
    
    db.list('crypto/OMG/exchanges/INR').valueChanges()
    .subscribe(OMG_exchanges => {
      this.OMG_exchanges = OMG_exchanges;
      console.log(OMG_exchanges);
                        
    }); // EOF
   }

  ngOnInit() {
  }

}
