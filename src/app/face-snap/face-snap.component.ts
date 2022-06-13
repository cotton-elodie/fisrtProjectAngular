import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
//propriété personnalisée est rendue injectable depuis l'extérieur grâce au décorateur @Input
  @Input() faceSnap!: FaceSnap;

  buttonText!: string
constructor ( private faceSnapsServices: FaceSnapService,
              private router: Router){}
  ngOnInit(): void {
    this.buttonText = 'Oh Snap';
  }

  onClickSnap() {
    if (this.buttonText === 'Oh Snap') {
      this.faceSnapsServices.snapFaceSnapById(this.faceSnap.id, 'snap')
      this.buttonText = 'Oops, unSnap!'
    } else {
      this.faceSnapsServices.snapFaceSnapById(this.faceSnap.id, 'unsnap')
      this.buttonText = 'Oh Snap';
    }

  }

  onViewFaceSnap(){
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
