 import { Component, OnInit, Input } from '@angular/core';
import { ArticleService } from './../article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles: any[];

  constructor(
    private articleService: ArticleService
  ) {}

  ngOnInit() {

    this.articleService.getArticles().then(res => {
      this.articles = res.map(article => {
        return {
          title : article.title,
          description: article.description,
          votes: article.votes || 0,
          content: article.content,
          publishedAt: article.publishedAt,
          urlToImage: article.urlToImage
        };
      });
      console.log(res);
    });
  }

}
