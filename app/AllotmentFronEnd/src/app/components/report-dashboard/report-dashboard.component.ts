import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart,Highcharts } from 'angular-highcharts';
import {GridDataHandlingService} from '../../services/grid-data-handling.service';

@Component({
  selector: 'app-report-dashboard',
  templateUrl: './report-dashboard.component.html',
  styleUrls: ['./report-dashboard.component.css']
})
export class ReportDashboardComponent implements OnInit {
  
  @ViewChild('chartContainer') chartContainer:ElementRef;
  mainChart=null; 
  constructor(private grdDataMgnt:GridDataHandlingService) { }

  populateChartData(whenComplete){
    this.grdDataMgnt.requestServerFolderReport('outbox',(data)=>{
      whenComplete(data);
      
    },(failureData)=>{
      console.log(failureData);
    })
  }

  generateChart(cData){

    const op:Highcharts.Options = {
      chart: {
        renderTo: this.chartContainer.nativeElement,
        type: 'column',
        colorCount:10,
        options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            depth: 50,
            viewDistance: 25
        }
    },
    
    title: {
        text: 'At a glance analysis of the overall resource'
    },
    subtitle: {
        text: 'Check which category has how much resources'
    },
    plotOptions: {
        column: {
            depth: 500
        }
    },
    series: [{
        data: cData,name:'Number of resources'
            }]
    };

    this.mainChart  = new Highcharts.Chart(op);
  }

  ngOnInit() {
    this.populateChartData((resultObj)=>{
      const cData=[];
      console.log(resultObj);
      resultObj.data.resultArray.forEach(element => {
        cData.push([element.path,element.total]);
      });
      this.generateChart(cData);  
    });
    
    


  }

}


/**
 * 
 * this.mainChart = new Chart({
        chart: {
          type: 'line'
        },
        title: {
          text: 'Linechart'
        },
        credits: {
          enabled: false
        },
        series: [
          {
            name: 'Line 1',
            data: [1, 2, 3]
          }
        ]
      });
 * 
 */