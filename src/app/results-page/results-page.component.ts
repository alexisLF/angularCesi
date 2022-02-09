import { Component, OnInit } from '@angular/core';
import { ImageServiceService } from '../services/image-service.service';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.scss']
})
export class ResultsPageComponent implements OnInit {
images: any[];
_imageService: ImageServiceService;
router: Router;
isEmpty: boolean = false;
lastPage: boolean = false;

closeResult: string;

  constructor(imageService: ImageServiceService, router: Router, private modalService: NgbModal) {
    this._imageService = imageService;
    this.images = this._imageService.images;
    this.router = router;
  }

  showModal(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
  }

  viewDetails(image): void {
    this.modalService.dismissAll()
    this.router.navigate(['details-page'], { queryParams: { comments: image.comments, downloads: image.downloads, favorites: image.favorites, url: image.webformatURL, likes: image.likes, tags: image.tags } });
  }

  showPrevious(){
    this._imageService.page -= 1;
    this._imageService.getImages(this._imageService.query).subscribe(
      data => this.handleSuccess(data)
    )
  }

  handleSuccess(data){
    this._imageService.images = data.hits;
    this.images = this._imageService.images;
    if(this.images.length < 10 )
      this.lastPage = true;
  }

  showNext(){
    this._imageService.page += 1;
    this._imageService.getImages(this._imageService.query).subscribe(
      data => this.handleSuccess(data)
    )
  }


  ngOnInit(): void {
    if(this.images.length == 0 )
      this.isEmpty = true;
    if(this.images.length < 10 )
      this.lastPage = true;
    
  }

}
