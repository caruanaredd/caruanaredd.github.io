import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Page } from 'src/app/struct';

@Component({
  selector: 'redd-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit
{
  @ViewChild('sidebar', { static: true }) sidebarRef: ElementRef | undefined;

  // Navbar pagesp.
  navbar: Page[] = [
    { name: 'Home', url: '', target: 'internal' },
    { name: 'Lectures', url: '/lectures', target: 'internal' },
    { name: 'Tutorials', url: '/tutorials', target: 'internal' },
    { name: 'Portfolio Website', url: 'http://reddcaruana.com/', target: 'external' }
  ];

  // The FontAwesome icons.
  faBars = faBars;
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void
  { }

  toggleSidebar()
  {
    const sidebar: HTMLElement = this.sidebarRef?.nativeElement;
    const isShowing: boolean = sidebar.classList.contains('show');

    if (isShowing) sidebar.classList.remove('show');
    else sidebar.classList.add('show');
  }
}
