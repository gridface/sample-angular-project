import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' ;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  API_KEY = '26088fbf51e44cf5940345e2c866ef0f';

  public getNews(){
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`);
  }
}
