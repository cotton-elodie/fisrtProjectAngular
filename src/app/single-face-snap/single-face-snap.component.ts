import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snaps.service';


@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;

  buttonText!: string
  constructor(
    private faceSnapsServices: FaceSnapService,
    private route: ActivatedRoute,
    private router: Router
    ) { }


  ngOnInit(): void {
    this.buttonText = 'Oh Snap';
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsServices.getFaceSnapById(faceSnapId);
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

  onReturn() {
    this.router.navigateByUrl('facesnaps');
  }
}
