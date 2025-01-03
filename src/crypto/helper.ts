
// from https://developers.google.com/web/updates/2012/06/How-to-convert-ArrayBuffer-to-and-from-String
export const stringToArrayBuffer = (str: string) => {
    const buf = new ArrayBuffer(str.length);
    const bufView = new Uint8Array(buf);
    for (let i = 0, strLen = str.length; i < strLen; i++) {
        bufView[i] = str.charCodeAt(i);
    }
    return buf;
};

export const arrayBufferToString = (buffer: ArrayBuffer) => {
    return String.fromCharCode(...new Uint8Array(buffer));
};
