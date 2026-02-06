import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts-service';
import { Post } from '../../models/article.interface';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-latest-articles',
  imports: [RouterLink],
  templateUrl: './latest-articles.html',
  styleUrl: './latest-articles.css',
})
export class LatestArticles implements OnInit{
  posts:Post[]=[];
  constructor(private postsService:PostsService) {}

  ngOnInit(): void {
    this.posts = this.postsService.getRecentPosts();
  }
}
