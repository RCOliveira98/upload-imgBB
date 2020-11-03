import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import * as imgbbUploader from 'imgbb-uploader'

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private readonly key = '8c4f499f4619d2e3a24fb1d8d1d3bb29';

  constructor(private http: HttpClient) { }

  uploadImage(file): Observable<any> {
    let form = new FormData();
    form.append("image", file.files[0])
    let url = `https://api.imgbb.com/1/upload?key=${this.key}`;
    return this.http.post<any>(url, form);
  }
}
