import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private baseUrl = 'https://coding-test.rootstack.net/';

  constructor(private http: HttpClient) { }
  
  getJobs(urlPage?: string) {
    let urlPageSet = urlPage ? urlPage : this.baseUrl + "api/jobs?page=1";
    return this.http.get<ResponseJobs>(urlPageSet);
  }
}

/**
 *      Typing jobs response
 * */ 
export interface ResponseJobs {
  current_page: number;
  data: DataJob[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Link[];
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url?: any;
  to: number;
  total: number;
}

interface Link {
  url?: string;
  label: number | string;
  active: boolean;
}

export interface DataJob {
  id: number;
  title: string;
  description: string;
  latitude: number;
  longitude: number;
  image: string;
  date: string;
  status: string;
  assigned_to: string;
  created_at: string;
  updated_at: string;
}