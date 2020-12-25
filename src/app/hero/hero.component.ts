import { Component, OnInit } from '@angular/core';
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
        'learning.',
        'reading books.',
        'building things.',
        'optimizing stuff.',
        'tinkering with exciting technology.',
      ],
      typeSpeed: 50,
      backSpeed: 30,
      showCursor: true,
      cursorChar: '|',
      loop: true,
    };

    let typed = new Typed('.process-typing-element', options);
  }
}
