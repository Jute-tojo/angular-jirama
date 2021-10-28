import { Component, OnInit } from '@angular/core';
import { faSign } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  faSign = faSign;
  constructor() { }

  ngOnInit(): void {
  }

}
