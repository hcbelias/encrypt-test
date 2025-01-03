import { useState } from "react";

const Index = () => {
  const [state, setState] = useState({
    encryptedText: "",
    decryptedText: "",
  });

  const encryptText = () => {};

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
