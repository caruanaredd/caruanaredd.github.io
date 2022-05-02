import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tutorial } from '../struct';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class TutorialsService extends BaseService<any>
{
  categories: Map<string, Tutorial[]> = new Map();

  constructor(
    protected http: HttpClient
  ) {
    super(http);
    this.folder = 'tutorials';
  }

  async init()
  {
    await super.init();
    
    this.categories.set('Other', []);
    for (let tutorial of this.data)
    {
      if (!tutorial.category)
      {
        this.categories.get('Other')?.push(tutorial);
        continue;
      }

      const categories: string[] = tutorial.category;
      for (let category of categories)
      {
        if (this.categories.has(category)) this.categories.get(category)?.push(tutorial);
        else this.categories.set(category, [tutorial]);
      }
    }
  }

  getAll(): Map<string, Tutorial[]>
  { return this.categories; }
}
