import { Component } from '@angular/core';
import { InavbarLinks } from '../InavbarLinks.interface.js';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public navbarTitle: string = 'Prime Book Shop';
  public navbarLinkList: InavbarLinks[] = [{
    title: 'Dashboard',
    href: '#'
  },
  {
    title: "Today's Deal",
    href: '#',
  },
  {
    title: 'Mobile',
    href: '#',
  },
  {
    title: 'Electronics',
    href: '#',
  },
  {
    title: 'Customer service',
    href: '#',
  },
  {
    title: 'About',
    href: '#',
  },
  ];
}
