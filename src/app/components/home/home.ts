import { Component } from '@angular/core';
import { Hero } from "../hero/hero";
import { FeaturedArticles } from "../featured-articles/featured-articles";
import { Categories } from "../categories/categories";
import { LatestArticles } from "../latest-articles/latest-articles";
import { Contact } from "../contact/contact";

@Component({
  selector: 'app-home',
  imports: [Hero, FeaturedArticles, Categories, LatestArticles, Contact],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
