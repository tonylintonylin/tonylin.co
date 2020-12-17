import { Component, OnInit, ViewChild } from '@angular/core';
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  @ViewChild('tw2') typewriterElement2;
  @ViewChild('tw3') typewriterElement3;

  ngOnInit() {
     target2 = this.typewriterElement2.nativeElement;
     target3 = this.typewriterElement3.nativeElement;

    const writer2 = new Typewriter(target2, {
      typeColor: 'blue',
    });
    const writer3 = new Typewriter(target3, {
      typeColor: 'red',
    });

    writer2
      .type('I love ')
      .removeCursor()
      .then(writer3.start.bind(writer3))
      .start();

    writer3
      .type('reading books')
      .rest(500)
      .clear()
      .changeTypeColor('red')
      .type('building things')
      .rest(500)
      .clear()
      .changeTypeColor('blue')
      .type('improving')
      .rest(500)
      .clear()
      .changeTypeColor('black')
      .then(writer2.start.bind(writer2));
  }
}
