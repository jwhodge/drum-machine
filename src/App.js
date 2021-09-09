import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeUp, faVolumeDown, faPowerOff } from '@fortawesome/free-solid-svg-icons'


const padArr = [
  {id: "Pad-1",
  triggerKey: "Q",
  jskeycode: 81,
  name: 'Crash',
  icon: "",
  url: "/tama/crash_10.ogg"},
  {id: "Pad-2",
  triggerKey: "W",
  jskeycode: 87,
  name: 'HiHat Open',
  icon: "",
  url: "/tama/hh_pedal.ogg"},
  {id: "Pad-3",
  triggerKey: "E",
  jskeycode: 69,
  name: 'HiHat Closed',
  icon: "",
  url: "/tama/hh_closed_2.ogg"},
  {id: "Pad-4",
  triggerKey: "A",
  jskeycode: 65,
  name: 'Tom 1',
  icon: "",
  url: "/tama/tom_8.ogg"},
  {id: "Pad-5",
  triggerKey: "S",
  jskeycode: 83,
  name: 'Tom 2',
  icon: "",
  url: "/tama/tom_10.ogg"},
  {id: "Pad-6",
  triggerKey: "D",
  jskeycode: 68,
  name: 'Snare',
  icon: "",
  url: "/tama/snare_1.ogg"},
  {id: "Pad-7",
  triggerKey: "Z",
  jskeycode: 90,
  name: 'Kick',
  icon: "",
  url: "/tama/kick_1.ogg"},
  {id: "Pad-8",
  triggerKey: "X",
  jskeycode: 88,
  name: 'Floor Tom',
  icon: "",
  url: "/tama/tom_13.ogg"},
  {id: "Pad-9",
  triggerKey: "C",
  jskeycode: 67,
  name: 'Ride',
  icon: "",
  url: "/tama/ride.ogg"} 
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

class Pad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    
    this.triggerAudio = this.triggerAudio.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleKeyOff = this.handleKeyOff.bind(this);
  }
  
  componentDidMount (){
    document.addEventListener('keydown', this.handleKeyPress);
    document.addEventListener('keyup', this.handleKeyOff);
  }
  componentWillUnmount (){
    document.removeEventListener('keydown', this.handleKeyPress);
    document.removeEventListener('keyup', this.handleKeyOff);
  }

  handleKeyPress (e){
    const arg = this.props.arg;
    if (e.keyCode === arg.jskeycode) {
      this.triggerAudio();
    }
  }
  
    handleKeyOff (e){
    const arg = this.props.arg;
    if (e.keyCode === arg.jskeycode) {
    document.getElementById(arg.id).classList.remove('pad-active');
    }
  }

  triggerAudio() {
    const arg = this.props.arg;
    const audio = document.getElementById(arg.triggerKey);
    audio.currentTime = 0;
    audio.play();
    document.getElementById(arg.id).classList.add('pad-active');
    document.getElementById("display").textContent=arg.name;
  }
  
  render(){
    const arg = this.props.arg;
  return (
    <div className="pad" id={arg.id} onClick={this.triggerAudio}>
      <audio id={arg.triggerKey}>
      <source className="patchSample" src={arg.url} preload="auto" type="audio/wav"/>
      </audio>
      {/* <i className="padIcon">{arg.icon}</i> */}
      <p className="padTriggerKey">{arg.triggerKey}</p>
    </div>
  )
}
}

function Controls () {
  return (
          <div className="Controls">
            <div className="logo">
              <h2>Boland</h2>
              <h3>PAD-9</h3>
            </div>
            <div className="display">
              <p>DISPLAY</p>
              <div id="display-screen">
                <p className="display-info">Trad Kit</p>
                <p className="display-info" id="display">---</p>
              </div>
            </div>
            <div className="patch" id="patch">
              <p className="control-label">PATCH</p>
              <div className="patch-button">
                <p>1</p>
              </div>
              <div className="patch-button">
                <p>2</p>
              </div>
            </div>
            <div className="patch" id="volume">
              <p className="control-label">VOLUME</p>
              <div className="patch-button">
                <FontAwesomeIcon icon={faVolumeUp} />
              </div>
              <div className="patch-button">
                <FontAwesomeIcon icon={faVolumeDown} />
              </div>
            </div>
            <div className="patch" id="power">
              <p className="control-label">POWER</p>
              <div className="patch-button">
                <FontAwesomeIcon icon={faPowerOff} />
                
              </div>
            </div>
          </div>

  )
}


export default App;
