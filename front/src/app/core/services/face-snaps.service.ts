import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, switchMap } from "rxjs";
import { FaceSnap } from "../models/face-snap.model";

@Injectable(
    {
        providedIn: 'root'
    }
)
export class FaceSnapService {

    constructor(private http: HttpClient) { }

    // faceSnaps: FaceSnap[] =
    //     [{
    //         id: 1,
    //         title: 'Harry Potter',
    //         description: 'Sorcier orphelin élevé sans affection ni considération par la seule famille vivante qui lui reste : son oncle et sa tante moldus (sans pouvoirs magiques). Le garçon découvre son identité de sorcier, son héritage tragique et la responsabilité qui lui revient.',
    //         imageURL: 'https://cdn.pixabay.com/photo/2020/04/17/15/01/harry-potter-5055509_960_720.jpg',
    //         createDate: new Date(),
    //         snaps: 118,
    //         location: 'Londres'
    //     },
    //     {
    //         id: 2,
    //         title: 'Poudlard',
    //         description: 'Chateau et école de Harry Potter',
    //         imageURL: 'https://cdn.pixabay.com/photo/2016/01/10/19/36/harry-potter-1132337_960_720.jpg',
    //         createDate: new Date(),
    //         snaps: 50,
    //         location: ''
    //     },

    //     {
    //         id: 3,
    //         title: 'Hermione',
    //         description: 'Ami de Harry Potter',
    //         imageURL: 'https://cdn.pixabay.com/photo/2019/07/18/12/24/hermione-granger-4346324_960_720.jpg',
    //         createDate: new Date(),
    //         snaps: 110,
    //         location: 'Angleterre'
    //     },
    //     {
    //         id: 4,

    //         title: 'Harry Potter',
    //         description: 'Sorcier orphelin élevé sans affection ni considération par la seule famille vivante qui lui reste : son oncle et sa tante moldus (sans pouvoirs magiques). Le garçon découvre son identité de sorcier, son héritage tragique et la responsabilité qui lui revient.',
    //         imageURL: 'https://cdn.pixabay.com/photo/2020/04/17/15/01/harry-potter-5055509_960_720.jpg',
    //         createDate: new Date(),
    //         snaps: 200,
    //         location: 'Londres'
    //     },
    //     {
    //         id: 5,
    //         title: 'Poudlard',
    //         description: 'Chateau et école de Harry Potter',
    //         imageURL: 'https://cdn.pixabay.com/photo/2016/01/10/19/36/harry-potter-1132337_960_720.jpg',
    //         createDate: new Date(),
    //         snaps: 0,
    //         location: ''
    //     },
    //     {
    //         id: 6,
    //         title: 'Hermione',
    //         description: 'Ami de Harry Potter',
    //         imageURL: 'https://cdn.pixabay.com/photo/2019/07/18/12/24/hermione-granger-4346324_960_720.jpg',
    //         createDate: new Date(),
    //         snaps: 180,
    //         location: 'Angleterre'
    //     }
    //     ];

    // getAllFaceSnaps(): FaceSnap[] {
    //     return this.faceSnaps;
    // }

    getAllFaceSnaps(): Observable<FaceSnap[]> {
        return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
    }

    //Cette méthode cherche un faceSnap par son id, si l'id n'existe pas on retourne une erreur, sinon on retourne un facesnap

    // getFaceSnapById(faceSnapId: number): FaceSnap {
    //     const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    //     if (!faceSnap) {
    //         throw new Error('FaceSnap not found!')

    //     } else {
    //         return faceSnap;
    //     }
    // }
    getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
        return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`);

    }

    snapFaceSnapById(faceSnapId: number, snapType: string): Observable<FaceSnap> {
        // const faceSnap = this.getFaceSnapById(faceSnapId);
        // snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
        return this.getFaceSnapById(faceSnapId).pipe(
            map(faceSnap => ({
                ...faceSnap,
                snaps: faceSnap.snaps + (snapType === 'snap' ? 1 : -1)
            })),

            switchMap(updatedFaceSnap => this.http.put<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`, updatedFaceSnap))
        );

    }

    addFaceSnap(formValue: { title: string, description: string, imageURL: string, location?: string }): Observable<FaceSnap> {

        return this.getAllFaceSnaps().pipe(
            map(facesnaps => [...facesnaps].sort((a,b) => a.id - b.id)),
            map(sortedFacesnaps => sortedFacesnaps[sortedFacesnaps.length - 1]),
            map(previousFacesnap => ({
                ...formValue,
                snaps: 0,
                createdDate: new Date(),
                id: previousFacesnap.id + 1
            })),
            switchMap(newFaceSnap => this.http.post<FaceSnap>('http://localhost:3000/facesnaps', newFaceSnap))
        );
    }

}









