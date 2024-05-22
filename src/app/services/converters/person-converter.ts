import {
  QueryDocumentSnapshot,
  SnapshotOptions,
} from '@angular/fire/firestore';
import { Person } from '../../shared/model/person';
import { PhoneNumber } from '../../shared/model/phone-number';

// Firestore data converter
export const personConverter = {
  toFirestore: (person: Person) => {
    const simplePhones = [];

    for (const phone of person.phones) {
      const simplePhone = {
        number: phone.number,
        type: phone.type,
      };
      simplePhones.push(simplePhone);
    }

    return {
      firstName: person.firstName,
      lastName: person.lastName,
      age: person.age,
      email: person.email,
      phones: simplePhones,
    };
  },
  fromFirestore: (
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ) => {
    const simplePerson = snapshot.data();

    const personObj = new Person(
      snapshot.id,
      simplePerson['firstName'],
      simplePerson['lastName'],
      simplePerson['email'],
      simplePerson['age']
    );

    const phonesObj = [];

    if (simplePerson['phones']) {
      for (let i = 0; i < simplePerson['phones'].length; ++i) {
        const phone = simplePerson['phones'][i];
        const phoneObj = new PhoneNumber(phone['number'], phone['type']);
        phonesObj.push(phoneObj);
      }

      personObj.phones = phonesObj;
    }

    return personObj;
  },
};
