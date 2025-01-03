import { decryptString, encryptString } from "@/crypto";
import { useState } from "react";

const Index = () => {
  const [state, setState] = useState({
    encryptedText: "",
    decryptedText: "",
    resultedDecryptedText: "",
  });

  const encryptText = async () => {
    try {
      const encrypted = await encryptString(state.decryptedText);
      setState({ ...state, encryptedText: encrypted });
    } catch (err: any) {
      alert(`Encrypt Error: ${err.message}`);
    }
  };

  const decryptText = async () => {
    try {
      const decrypted = await decryptString(state.encryptedText);
      setState({ ...state, resultedDecryptedText: decrypted });
    } catch (err: any) {
      alert(`Decrypt Error: ${err.message}`);
    }
  };

  return (
    <main>
      <h1>Encrypt</h1>
      <input
        type="text"
        placeholder="Enter text to encrypt"
        value={state.decryptedText}
        onChange={(e) => setState({ ...state, decryptedText: e.target.value })}
      />
      <button onClick={encryptText}>Encrypt</button>
      <div>
        <h2>{state.encryptedText}</h2>
        <button onClick={decryptText}>Decrypt</button>
      </div>
    </main>
  );
};

export default Index;
