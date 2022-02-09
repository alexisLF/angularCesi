import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {
comments: string;
url: string;
downloads: string;
likes: string;
favorites: string;
tags: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    console.log('details')
    this.route
      .queryParams
      .subscribe(params => {
        this.comments = params['comments'];
        this.url = params['url'];
        this.downloads = params['downloads'];
        this.favorites = params['favorites'];
        this.likes = params['likes'];
        this.tags = params['tags'];
      });
  }

}
