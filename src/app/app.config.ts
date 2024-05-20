import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideAnimations(),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'frontend-final-project-demo',
        appId: '1:1022831664674:web:90178c74ec5861ba80347b',
        storageBucket: 'frontend-final-project-demo.appspot.com',
        apiKey: 'AIzaSyAjhvFYEJcED7CE61awd2R9XxEzU2IU6dU',
        authDomain: 'frontend-final-project-demo.firebaseapp.com',
        messagingSenderId: '1022831664674',
      })
    ),
    provideFirestore(() => getFirestore()),
  ],
};
