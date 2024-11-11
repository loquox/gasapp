// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { createClient } from "@supabase/supabase-js";

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyBWSi24ZfeiUDl1-7_IhT7BYsC4AxMKwG8",
    authDomain: "gdi-places-app-1b5ea.firebaseapp.com",
    projectId: "gdi-places-app-1b5ea",
    storageBucket: "gdi-places-app-1b5ea.appspot.com",
    messagingSenderId: "178871412525",
    appId: "1:178871412525:web:08805f3701349c5f2cd5a4",
    measurementId: "G-5WC086YNNP"
  },

  
  supabaseConfig: {
    url: 'https://ekwxybrrnohxoyvwxmcu.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVrd3h5YnJybm9oeG95dnd4bWN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA4MDA5NDAsImV4cCI6MjA0NjM3Njk0MH0.RwKfMT9caudHOSzBqN2wAu4M8pQADKkyFlae1CkX5Jk'
  },

  get supabase() {
    return createClient(this.supabaseConfig.url, this.supabaseConfig.anonKey);
  }
};









/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
