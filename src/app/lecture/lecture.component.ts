import { AfterViewInit, Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

declare var Reveal: any;
declare var RevealZoom: any, RevealSearch: any, RevealMarkdown: any, RevealHighlight: any;

import * as $ from 'jquery';

@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrls: ['./lecture.component.scss']
})
export class LectureComponent implements OnInit, AfterViewInit
{
  faAngleRight: IconDefinition = faAngleRight;

  constructor() { }

  ngOnInit(): void
  {
    const reveal = new Reveal({
      progress: true,
      center: false,
      hash: true,
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
  }

  ngAfterViewInit(): void
  {
    window.onload = () => $('[data-background]').each((i, e) => {
      const background = $(e).attr('data-background');
      $(e).css('background-image', `url(${background})`);
      this.setFloatingWindows(e);
    });
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
