export const APP_PREFIX = "appet#";

export const CONFIG = {
  BASE_FB: "appet",
  FB_CONFIG: {
    apiKey: "AIzaSyDtP73MjGbNPnMvyF8HQzhP_6ytRUQb2AQ",
    authDomain: "jprojetos.firebaseapp.com",
    projectId: "jprojetos",
    storageBucket: "jprojetos.appspot.com",
    messagingSenderId: "922019620365",
    appId: "1:922019620365:web:96009d941d2f59b27c1744",
    measurementId: "G-XS2SJJ4J51"
  },
};

// export * from "./fbUtils.js";

export const getLocalStorage = (keyName, isObject) => {
  const result = localStorage.getItem(keyName);
  
  return isObject ? JSON.parse(result) : result;  
};

export const setLocalStorage = (keyName, value, isObject) => {
  const savedValue = isObject ? JSON.stringify(value) : value;

  localStorage.setItem(keyName, savedValue);
};