import { Component, Input } from '@angular/core';
import { Post } from '../../models/article.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-article-card-list',
  imports: [RouterLink],
  templateUrl: './article-card-list.html',
  styleUrl: './article-card-list.css',
})
export class ArticleCardList {
  @Input() post!: Post;
}
