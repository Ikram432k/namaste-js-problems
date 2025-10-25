//Copy to Clipboard
//problem statement link below
// https://namastedev.com/practice/copy-to-clipboard

import { useState } from 'react';

function CopyClipboard() {
  const [clipBoardText, setClipBoardText] = useState("");
  const [textCopied, setTextCopied] = useState(false);
  const [errmsg, setErrmsg] = useState(false);
  async function handleCopy(value) {
    if (clipBoardText.trim().length > 0) {
      try {
        setTextCopied(true);
        setTimeout(() => {
          setTextCopied(false);
        }, 2000);
        await navigator.clipboard.writeText(value);
      } catch (err) {
        console.error("Failed to copy: ", err);
      }
    } else {
      setErrmsg(true);
    }
  }
  const updatetext = (e) => {
    setErrmsg(false)
    setClipBoardText(e.target.value)
  }
  return (
    <div className="copyToClipboard">
      <h1>Copy to Clipboard</h1>
      <p>Click the button to copy the text</p>

      <div className="copyToClipboard-container">
        <div className="form">
          <label htmlFor="text">
            Enter your text:
            <input
              data-testid="input-field"
              type="text"
              id="text"
              value={clipBoardText}
              onChange={updatetext}
              placeholder="Type Something"
            />
          </label>
          <button
            data-testid="copy-button"
            onClick={() => {
              handleCopy(clipBoardText);
            }}
            className="btn"
          >
            Copy
          </button>
        </div>
        {textCopied ? <p data-testid="copied-message">{"Copied!"
        }</p> : ""}
        {errmsg ? <p data-testid="error-message">{"Type some values to copy"}</p> : ""}
      </div>
    </div>
  );
}

export default CopyClipboard;
