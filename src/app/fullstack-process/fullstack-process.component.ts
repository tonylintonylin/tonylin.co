import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-fullstack-process',
  templateUrl: './fullstack-process.component.html',
  styleUrls: ['./fullstack-process.component.scss'],
})
export class FullstackProcessComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    let options = {
      strings: ['code.', 'design.', 'experience.'],
      typeSpeed: 50,
      backSpeed: 30,
      showCursor: true,
      cursorChar: '|',
      loop: true,
    };

    let typed = new Typed('.typing-element', options);
  }
}
