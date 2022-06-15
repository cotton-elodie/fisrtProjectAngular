import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subject, takeUntil, tap,map } from 'rxjs';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit, OnDestroy {
  faceSnaps!: FaceSnap [];
  private destroy$!: Subject<boolean>

  constructor(private faceSnapService: FaceSnapService) { }

  ngOnInit(): void {
    this.destroy$ = new Subject<boolean>();
   this.faceSnaps = this.faceSnapService.getAllFaceSnaps();

   interval(1000).pipe(
    takeUntil(this.destroy$),
    tap(console.log)
   ).subscribe();

   interval(500).pipe(
    map(value => 2 * (value + 1))
).subscribe();

}

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
  
