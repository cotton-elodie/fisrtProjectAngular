import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit  {
  title!: string;
  description!: string;
  createDate!: Date;
  snaps!: number;
  imageURL! : string;
  buttonText! : string

  ngOnInit(): void {
    this.title = 'Harry Potter';
    this.description = 'Sorcier orphelin élevé sans affection ni considération par la seule famille vivante qui lui reste : son oncle et sa tante moldus (sans pouvoirs magiques). Le garçon découvre son identité de sorcier, son héritage tragique et la responsabilité qui lui revient.';
    this.createDate = new Date();
    this.snaps = 3;
    this.imageURL = 'https://cdn.pixabay.com/photo/2020/04/17/15/01/harry-potter-5055509_960_720.jpg';
    this.buttonText = 'Oh Snap';
  }

  onClickSnap(){
    if (this.buttonText === 'Oh Snap'){
      this.snaps++;
      this.buttonText = ' Oops, unSnap'
    } else {
      this.snaps--;
      this.buttonText = 'Oh Snap';

    }
    
  }
}
