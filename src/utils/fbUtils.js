import { CONFIG } from "./";
import { getDatabase, ref } from "firebase/database";

export const getData = (table) => {
  const path = table ? `${CONFIG.BASE_FB}/${table}` : CONFIG.BASE_FB;
  const db = getDatabase();
  const responseRef = ref(db, path);

  return responseRef;
}