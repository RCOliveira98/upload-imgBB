import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Image } from 'src/app/models/image.model';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  images: Image[];
  subscriptionImages: Subscription;
  responsiveOptions: any;

  constructor(private servImage: ImageService) { }

  ngOnInit(): void {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
    this.subscriptionImages = this.servImage.selectAll().subscribe(
      res => this.images = res,
      e => console.error(e)
    )
  }

  ngOnDestroy(): void {
    this.subscriptionImages.unsubscribe();
  }

}
