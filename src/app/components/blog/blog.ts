import { Component, inject, OnInit } from '@angular/core';
import { ArticleCard } from '../article-card/article-card';
import { Category } from '../../models/category.interface';
import { PostsService } from '../../services/posts-service';
import { Post } from '../../models/article.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ArticleCardList } from "../article-card-list/article-card-list";

@Component({
  selector: 'app-blog',
  imports: [ArticleCard, FormsModule, ArticleCardList],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog implements OnInit {
  categories: Category[] = [];
  allPosts: Post[] = [];
  posts: Post[] = [];
  pagedPosts: Post[] = [];
  activeCategory: string = 'all';
  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 6;
  totalPages: number = 1;
  view:string="grid";

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.allPosts = this.postsService.getPosts();
    this.categories = this.postsService.getCategories();

    this.route.paramMap.subscribe((params) => {
      const category = params.get('category');

      if (category) this.filterPosts(category);
      else this.setPosts();
    });
    this.loadPagePosts();
  }
  setPosts() {
    this.activeCategory = 'all';
    this.posts = this.allPosts;
    this.totalPages = Math.ceil(this.allPosts.length / this.itemsPerPage);
  }
  resetPosts() {
    this.posts = this.allPosts;
    this.activeCategory = 'all';
    this.totalPages = Math.ceil(this.allPosts.length / this.itemsPerPage);
  }

  filterPosts(category: string) {
    this.currentPage = 1;
    this.posts = this.allPosts.filter((post) => post.category == category);
    this.activeCategory = category;
    this.totalPages = Math.ceil(this.posts.length / this.itemsPerPage);
    this.loadPagePosts();
  }
  searchPosts() {
    this.currentPage = 1 ;
    if (this.searchTerm) {
      this.posts = this.allPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchTerm.toLowerCase()),
      );
      this.totalPages = Math.ceil(this.posts.length / this.itemsPerPage);
    } else this.filterPosts(this.activeCategory);
    this.loadPagePosts();
  }
  loadPagePosts() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.pagedPosts = this.posts.slice(start, end);
  }
  getNextPage(pageNumber:number){
    this.currentPage = pageNumber ;
    this.loadPagePosts();
  }
  // this is because totalPages is a number and it's not iteratable for the @for loop
  get pages(): number[] {
  return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  changeView(view:string){
    this.view = view ;
  }
}
