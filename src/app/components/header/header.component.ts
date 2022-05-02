import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'redd-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit
{
  @Input() type: 'large' | 'narrow' = 'large';

  @Input() title: string = "Header";

  @Input() tagline: string = "This is a blank page";

  constructor() { }

  ngOnInit(): void
  { }

}
