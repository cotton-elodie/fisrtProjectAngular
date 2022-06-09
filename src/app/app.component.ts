import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit(): void {
    this.mySnap = new FaceSnap(
      'Harry Potter',
      'Sorcier orphelin élevé sans affection ni considération par la seule famille vivante qui lui reste : son oncle et sa tante moldus (sans pouvoirs magiques). Le garçon découvre son identité de sorcier, son héritage tragique et la responsabilité qui lui revient.',
      'https://cdn.pixabay.com/photo/2020/04/17/15/01/harry-potter-5055509_960_720.jpg',
      new Date(),
      0
    );

    this.myOtherSnap = new FaceSnap(
      'Poudlard',
      'Chateau et école de Harry Potter',
      'https://cdn.pixabay.com/photo/2016/01/10/19/36/harry-potter-1132337_960_720.jpg',
      new Date(),
      0
    );

    this.myLastSnap = new FaceSnap(
      'Hermione',
      'Ami de Harry Potter',
      'https://cdn.pixabay.com/photo/2019/07/18/12/24/hermione-granger-4346324_960_720.jpg',
      new Date(),
      0
    );

  }
}
