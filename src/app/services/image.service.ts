import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../models/image.model';
import { apiUrl } from '../shared/api-url';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  selectAll(): Observable<Image[]> {
    return this.http.get<Image[]>(`${apiUrl}/image`);
  }

  save(image: Image): Observable<Image> {
    return this.http.post<Image>(`${apiUrl}/image`, image);
  }

}
