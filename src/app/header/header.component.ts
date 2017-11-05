import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  hero = 'test';

  constructor() { }

  ngOnInit() {
  }

  heroDeleted(hero: String) {
    hero = hero;
  }
}
