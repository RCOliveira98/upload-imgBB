import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Image } from 'src/app/models/image.model';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-image-search',
  templateUrl: './image-search.component.html',
  styleUrls: ['./image-search.component.css']
})
export class ImageSearchComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  listImages: Image[];

  constructor(private servImages: ImageService) { }

  ngOnInit(): void {
    this.subscription = this.servImages.selectAll().subscribe(
      res => this.listImages = res,
      e => console.error(e)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
