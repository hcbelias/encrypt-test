import { useState } from "react";

const Index = () => {
  const [state, setState] = useState({
    encryptedText: "",
    decryptedText: "",
  });

  return (
    <main>
      <h1>Encrypt</h1>
      <input
        type="text"
        placeholder="Enter text to encrypt"
        value={state.encryptedText}
        onChange={(e) => setState({ ...state, encryptedText: e.target.value })}
      />
      <button>Encrypt</button>
      <br />
      <h1>Decrypt</h1>
      <input
        type="text"
        placeholder="Enter text to decrypt"
        value={state.decryptedText}
        onChange={(e) => setState({ ...state, decryptedText: e.target.value })}
      />
      <button>Decrypt</button>
    </main>
  );
};

export default Index;
