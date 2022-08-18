import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  API_SERVICE = "http://localhost:3000/";
  header:HttpHeaders|any;

  constructor(private httpClient: HttpClient) { 
  }

  get(path:string="", params={}) {
    return new Promise((resolve, reject) => {
      try {
        this.httpClient.get(this.API_SERVICE + path,{params, headers:this.header}).subscribe((res) => {
          resolve(res);
        })
      } catch (error) {
        reject(error);
      }
    })

    
  }
}
