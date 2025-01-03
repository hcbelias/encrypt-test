import { useState } from "react";
import encryptString from "@/encrypt";

const Index = () => {
  const [state, setState] = useState({
    encryptedText: "",
    decryptedText: "",
  });

  const encryptText = async () => {
    try {
      const encrypted = await encryptString(state.decryptedText);
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
