import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lecture } from '../struct';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class LecturesService extends BaseService<Lecture>
{
  constructor(
    protected http: HttpClient
  ) {
    super(http);
    this.folder = 'lectures';
  }
}
