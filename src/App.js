import './App.css';
import './style.css';
import saveAs from 'file-saver';
import { useState } from 'react';

function App() {
  const [template, setTemplate] = useState('oag');
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');

  const memeUrl = `https://api.memegen.link/images/${template}/${topText}/${bottomText}.jpg`;
  function fileSaver() {
    saveAs(memeUrl, 'saved meme.jpg');
  }
  return (
    <div>
      <div>
        <h1>Meme generator</h1>
      </div>

      <div>
        <label>
          Top text
          <input
            value={topText}
            onChange={(event) => {
              setTopText(event.currentTarget.value);
            }}
          />
        </label>
      </div>
      <label>
        Bottom text
        <input
          value={bottomText}
          onChange={(event) => {
            setBottomText(event.currentTarget.value);
          }}
        />
      </label>

      <div>
        <label>
          Choose Meme template
          <input
            value={template}
            onChange={(event) => {
              setTemplate(event.currentTarget.value);
            }}
          />
        </label>
        <ul>
          Some suggestions for memes:
          <br />
          <li>type 'ams' for Awkward moment seal</li>
          <li>type 'biw' for Baby insanity wolf</li>
          <li>type 'db' for Distracted boyfriend</li>
          <li>type 'drunk' for Drunk baby</li>
          <li>type 'ermg' for Ermahgerd</li>
          <li>type 'gandalf' for Confused Gandalf</li>
          <li>type 'grumpycat' for Grumpy Cat</li>
        </ul>
      </div>
      <img src={memeUrl} alt="meme" data-test-id="meme-image" />

      <div>
        <button onClick={fileSaver}>Download meme</button>
      </div>
    </div>
  );
}

export default App;
