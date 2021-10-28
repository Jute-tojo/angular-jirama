import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
declare var require: any;

@Component({
  selector: 'app-graphe',
  templateUrl: './graphe.component.html',
  styleUrls: ['./graphe.component.scss']
})
export class GrapheComponent implements OnInit {

  public options: any = {
    Chart: {
      type: 'area',
      height: 700
    },
    title: {
      text: 'Evolution d\'eau et de l\'éléctricité'
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: ['Avril', 'Main', 'Juin', 'Juillet', 'Aout', 'Séptembre', 'Octobre'],
      tickmarkPlacement: 'on',
      title: {
          enabled: false
      }
  },
    series: [{
      name: 'Eau',
      data: [502, 635, 809, 947, 1402, 1100, 1000]
  }, {
      name: 'Eléctricité',
      color: 'orange',
      data: [18, 31, 54, 156, 339, 818, 1201]
  }]
  }
  constructor() { }
  ngOnInit() {
    Highcharts.chart('container', this.options);
  }
}
