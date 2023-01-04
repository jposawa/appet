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

export const pegaLocalStorage = (nomeChave, isObject) => {
  const resultado = localStorage.getItem(nomeChave);
  
  return isObject ? JSON.parse(resultado) : resultado;  
};

export const salvaLocalStorage = (nomeChave, valor, isObject) => {
  const valorSalvo = isObject ? JSON.stringify(valor) : valor;

  localStorage.setItem(nomeChave, valorSalvo);
};

export const pegaSessionStorage = (nomeChave, isObject) => {
  const resultado = sessionStorage.getItem(nomeChave);

  return isObject ? JSON.parse(resultado) : resultado;
}

export const salvaSessionStorage = (nomeChave, valor, isObject) => {
  const valorSalvo = isObject ? JSON.stringify(valor) : valor;

  sessionStorage.setItem(nomeChave, valorSalvo);
}