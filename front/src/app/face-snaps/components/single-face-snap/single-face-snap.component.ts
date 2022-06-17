import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapService } from '../../../core/services/face-snaps.service';


@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  @Input()
  faceSnap!: FaceSnap;
  buttonText!: string
  faceSnap$!: Observable<FaceSnap>;


  constructor(
    private faceSnapsServices: FaceSnapService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.buttonText = 'Oh Snap';
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapsServices.getFaceSnapById(faceSnapId);
  }

  onClickSnap(faceSnapId: number) {
    if (this.buttonText === 'Oh Snap') {
      this.faceSnap$ = this.faceSnapsServices.snapFaceSnapById(faceSnapId, 'snap').pipe(
        tap(() => {
          this.buttonText = 'Oops, unSnap!'
        })
      )
    } else {
      this.faceSnap$ = this.faceSnapsServices.snapFaceSnapById(faceSnapId, 'unsnap').pipe(
        tap(() => {
          this.faceSnap$ = this.faceSnapsServices.getFaceSnapById(faceSnapId);
          this.buttonText = 'Oh Snap';
        })
      )
    }

  }

  onReturn() {
    this.router.navigateByUrl('facesnaps');
  }
}
