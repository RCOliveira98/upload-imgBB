import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Image } from 'src/app/models/image.model';
import { ImageService } from 'src/app/services/image.service';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-image-new',
  templateUrl: './image-new.component.html',
  styleUrls: ['./image-new.component.css']
})
export class ImageNewComponent implements OnInit {

  subscriptionUpload: Subscription;
  subscriptionSave: Subscription;
  upload: any;
  display: boolean;
  image: Image;

  constructor(private servUpload: UploadService, private servImage: ImageService) { }

  ngOnInit(): void {
    this.image = new Image();
    this.display = true;
  }

  myUploader(file): void {
    this.display = false;
    // console.log(file.files[0].objectURL.changingThisBreaksApplicationSecurity);
    this.subscriptionUpload = this.servUpload.uploadImage(file).subscribe(
      res => {
        this.upload = res.data;
        this.image.urlImage = this.upload.url;
        this.register();
        alert('Upload Finalizado!');
      },
      e => console.error(e),
      () => this.display = true
    )
  }

  register(): void {
    this.subscriptionSave = this.servImage.save(this.image).subscribe(
      res => {
        console.log(res);
        alert('Item salvo');
      },
      e => console.error(e)
    );
  }

}
