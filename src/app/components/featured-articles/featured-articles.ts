import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts-service';
import { Post } from '../../models/article.interface';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-featured-articles',
  imports: [RouterLink],
  templateUrl: './featured-articles.html',
  styleUrl: './featured-articles.css',
})
export class FeaturedArticles implements OnInit {
  posts:Post[]=[];
  constructor(private postsService:PostsService){}

  ngOnInit(): void {
    this.posts = this.postsService.getFeaturedPosts();
  }
}
