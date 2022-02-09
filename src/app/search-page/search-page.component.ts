import { Component, OnInit } from '@angular/core';
import { ImageServiceService } from '../services/image-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
_imageService: ImageServiceService;
hasResult: boolean= false;
router: Router;
form: any;
isError: boolean = false;
  constructor(imageService: ImageServiceService, router: Router) {
    this._imageService = imageService;
    
    this.router = router;
  }

  ngOnInit(): void {
    if(this._imageService.query != ""){
      this.searchImages(this._imageService.query)
    }
  }

  ngOnDestroy() {
  }

  handleSuccess(data) {
    this.hasResult = true;
    this._imageService.images = data.hits;
  }

  handleError(error) {
    this.isError = true;
  }

  searchImages(query: string){
    this.hasResult = false;
    this._imageService.query = query;
    return this._imageService.getImages(query).subscribe(
      data => this.handleSuccess(data),
      error => this.handleError(error)
    )
  }
}
