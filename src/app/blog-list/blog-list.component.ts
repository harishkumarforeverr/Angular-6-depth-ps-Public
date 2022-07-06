import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../blog-post';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements OnInit {
  blogpost: BlogPost[] = [];
  constructor() {}

  ngOnInit(): void {
    this.blogpost.push(new BlogPost('title 1', 'summary 1'));
    this.blogpost.push(
      new BlogPost(
        'title 2',
        'summary 2summary 2summary 2summary 2summary 2summary 2summary 2summary 2summary 2summary 2summary 2summary 2summary 2summary 2summary 2summary 2summary 2summary 2summary 2summary 2summary 2summary 2summary 2summary 2summary 2summary 2summary 2 '
      )
    );
    this.blogpost.push(new BlogPost('title 3', 'summary 3'));
  }
}
