// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAGs_aHK5Ul1ineMOU8_Sz14OuWX4bYRU0",
  authDomain: "paulina-c83cd.firebaseapp.com",
  projectId: "paulina-c83cd",
  storageBucket: "paulina-c83cd.appspot.com",
  messagingSenderId: "279120237268",
  appId: "1:279120237268:web:c3de01dc466a587725e141",
  measurementId: "G-032G4L90NQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
const analytics = getAnalytics(app);

export async function uploadFiles(file, name) {
  const storageRef = ref(storage, 'images/' + name)
  return await uploadBytes(storageRef, file)
}

export async function getUrl(name) {
  const storageRef = ref(storage, 'images/' + name)
  const url = await getDownloadURL(storageRef)
  return url
}

export async function deleteImg(name) {
  const desertRef = ref(storage, 'images/' + name);
  // Delete the file
  deleteObject(desertRef).then(() => {
    console.log("se borró la imagen")
  }).catch((error) => {
    console.log("no se borró por: ", error)
  });
}