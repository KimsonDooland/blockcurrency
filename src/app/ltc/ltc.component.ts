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
  public Coinome: any[];
  
  constructor(db:AngularFireDatabase) {
    db.list('/crypto/LTC/Koinex/history/').valueChanges()
    .subscribe(koinex => {
      this.koinex = koinex;
      console.log(this.koinex);        
       this.ltc_chart();             
    });
    db.list('/crypto/LTC/Coinome/history/').valueChanges()
    .subscribe(Coinome => {
      this.Coinome = Coinome;
      console.log(this.Coinome);        
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
      var Coinome_bid = 
      {
        x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00'],
        y: this.get_Coinome_highestBid(),
        type: 'scatter',
        name: 'Coinome',                
      }
    
      var data = [koinex_bid, Coinome_bid]
    
    Plotly.newPlot('myDiv', data);
  }//end of chart



    get_Koinex_highestBid() {
        let koinex_bid_array:any[] =[];

        for(let i=0; i < this.koinex.length;i++) {
          koinex_bid_array.push(this.koinex[i].highestBid);
        }
          return koinex_bid_array;
    }//EOF



    get_Coinome_highestBid() {
      let Coinome_bid_array:any[] = [];
        for(let i=0; i < this.Coinome.length;i++) {
          Coinome_bid_array.push(this.Coinome[i].highestBid);
        }
        return Coinome_bid_array;
    }//EOF
 

}
