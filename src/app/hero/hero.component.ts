import { Component, OnInit } from '@angular/core';
// import * as Typed from 'typed.js';
import Typed from 'typed.js';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    let options = {
      strings: [
        'reading books.',
        'building things.',
        'learning stuff.',
        'optimizing stuff.',
      ],
      typeSpeed: 50,
      backSpeed: 50,
      showCursor: true,
      cursorChar: '|',
      loop: true,
    };

    let typed = new Typed('.typing-element', options);
  }
}
