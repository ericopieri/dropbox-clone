import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
import { getDatabase, push, ref, onValue } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-database.js";
const firebaseConfig = {
	apiKey: "AIzaSyBosYnPD3SHv3kt1ngGmuMOVbAY4lP0X6w",
	authDomain: "dropboxclone-567a6.firebaseapp.com",
	projectId: "dropboxclone-567a6",
	storageBucket: "dropboxclone-567a6.appspot.com",
	messagingSenderId: "1059032098020",
	appId: "1:1059032098020:web:00ea862405b53607a7b8f1",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase();

window.app = new DropBoxController(database, { ref, push, onValue });
