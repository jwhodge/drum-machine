import './App.css';

function App() {
  return (
    <div className="App">
      <div className="DmWrapper">
        <div className="Interface">
          <div className="Header">
            <h1>OCTAPAD</h1>
          </div>
          <div className="Pad" id="Pad-1"></div>
          <div className="Pad" id="Pad-2"></div>
          <div className="Pad" id="Pad-3"></div>
          <div className="Pad" id="Pad-4"></div>
          <div className="Pad" id="Pad-5"></div>
          <div className="Pad" id="Pad-6"></div>
          <div className="Pad" id="Pad-7"></div>
          <div className="Pad" id="Pad-8"></div>
          <div className="Pad" id="Pad-9"></div>
          <div className="Controls">
            <div className="Logo">
              <p>PAD-9</p>
            </div>
            <div className="Display">
              <p>DISPLAY</p>
            </div>
            <div className="Patch">
              <p>PATCH</p>
            </div>
            <div className="Volume">
              <p>VOLUME</p>
            </div>
            <div className="Power">
              <p>POWER</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
