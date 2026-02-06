import { PostsService } from './../../services/posts-service';
import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  imports: [RouterLink],
  templateUrl: './categories.html',
  styleUrl: './categories.css',
})
export class Categories implements OnInit {
  categories: Category[] = [];
  constructor(
    private categoriesService: PostsService,
  ) {}

  ngOnInit(): void {
    this.categories = this.categoriesService.getCategories();
  }

}
