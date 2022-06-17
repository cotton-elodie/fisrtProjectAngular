import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snaps.service';



@Component({
  selector: 'app-new-face-snap',
  templateUrl: './new-face-snap.component.html',
  styleUrls: ['./new-face-snap.component.scss']
})
export class NewFaceSnapComponent implements OnInit {

  snapForm!: FormGroup;
  faceSnapPrewiew$!: Observable<FaceSnap>;

  constructor(private formBuilder: FormBuilder,
              private faceSnapsService: FaceSnapService,
              private router: Router
    ) { }

  ngOnInit(): void {
    this.snapForm = this.formBuilder.group({
      title: [null],
      description: [null],
      imageURL: [null],
      location: [null]
    });
    this.faceSnapPrewiew$ = this.snapForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        createDate: new Date(),
        id: 0,
        snaps: 0
      }))
    );
  }


  onSubmitForm(){
    this.faceSnapsService.addFaceSnap(this.snapForm.value).pipe(
      tap(() => this.router.navigateByUrl('facesnaps'))
    ).subscribe();
  }
}
