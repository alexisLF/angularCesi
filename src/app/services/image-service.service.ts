import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {
private client: HttpClient;

private URL: string =  "https://pixabay.com/api/?key=";
private KEY : string = "15210824-3845033afa450d7e6c63aec8e";
private perPage: string = "&per_page=20";
images: any[];
page: number;
query: string = "";

  constructor(http: HttpClient) {
    this.client = http;
    this.page = 1;
  }


  getImages(query: string) {
    return this.client.get(this.URL + this.KEY + "&page=" + this.page + "&q=" + query + this.perPage);
  }

  getPage(): number{
    return this.page;
  }
}
