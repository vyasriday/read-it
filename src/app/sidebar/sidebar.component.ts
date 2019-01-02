import { ArticleService } from './../article.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  sources: any;
  constructor(
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    this.sources = this.articleService.getSources();
  }

}
