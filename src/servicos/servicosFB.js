import { CONFIG } from "../utils";
import { getDatabase, ref } from "firebase/database";

export const getData = (tabela) => {
  const path = tabela ? `${CONFIG.BASE_FB}/${tabela}` : CONFIG.BASE_FB;
  const db = getDatabase();
  const respostaRef = ref(db, path);

  return respostaRef;
}