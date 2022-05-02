import { Component, OnInit } from '@angular/core';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Page } from 'src/app/struct';

@Component({
  selector: 'redd-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent
{
  // The footer links.
  footer: Page[] = [
    { name: 'Instagram', url: 'https://www.fb.me/redd.caruana', icon: faFacebookF, target: 'external' },
    { name: 'Instagram', url: 'https://www.instagram.com/redd.caruana', icon: faInstagram, target: 'external' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/redd-caruana', icon: faLinkedinIn, target: 'external' }
  ];

  // The current date.
  year: number = (new Date()).getFullYear();
}
