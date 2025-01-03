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
      const decrypted = await decryptString(encrypted);
      setState({ ...state, resultedDecryptedText: decrypted });
    } catch (err: any) {
      alert(err.message);
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
      </div>
    </main>
  );
};

export default Index;
