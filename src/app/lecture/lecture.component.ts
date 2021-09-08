import { Component, OnInit } from '@angular/core';

declare var Reveal: any;

@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrls: ['./lecture.component.scss']
})
export class LectureComponent implements OnInit
{

  constructor() { }

  ngOnInit(): void
  {
    const reveal = new Reveal();
    reveal.initialize();
  }

}
