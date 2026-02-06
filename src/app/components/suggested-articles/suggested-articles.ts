import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts-service';
import { Post } from '../../models/article.interface';
import { RouterLink } from '@angular/router';
import { CategoryEnum } from '../../models/category.enum';

@Component({
  selector: 'app-suggested-articles',
  imports: [RouterLink],
  templateUrl: './suggested-articles.html',
  styleUrl: './suggested-articles.css',
})
export class SuggestedArticles implements OnInit {
  @Input()category?:CategoryEnum;
  @Input()id?:number;
  posts:Post[]=[];

  constructor(private postsService:PostsService){}

  ngOnInit(): void {
    if(this.category){
    this.posts = this.postsService.getSuggestedPosts(this.category,this.id);
    }
  }

}
