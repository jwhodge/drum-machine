import './App.css';

const padArr = [
  {id: "Pad-1", triggerKey: "Q", icon: 'Kick'}, 
  {id: "Pad-2", triggerKey: "W", icon: 'Snare'}, 
  {id: "Pad-3", triggerKey: "E", icon: 'HiHat'}, 
  {id: "Pad-4", triggerKey: "A", icon: 'Tom 1'}, 
  {id: "Pad-5", triggerKey: "S", icon: 'Tom 2'}, 
  {id: "Pad-6", triggerKey: "D", icon: 'Ride'}, 
  {id: "Pad-7", triggerKey: "Z", icon: 'Crash'}, 
  {id: "Pad-8", triggerKey: "X", icon: 'Floor Tom'}, 
  {id: "Pad-9", triggerKey: "C", icon: 'Fill'} 
];

function App() {
  return (
    <div className="App">
      <div className="DmWrapper">
        <div className="Interface">
          <Header />
          <Pad arg={padArr[0]}/>
          <Pad arg={padArr[1]}/>
          <Pad arg={padArr[2]}/>
          <Pad arg={padArr[3]}/>
          <Pad arg={padArr[4]}/>
          <Pad arg={padArr[5]}/>
          <Pad arg={padArr[6]}/>
          <Pad arg={padArr[7]}/>
          <Pad arg={padArr[8]}/>
          <Controls />
        </div>
      </div>
    </div>
  );
}

function Header (){
  return (
          <div className="Header">
            <h1>NONAPAD</h1>
          </div>
  )
}

function Pad (props) {
  const arg = props.arg;
  return (
    <div className="Pad" id={arg.id}>
      {/* <i className="padIcon">{arg.icon}</i> */}
      <p className="padTriggerKey">{arg.triggerKey}</p>
    </div>
  )
}

function Controls () {
  return (
          <div className="Controls">
            <div className="Logo">
              <h3>Boland</h3>
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

  )
}


export default App;
