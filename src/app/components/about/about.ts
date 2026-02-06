import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../../services/author-service';
import { Author } from '../../models/author.interface';
@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements OnInit {
  authors:Author[] = [];
  constructor(private authorsService:AuthorsService){}
  ngOnInit(): void {
    this.authors = this.authorsService.getMembers();
  }



}
