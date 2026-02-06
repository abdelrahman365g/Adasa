import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PostsService } from '../../services/posts-service';
import { Post } from '../../models/article.interface';
import { SuggestedArticles } from "../suggested-articles/suggested-articles";
interface section {
  label: string;
  content: string;
}
@Component({
  selector: 'app-blog-details',
  imports: [RouterLink, SuggestedArticles],
  templateUrl: './blog-details.html',
  styleUrl: './blog-details.css',
})
export class BlogDetails implements OnInit {
  intro: string = '';
  sections: section[] = [];
  post: Post | undefined;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const postId = params.get('postId');
      if (postId) {
        this.getPost(Number(postId));
        this.splitContent();
      } else {
        this.router.navigate(['notfound']);
      }
    });
  }

  getPost(postId: number) {
    this.post = this.postsService.getPost(postId);
    if (!this.post) {
      this.router.navigate(['notfound']);
      return;
    }
  }

  splitContent() {
    const parts = this.post?.content.split(/\n\n##/);
    if (parts) {
      this.intro = parts[0].trim();
      this.sections = parts.slice(1).map((section) => {
        const lines = section.split('\n\n');
        const label = lines[0].trim();
        const content = lines.slice(1).join('\n\n').trim();

        return { label, content };
      });
    }
  }
}
