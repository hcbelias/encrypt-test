import { arrayBufferToString } from "./helper";
import { importRsaKey } from "./import-rsa-key";
import { PUBLIC_PEM } from "./public-key";

const decryptString = async (encryptedData: string) => {
  const importedRsaKey = await importRsaKey(PUBLIC_PEM);
  const decrypted = await window.crypto.subtle.decrypt(
    {
      name: "RSA-OAEP",
    },
    importedRsaKey,
    new TextEncoder().encode(encryptedData)
  );

  const decryptedBase64 = window.btoa(arrayBufferToString(decrypted));

  return decryptedBase64;
};


export default decryptString;
