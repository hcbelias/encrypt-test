import { PUBLIC_PEM } from "./public-key";

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

// from https://developers.google.com/web/updates/2012/06/How-to-convert-ArrayBuffer-to-and-from-String
const stringToArrayBuffer = (str: string) => {
  const buf = new ArrayBuffer(str.length);
  const bufView = new Uint8Array(buf);
  for (let i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
};

const arrayBufferToString = (buffer: ArrayBuffer) => {
  return String.fromCharCode(...new Uint8Array(buffer));
};

const importRsaKey = (pem: string) => {
  // fetch the part of the PEM string between header and footer
  const pemHeader = "-----BEGIN PUBLIC KEY-----";
  const pemFooter = "-----END PUBLIC KEY-----";
  const pemContents = pem.substring(pemHeader.length, pem.length - pemFooter.length - 1);
  // base64 decode the string to get the binary data
  const binaryDerString = window.atob(pemContents);
  // convert from a binary string to an ArrayBuffer
  const binaryDer = stringToArrayBuffer(binaryDerString);

  return window.crypto.subtle.importKey(
    "spki",
    binaryDer,
    {
      name: "RSA-OAEP",
      hash: "SHA-256",
    },
    true,
    ["encrypt"]
  );
};

export default encryptString;
