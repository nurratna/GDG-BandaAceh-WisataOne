# WisataOne

WisataOne adalah sebuah aplikasi pencarian lokasi wisata di Kota Banda Aceh. Aplikasi ini merupakan final project dari program `Inisiasi Google Developers Group (GDG) Banda Aceh 2018`.


## Technology used
+ Service
	+ Firebase
	+ Maps
		
+ infrastructure
    + Angular Framework
	+ Firebase Authentication (Single sign on gmail)
	+ Firebase Realtime database
    + Firebase Storage
    + Firebase Hosting


## Contributing
### Required
1. Create file `firebase-config.js` in folder `public/controllers`.
2. Add Firebase to your app in `firebase-config.js`
```
// initialize firebase
var config = {
    apiKey: "YOUR_API_KEY",
    authDomain: "your-app.firebaseapp.com",
    databaseURL: "https://your-app.firebaseio.com",
    storageBucket: "your-app.appspot.com"
};

firebase.initializeApp(config);
```
### How to run
+ Install Firebase CLI `$ npm install -g firebase-tools`
+ Access your firebase-projects `$ firebase login`
+ Initialize your site `$ firebase init`
+ Deploy your site `$ firebase deploy     # https://<PROJECT-ID>.firebaseapp.com` or Run local server `$ firebase serve    # http://localhost:5000` 

## Team

+ Cut Dirayati Safira
+ Idham Kasyfi Mulinsky
+ Nur Ratna Sari
+ Reza Muttaqien
+ Teuku Yusran
