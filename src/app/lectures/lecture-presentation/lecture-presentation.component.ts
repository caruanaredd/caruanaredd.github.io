import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faAngleRight, faPlay } from '@fortawesome/free-solid-svg-icons';

declare var Reveal: any;
declare var RevealZoom: any, RevealSearch: any, RevealMarkdown: any, RevealHighlight: any;

import * as $ from 'jquery';
import { LecturesService } from 'src/app/services/lectures.service';
import { Lecture } from 'src/app/struct';

@Component({
  selector: 'app-lecture-presentation',
  templateUrl: './lecture-presentation.component.html',
  styleUrls: ['./lecture-presentation.component.scss']
})
export class LecturePresentationComponent implements OnInit, AfterViewInit
{
  // The lecture content.
  lecture: Lecture | undefined;

  faAngleRight: IconDefinition = faAngleRight;

  constructor(
    private route: ActivatedRoute,

    private lectures: LecturesService
  ) { }

  ngOnInit(): void
  {
    const slug = this.route.parent?.snapshot.params.slug;
    this.lecture = this.lectures.get('sample-lecture');

    if (this.lecture === undefined) return;
    console.log(this.lecture);
  }

  ngAfterViewInit(): void
  {
    const reveal = new Reveal({
      progress: true,
      center: false,
      hash: false,
      transition: 'fade',
      transitionSpeed: 'slow',
      width: 1792,
      height: 1120,
      margin: 0,
      minScale: 0.2,
      maxScale: 1,

      plugins: [ RevealZoom, RevealSearch, RevealMarkdown, RevealHighlight ]
    });
    reveal.initialize();
  
    window.onload = () => $('[data-background]').each((i, e) => {
      const background = $(e).attr('data-background');
      $(e).css('background-image', `url(${background})`);
      this.setFloatingWindows(e);
    });
    setTimeout(() => $('.reveal.fade:first-child').addClass('show'), 1);
  }

  setFloatingWindows(e: HTMLElement)
  {
    const imgWidth = Number.parseInt($(e).css('--width')),
          slideWidth = $('.slides').width() || imgWidth,
          scale = slideWidth / imgWidth;
    
      $(e).find('.floating-item').each((i, e) => {
        const width = Number.parseInt($(e).css('--width')),
              height = Number.parseInt($(e).css('--height')),
              x = Number.parseInt($(e).css('--pos-x')),
              y = Number.parseInt($(e).css('--pos-y'));
        
        $(e).css({
          '--scaled-width': width * scale,
          '--scaled-height': height * scale,
          '--scaled-pos-x': x * scale,
          '--scaled-pos-y': y * scale
        });
      });
  }
}
