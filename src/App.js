import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeUp, faVolumeDown, faPowerOff } from '@fortawesome/free-solid-svg-icons'

const patchOne = [
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

const patchTwo = [
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


class App extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      power: true,
      volume: 0.8,
      patch: patchOne,
      patchName: 'Trad Kit'
    };
    
    this.togglePower = this.togglePower.bind(this);
    this.handleVolumeClick = this.handleVolumeClick.bind(this);
    this.patchManager = this.patchManager.bind(this);
  };

  patchManager (e) {
    const patchSwap = {trad: ['trad', patchOne], tr808: ['tr808', patchTwo]};
    if(e.target.id === patchSwap.trad[0]) {
      this.setState((state) => ({
        patch: patchSwap.trad[1], patchName: 'Trad Kit'
      }));
    }
    else if(e.target.id === patchSwap.tr808[0]) {
      this.setState((state) => ({
        patch: patchSwap.tr808[1], patchName: 'TR-808'
      }));
    }
  }

  handleVolumeClick (e){
    const direction = {increase: 'up', decrease: 'down', upLimit: 0.9, lowLimit: 0.1, increment: 0.1};
  
    if (e.target.id === direction.increase && this.state.volume <= direction.upLimit) {
      this.setState((state) => ({
        volume: state.volume + direction.increment
      }));
    }
    else if (e.target.id === direction.decrease && this.state.volume >= direction.lowLimit) {
      this.setState((state) => ({
        volume: state.volume - direction.increment
      }));
    }
  };

  togglePower () {
    console.log(this.state.power, this.state.volume);
    if (this.state.power === false) {
      this.setState({power: true, volume: 0.8});
      document.getElementById("display").textContent='---';
    }
    else {
      this.setState({power: false, volume: 0});
      document.getElementById("display").textContent='OFF';
    }
    console.log(this.state.power, this.state.volume);
  }

  render(){
    VolumeSet(this.state.volume);
    console.log(this.state.volume);
    const level = Math.floor(this.state.volume * 10);
    console.log(level);
  return (
    <div className="App" id="drum-machine">
      <div className="DmWrapper">
        <div className="Interface">
          <Header />
          <Pad arg={this.state.patch[0]} pow={this.state.power}/>
          <Pad arg={this.state.patch[1]} pow={this.state.power}/>
          <Pad arg={this.state.patch[2]} pow={this.state.power}/>
          <Pad arg={this.state.patch[3]} pow={this.state.power}/>
          <Pad arg={this.state.patch[4]} pow={this.state.power}/>
          <Pad arg={this.state.patch[5]} pow={this.state.power}/>
          <Pad arg={this.state.patch[6]} pow={this.state.power}/>
          <Pad arg={this.state.patch[7]} pow={this.state.power}/>
          <Pad arg={this.state.patch[8]} pow={this.state.power}/>
{/*<Controls /> */}
{/* add functionality and event listeners */}
          <div className="Controls">
            <div className="logo">
              <h2>Boland</h2>
              <h3>PAD-9</h3>
            </div>
            <div className="display">
              <p>DISPLAY</p>
              <div id="display-screen">
                <p className="display-info" id="kit">{this.state.patchName}</p>
                <p className="display-info" id="display">---</p>
                <p className="display-info" id="level">Vol {level}</p>
              </div>
            </div>
            <div className="patch" id="patch">
              <p className="control-label">PATCH</p>
              <button className="patch-button" id="trad" onClick={this.patchManager}>
                <p>TRAD</p>
              </button>
              <button className="patch-button" id="tr808" onClick={this.patchManager}>
                <p>808</p>
              </button>
            </div>
            {/* TODO Volume buttons don't operate if you click the fa icon */}
            <div className="patch" id="volume">
              <p className="control-label">VOLUME</p>
              <button className="patch-button" id="up" onClick={this.handleVolumeClick}>
                <FontAwesomeIcon icon={faVolumeUp}/>
              </button>
              <button className="patch-button" id="down" onClick={this.handleVolumeClick}>
                <FontAwesomeIcon icon={faVolumeDown}/>
              </button>
            </div>
            <div className="patch" id="power">
              <p className="control-label">POWER</p>
              <button className="patch-button" onClick={this.togglePower}>
                <FontAwesomeIcon icon={faPowerOff} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );}
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
  };
  
  componentDidMount (){
    document.addEventListener('keydown', this.handleKeyPress);
  };
  componentWillUnmount (){
    document.removeEventListener('keydown', this.handleKeyPress);
  };

  handleKeyPress (e){
    const arg = this.props.arg;
    if (e.keyCode === arg.jskeycode) {
      this.triggerAudio();
    }
  };

  triggerAudio() {
    const arg = this.props.arg;
    const audio = document.getElementById(arg.triggerKey);
    audio.currentTime = 0;
    audio.play();
    if (this.props.pow) {
      document.getElementById("display").textContent=arg.name;
    }
    document.getElementById(arg.id).classList.add('pad-active');
    setTimeout(() => {
      document.getElementById(arg.id).classList.remove('pad-active');
    }, 101);
  };
  
  render(){
    const arg = this.props.arg;
  return (
    <div className="drum-pad" id={arg.id} onClick={this.triggerAudio} role="button">
      <audio id={arg.triggerKey} className="clip" src={arg.url} preload="auto" type="audio/wav"/>
      <p className="padTriggerKey">{arg.triggerKey}</p>
    </div>
  )
};
}

/* Sets volume across all pads and the whole app */
function VolumeSet (volAdj) {
      const clips = [].slice.call(document.getElementsByClassName('clip'));
      clips.forEach((level) => level.volume = volAdj);
    };

export default App;
