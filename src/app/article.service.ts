import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';



const baseUrl = 'https://newsapi.org';
const newsApiKey = 'ef311dfaa03445cfbe1fa82cbdac1e3b';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private http: HttpClient
  ) { }


  public getArticles(sources?: string) {
   let urlParams = new HttpParams();
   urlParams = urlParams.set('apiKey', newsApiKey).set('sources', sources || 'reddit-r-all').set('limit', '100');

    return this.http
      .get(`${baseUrl}/v2/top-headlines`, {params: urlParams})
      .toPromise()
      .then(res => res['articles']);
  }
}
