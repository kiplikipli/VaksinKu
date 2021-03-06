// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiVaksinku: 'http://apivaksinku.atspace.cc/db_connect.php',
  apiUrl: 'https://newsapi.org/v2',
  apiKey: '3322d4d84cd24bb0a1270b2bc25110d1',
  firebase: {
    apiKey: "AIzaSyCDimL9ToJzukUCTQchCKs1hWojpujHz_M",
    authDomain: "vaksinku-1104f.firebaseapp.com",
    databaseURL: "https://vaksinku-1104f.firebaseio.com",
    projectId: "vaksinku-1104f",
    storageBucket: "vaksinku-1104f.appspot.com",
    messagingSenderId: "917995819797"
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
