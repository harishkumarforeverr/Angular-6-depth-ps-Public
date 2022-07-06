import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogPostTitleComponent } from './blog-post-title/blog-post-title.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { TruncatePipe } from './truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BlogPostTitleComponent,
    BlogListComponent,
    TruncatePipe,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [TruncatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
