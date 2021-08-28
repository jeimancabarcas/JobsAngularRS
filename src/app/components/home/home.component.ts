import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { JobService, ResponseJobs } from 'src/app/services/job.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  jobsInfo: ResponseJobs | undefined;

  constructor(private jobs: JobService) { 
    this.getJobsInfo(undefined);
  }

  ngOnInit(): void {
  }

  getJobsInfo(urlPage: string | undefined) {
    this.jobs.getJobs(urlPage).subscribe(value => this.jobsInfo = value)
  }
}
