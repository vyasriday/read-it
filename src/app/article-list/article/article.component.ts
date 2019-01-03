import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  // FOR ARTICLE COMPONENT article is an input property which  will be set by the parent component
  @Input() article;

  constructor() { }

  upvote() {
    this.article.votes += 1;
  }

  downvote() {
    this.article.votes -= 1;
  }
  ngOnInit() {
  }

}
