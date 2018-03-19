import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as _ from 'lodash';

import { AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-ltc',
  templateUrl: './ltc.component.html',
  styleUrls: ['./ltc.component.css']
})
export class LtcComponent implements OnInit {

  public koinex: any[];
  public Zebpay: any[];
  
  constructor(db:AngularFireDatabase) {
    db.list('crypto/LTC/exchanges/INR').valueChanges()
    .subscribe(koinex => {
      this.koinex = koinex;
      console.log(this.koinex);        
       this.ltc_chart();             
    });
    db.list('/crypto/LTC/Zebpay/history/').valueChanges()
    .subscribe(Zebpay => {
      this.Zebpay = Zebpay;
      console.log(this.Zebpay);        
       this.ltc_chart();             
    });
   }

  ngOnInit() {
  }
  
  ltc_chart()
  {
    //chart
    var koinex_bid = 
      {
        x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00'],
        y: this.get_Koinex_highestBid(),
        type: 'scatter',
        name: 'Koinex',        
      }
      var Zebpay_bid = 
      {
        x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00'],
        y: this.get_Zebpay_highestBid(),
        type: 'scatter',
        name: 'Zebpay',                
      }
    
      var data = [koinex_bid, Zebpay_bid]
    
    Plotly.newPlot('myDiv', data);
  }//end of chart



    get_Koinex_highestBid() {
        let koinex_bid_array:any[] =[];

        for(let i=0; i < this.koinex.length;i++) {
          koinex_bid_array.push(this.koinex[i].highestBid);
        }
          return koinex_bid_array;
    }//EOF



    get_Zebpay_highestBid() {
      let Zebpay_bid_array:any[] = [];
      // console.log(this.Zebpay.length);
        for(let i=0; i< this.Zebpay.length;i++) {
          Zebpay_bid_array.push(this.Zebpay[i].highestBid);
        }
        return Zebpay_bid_array;
    }//EOF
 

}
