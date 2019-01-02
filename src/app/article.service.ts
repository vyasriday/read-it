import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private http: HttpClient
  ) { }


  public getArticles(sources?: string, path?: string) {
   let urlParams = new HttpParams();
   urlParams = urlParams.set('apiKey', environment.newsApiKey).set('sources', sources);
   path = '/v2/top-headlines';
    return this.http
      .get(`${environment.baseUrl}${path}`, {params: urlParams})
      .toPromise()
      .then(res => res['articles']);
  }

  public getSources() {
    let urlParams = new HttpParams();
    urlParams  = urlParams.set('apiKey', environment.newsApiKey);
    return this.http.get(`${environment.baseUrl}/v2/sources?`, {params: urlParams})
    .toPromise()
    .then(res => res['sources']);
  }
}
