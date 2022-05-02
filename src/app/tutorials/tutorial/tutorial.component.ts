import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TutorialsService } from 'src/app/services/tutorials.service';

import { Tutorial } from 'src/app/struct';
import { Lexer } from '../../lexer';
import * as $ from 'jquery';

declare var hljs: any;

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit, AfterViewInit
{
  // The tutorial content.
  tutorial: Tutorial | undefined;

  // The tutorial date.
  date: Date = new Date();

  // The update date.
  updated: Date | null = null;

  constructor(
    private route: ActivatedRoute,
    
    private tutorials: TutorialsService
  ) { }

  ngOnInit(): void
  {
    const slug = this.route.snapshot.params.slug;
    this.tutorial = this.tutorials.get(slug);

    if (this.tutorial === undefined) return;

    this.date = new Date(this.tutorial.date.year, this.tutorial.date.month - 1, this.tutorial.date.day);
    this.updated = this.tutorial.updated ? new Date(this.tutorial.updated.year, this.tutorial.updated.month - 1, this.tutorial.updated.day) : null;

    const lexer: Lexer = new Lexer();
    this.tutorial.content = lexer.parse(this.tutorial.content);
  }

  ngAfterViewInit(): void
  {
    hljs.highlightAll();
    hljs.initLineNumbersOnLoad({
      singleLine: true
    });
  }
}
