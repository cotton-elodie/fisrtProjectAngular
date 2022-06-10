import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap []
  // mySnap!: FaceSnap;
  // myOtherSnap!: FaceSnap;
  // myLastSnap!: FaceSnap;

  ngOnInit(): void {
    this.faceSnaps = 
    [{
      title: 'Harry Potter',
      description: 'Sorcier orphelin élevé sans affection ni considération par la seule famille vivante qui lui reste : son oncle et sa tante moldus (sans pouvoirs magiques). Le garçon découvre son identité de sorcier, son héritage tragique et la responsabilité qui lui revient.',
      imageURL: 'https://cdn.pixabay.com/photo/2020/04/17/15/01/harry-potter-5055509_960_720.jpg',
      createDate: new Date(),
      snaps: 118,
      location: 'Londres'
    },
    {
      title: 'Poudlard',
      description: 'Chateau et école de Harry Potter',
      imageURL: 'https://cdn.pixabay.com/photo/2016/01/10/19/36/harry-potter-1132337_960_720.jpg',
      createDate: new Date(),
      snaps: 50,
      location: ''
    },
    {
      title: 'Hermione',
      description: 'Ami de Harry Potter',
      imageURL: 'https://cdn.pixabay.com/photo/2019/07/18/12/24/hermione-granger-4346324_960_720.jpg',
      createDate: new Date(),
      snaps: 110,
      location: 'Angleterre'
    },
    {
      title: 'Harry Potter',
      description: 'Sorcier orphelin élevé sans affection ni considération par la seule famille vivante qui lui reste : son oncle et sa tante moldus (sans pouvoirs magiques). Le garçon découvre son identité de sorcier, son héritage tragique et la responsabilité qui lui revient.',
      imageURL: 'https://cdn.pixabay.com/photo/2020/04/17/15/01/harry-potter-5055509_960_720.jpg',
      createDate: new Date(),
      snaps: 200,
      location: 'Londres'
    },
    {
      title: 'Poudlard',
      description: 'Chateau et école de Harry Potter',
      imageURL: 'https://cdn.pixabay.com/photo/2016/01/10/19/36/harry-potter-1132337_960_720.jpg',
      createDate: new Date(),
      snaps: 0,
      location: ''
    },
    {
      title: 'Hermione',
      description: 'Ami de Harry Potter',
      imageURL: 'https://cdn.pixabay.com/photo/2019/07/18/12/24/hermione-granger-4346324_960_720.jpg',
      createDate: new Date(),
      snaps: 180,
      location: 'Angleterre'
    }
  ];

   

    

  }
}
