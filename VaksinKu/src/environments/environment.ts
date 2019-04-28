// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiVaksinku: 'http://apivaksinku.atspace.cc/db_connect.php',
  apiUrl: 'https://newsapi.org/v2',
  apiKey: '3322d4d84cd24bb0a1270b2bc25110d1',
  firebase: {
    apiKey: "AIzaSyCX1X7_2xX-LImhR8pNAkXmnOBAYqcp2sw",
    authDomain: "vaksinku-rpl.firebaseapp.com",
    databaseURL: "https://vaksinku-rpl.firebaseio.com",
    projectId: "vaksinku-rpl",
    storageBucket: "vaksinku-rpl.appspot.com",
    messagingSenderId: "904129342205"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
