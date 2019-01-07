import { Component, OnInit } from '@angular/core';
import { ArticleService } from './../article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles: any[];
  loading = true;
  oldSourceKey: string;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (this.oldSourceKey === params['sourceKey']) {
        return;
      }
      this.loading = true;
      this.articleService.getArticles(params['sourceKey']).then(res => {
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
        this.loading = false;
      });
    });
  }
}
