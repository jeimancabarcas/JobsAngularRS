import { Component, OnInit } from '@angular/core';
import { JobService, ResponseJobs } from 'src/app/services/job.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  jobsInfo: ResponseJobs | any;
  coords: any;

  constructor(private jobs: JobService) { 
    this.getJobsInfo(undefined);
  }

  ngOnInit(): void {
  }

  getJobsInfo(urlPage: string | undefined) {
    this.jobs.getJobs(urlPage).subscribe(value => this.jobsInfo = value)
    this.coords = {lat: this.jobsInfo?.data[0].latitude, lon:this.jobsInfo?.data[0].longitude}
  }

  selectItem(coords: any) {
    this.coords = coords
  }
}
