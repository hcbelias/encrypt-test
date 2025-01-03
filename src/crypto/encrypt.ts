import { PUBLIC_PEM } from "./public-key";
import { arrayBufferToString } from "./helper";
import { importRsaKey } from "./import-rsa-key";

const encryptString = async (plaintext: string) => {
  const importedRsaKey = await importRsaKey(PUBLIC_PEM);
  const encrypted = await window.crypto.subtle.encrypt(
    {
      name: "RSA-OAEP",
    },
    importedRsaKey,
    new TextEncoder().encode(plaintext)
  );

  const encryptedBase64 = window.btoa(arrayBufferToString(encrypted));

  return encryptedBase64;
};

export default encryptString;
