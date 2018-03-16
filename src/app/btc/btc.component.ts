import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-btc',
  templateUrl: './btc.component.html',
  styleUrls: ['./btc.component.css']
})
export class BtcComponent implements OnInit {

   btc_image = "assets/images/btc.png"; 

  @ViewChild('chart') el: ElementRef;

  constructor() { }

  ngOnInit() {
    this.btc_chart();
  }

  btc_chart() {
    Plotly.d3.csv("https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv", function(err, rows){
      
        function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
      }
      
      
      var trace1 = {
        type: "scatter",
        mode: "lines",
        name: 'AAPL High',
        x: unpack(rows, 'Date'),
        y: unpack(rows, 'AAPL.High'),
        line: {color: '#17BECF'}
      }
      
      var trace2 = {
        type: "scatter",
        mode: "lines",
        name: 'AAPL Low',
        x: unpack(rows, 'Date'),
        y: unpack(rows, 'AAPL.Low'),
        line: {color: '#7F7F7F'}
      }
      
      var data = [trace1,trace2];
      
      var layout = {
        title: 'Price history charts',
        width:1000,
        height:500,
        xaxis: {
          autorange: true,
          range: ['2015-02-17', '2015-08-16'],
          rangeselector: {buttons: [
              {
                count: 1,
                label: '1m',
                step: 'month',
                stepmode: 'backward'
              },
              {
                count: 6,
                label: '6m',
                step: 'month',
                stepmode: 'backward'
              },
              {step: 'all'}
            ]},
          rangeslider: {range: ['2015-02-17', '2015-08-16']},
          type: 'date'
        },
        yaxis: {
          autorange: true,
          range: [60.8700008333, 100.870004167],
          type: 'linear'
        }
      };
      
      Plotly.newPlot('btc_chart', data, layout);
      })
  }

}
