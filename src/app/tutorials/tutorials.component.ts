import { Component, OnInit } from '@angular/core';
import { TutorialsService } from '../services/tutorials.service';
import { Tutorial } from '../struct';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.scss']
})
export class TutorialsComponent implements OnInit
{
  // The tutorials available to this component.
  tutorials: Map<string, Tutorial[]> = new Map();

  constructor(
    private service: TutorialsService
  ) { }

  ngOnInit(): void
  {
    this.tutorials = this.service.getAll();
  }
}