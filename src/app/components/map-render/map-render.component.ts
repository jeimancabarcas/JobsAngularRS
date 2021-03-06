import { Component, Input, OnInit } from '@angular/core';
import { DataJob } from 'src/app/services/job.service';

@Component({
  selector: 'app-map-render',
  templateUrl: './map-render.component.html',
  styleUrls: ['./map-render.component.scss']
})
export class MapRenderComponent implements OnInit {
  @Input() markers: DataJob[] = [];
  constructor() { 
  }

  ngOnInit(): void {
  }
}
