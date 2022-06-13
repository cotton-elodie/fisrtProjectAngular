import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable(
    {
        providedIn: 'root'
    }
)
export class FaceSnapService {

    faceSnaps: FaceSnap[] =
        [{
            id: 1,
            title: 'Harry Potter',
            description: 'Sorcier orphelin élevé sans affection ni considération par la seule famille vivante qui lui reste : son oncle et sa tante moldus (sans pouvoirs magiques). Le garçon découvre son identité de sorcier, son héritage tragique et la responsabilité qui lui revient.',
            imageURL: 'https://cdn.pixabay.com/photo/2020/04/17/15/01/harry-potter-5055509_960_720.jpg',
            createDate: new Date(),
            snaps: 118,
            location: 'Londres'
        },
        {
            id: 2,
            title: 'Poudlard',
            description: 'Chateau et école de Harry Potter',
            imageURL: 'https://cdn.pixabay.com/photo/2016/01/10/19/36/harry-potter-1132337_960_720.jpg',
            createDate: new Date(),
            snaps: 50,
            location: ''
        },

        {
            id: 3,
            title: 'Hermione',
            description: 'Ami de Harry Potter',
            imageURL: 'https://cdn.pixabay.com/photo/2019/07/18/12/24/hermione-granger-4346324_960_720.jpg',
            createDate: new Date(),
            snaps: 110,
            location: 'Angleterre'
        },
        {
            id: 4,

            title: 'Harry Potter',
            description: 'Sorcier orphelin élevé sans affection ni considération par la seule famille vivante qui lui reste : son oncle et sa tante moldus (sans pouvoirs magiques). Le garçon découvre son identité de sorcier, son héritage tragique et la responsabilité qui lui revient.',
            imageURL: 'https://cdn.pixabay.com/photo/2020/04/17/15/01/harry-potter-5055509_960_720.jpg',
            createDate: new Date(),
            snaps: 200,
            location: 'Londres'
        },
        {
            id: 5,
            title: 'Poudlard',
            description: 'Chateau et école de Harry Potter',
            imageURL: 'https://cdn.pixabay.com/photo/2016/01/10/19/36/harry-potter-1132337_960_720.jpg',
            createDate: new Date(),
            snaps: 0,
            location: ''
        },
        {
            id: 6,
            title: 'Hermione',
            description: 'Ami de Harry Potter',
            imageURL: 'https://cdn.pixabay.com/photo/2019/07/18/12/24/hermione-granger-4346324_960_720.jpg',
            createDate: new Date(),
            snaps: 180,
            location: 'Angleterre'
        }
        ];

    getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
    }

    //Cette méthode cherche un faceSnap par son id, si l'id n'existe pas on retourne une erreur, sinon on retourne un facesnap

    getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!faceSnap) {
            throw new Error('FaceSnap not found!')

        } else {
            return faceSnap;
        }
    }

    // cette méthode va nous permettre de rajouter ou d'enlever un snap (par son id)
    snapFaceSnapById(faceSnapId: number, snapType:string): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }
    
    
}
    



    




