import { Injectable } from '@angular/core';
import { Person } from '../shared/model/person';
import {
  DocumentSnapshot,
  Firestore,
  QuerySnapshot,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from '@angular/fire/firestore';
import { personConverter } from './converters/person-converter';

@Injectable({
  providedIn: 'root',
})
export class PeronsService {
  constructor(private firestoreService: Firestore) {}

  async list(): Promise<Person[]> {
    const personCollection = collection(
      this.firestoreService,
      'people'
    ).withConverter(personConverter);

    return getDocs(personCollection).then((querySnapshot: QuerySnapshot<Person>) => {
      const result: Person[] = [];

      querySnapshot.docs.forEach((doc: DocumentSnapshot<Person>) => {
        if (doc.data()) {
          result.push(doc.data()!);
        }
      });

      return result;
    });
    /*const querySnapshot : QuerySnapshot<Person> = 
      await getDocs(personCollection);

    const result : Person[] = []

    querySnapshot.docs.forEach(
      (doc : DocumentSnapshot<Person>) =>
        {
          if (doc.data()) {
            result.push(doc.data()!)
          }
        }
    );

    return result;*/
  }

  async get(id: string): Promise<Person | undefined> {
    const personCollection = collection(
      this.firestoreService,
      'people'
    ).withConverter(personConverter);

    const personDocRef = doc(personCollection, id)
    return (await getDoc(personDocRef)).data();
  }

  async add(newPersonData: Person) {
    const personCollection = collection(
      this.firestoreService,
      'people'
    ).withConverter(personConverter);

    return addDoc(personCollection, newPersonData);
  }

  async update(existingPerson: Person) {
    const personCollection = collection(
      this.firestoreService,
      'people'
    ).withConverter(personConverter);

    const personDocRef = doc(personCollection, existingPerson.id)
    return await setDoc(personDocRef, existingPerson);
  }

  async delete(existingPersonId: string) {
    const personCollection = collection(
      this.firestoreService,
      'people'
    ).withConverter(personConverter);

    const personDocRef = doc(personCollection, existingPersonId)
    return deleteDoc(personDocRef);
  }
}
