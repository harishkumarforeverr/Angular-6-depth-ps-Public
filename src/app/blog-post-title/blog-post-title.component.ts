import { Component, Input, OnInit } from '@angular/core';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-blog-post-title',
  templateUrl: './blog-post-title.component.html',
  styleUrls: ['./blog-post-title.component.scss'],
})
export class BlogPostTitleComponent implements OnInit {
  @Input() title: string = '';
  @Input() summary: string = '';
  fulllSummary: string = '';
  constructor(private trun: TruncatePipe) {}

  ngOnInit(): void {
    this.fulllSummary = this.summary;
    this.summary = String(this.trun.transform(this.summary));
  }
  expandtheText() {
    this.summary = this.fulllSummary;
  }
}
