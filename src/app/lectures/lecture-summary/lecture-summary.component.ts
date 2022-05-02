import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

import { LecturesService } from 'src/app/services/lectures.service';
import { Lecture } from 'src/app/struct';

@Component({
  selector: 'app-lecture-summary',
  templateUrl: './lecture-summary.component.html',
  styleUrls: ['./lecture-summary.component.scss']
})
export class LectureSummaryComponent implements OnInit
{
  // The lecture content.
  lecture: Lecture | undefined;

  // The tutorial date.
  date: Date = new Date();

  // The update date.
  updated: Date | null = null;

  // The play icon.
  faPlay: IconDefinition = faPlay;

  constructor(
    private route: ActivatedRoute,

    private lectures: LecturesService
  ) { }

  ngOnInit(): void
  {
    const slug = this.route.snapshot.params.slug;
    this.lecture = this.lectures.get('sample-lecture');

    if (this.lecture === undefined) return;
    this.date = new Date(this.lecture.date.year, this.lecture.date.month - 1, this.lecture.date.day);
    this.updated = this.lecture.updated ? new Date(this.lecture.updated.year, this.lecture.updated.month - 1, this.lecture.updated.day) : null;
  }
}