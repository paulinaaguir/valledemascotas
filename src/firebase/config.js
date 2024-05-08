// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getStorage,ref,uploadBytes,getDownloadURL} from 'firebase/storage';
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyA4W4BET568mbsZW8r2Ayw6QXNY0YXnuCs",
  authDomain: "paulina-4cb34.firebaseapp.com",
  projectId: "paulina-4cb34",
  storageBucket: "paulina-4cb34.appspot.com",
  messagingSenderId: "1093052184574",
  appId: "1:1093052184574:web:5303839ea87f8fe71972af",
  measurementId: "G-1Z7EMRQ38Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
const analytics = getAnalytics(app);

export async function uploadFiles(file,name) {
    const storageRef = ref(storage,'images/'+name)
   return await uploadBytes(storageRef,file)
}

export async function getUrl(name){
  const storageRef = ref(storage,'images/'+name)
 const url = await getDownloadURL(storageRef)
 console.log("🚀 ~ getUrl ~ urreele:", url)
 
 return url
}