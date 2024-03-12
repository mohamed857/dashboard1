import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import ApexCharts from 'apexcharts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [NgApexchartsModule, ImageModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent {
  public chartOptions: any;

  constructor() {
    this.chartOptions = {
      // chart: {
      //   height: 90,
      //   type: 'radialBar',
      //   toolbar: {
      //     show: false
      //   }
      // },
      // series: [80],
      // labels: ['450'],
      // plotOptions: {
      //   startAngle: -200,
      //   endAngle: 225,
      //   radialBar: {
      //     hollow: {

      //       size: '40%',
      //       margin: 0,
      //     },
      //   },
      // },
      // dataLabels: {
      //   enabled: true,
      //   style: {
      //     fontSize: "140px",
      //     fontFamily: "Helvetica, Arial, sans-serif",
      //     fontWeight: "bold"
      //   }
      // },



        chart: {
          height: 105,
          type: "radialBar",
        },
        series: [67],
        // colors: ["#20E647"],
        plotOptions: {
          radialBar: {
            hollow: {
                    size: '35%',
                    margin: 0,
                  },
            startAngle: -135,
            endAngle: 135,
            track: {
              background: '#333',
              startAngle: -135,
              endAngle: 135,
            },
            dataLabels: {
              name: {
                show: true,
                fontSize: "10px",
              },
              value: {
                fontSize: "10px",
                show: false
              }
            }
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "horizontal",
            gradientToColors: ["#87D4F9"],
            stops: [0, 100]
          }
        },
        stroke: {
          lineCap: "butt"
        },
        labels: ["450"]
      };
      ​
      new ApexCharts(document.querySelector("#chart1"), this.chartOptions).render();



    };

  }



  // xaxis: {
  //   show: false,
  //   labels: {
  //     show: false
  //   },
  //   axisBorder: {
  //     show: false
  //   },
  //   axisTicks: {
  //     show: false
  //   }
  // },



