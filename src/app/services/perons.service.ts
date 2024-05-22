import { Injectable } from '@angular/core';
import { Person } from '../shared/model/person';
import { DocumentSnapshot, Firestore, QuerySnapshot, addDoc, collection, getDocs } from '@angular/fire/firestore';
import { personConverter } from './converters/person-converter';

@Injectable({
  providedIn: 'root'
})
export class PeronsService {
  constructor(private firestoreService : Firestore) { }

  async list() : Promise<Person[]> {
    const personCollection = collection(this.firestoreService, "people").withConverter(personConverter)

    const querySnapshot : QuerySnapshot<Person> = 
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

    return result;
  }

  get(id : string) : Person | undefined {
    return undefined;
  }

  async add(newPersonData:Person) {
    const personCollection = collection(this.firestoreService, "people").withConverter(personConverter)

    return await addDoc(personCollection, newPersonData)
  }
 
  update(existingPerson : Person) : void {
    
  }

  delete(existingPersonId : string) : void {
    
  }
}
