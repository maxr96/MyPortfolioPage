import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navLinks = [
    {path: '/portfolio', label: 'Porfolio'},
    {path: '/cv', label: 'CV'},
    {path: '/contact', label: 'Contact'},
    {path: '/about', label: 'About'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
