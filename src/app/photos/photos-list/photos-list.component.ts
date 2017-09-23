import { Component, OnInit } from '@angular/core';
import { Photo } from '../photos.model';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit {
  photos: Photo[] = [
  	new Photo('A test Recipe', 'This is simply a test', 'https://c1.staticflickr.com/9/8105/8533102693_65a61f7e25_b.jpg', 'home'),
 	new Photo('A test Recipe', 'This is simply a test', 'https://c1.staticflickr.com/9/8105/8533102693_65a61f7e25_b.jpg', 'home') 	
  ];  

  constructor() { }

  ngOnInit() {
  }

}
