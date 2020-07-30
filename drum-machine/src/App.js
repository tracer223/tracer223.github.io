import React, {
  Component
} from 'react';
import ReactDOM from 'react-dom';
import './App.css';


const soundBankOne = [{
  keyCode: 81,
  keyTrigger: 'Q',
  id: 'Heater-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
}, {
  keyCode: 87,
  keyTrigger: 'W',
  id: 'Heater-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
}, {
  keyCode: 69,
  keyTrigger: 'E',
  id: 'Heater-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
}, {
  keyCode: 65,
  keyTrigger: 'A',
  id: 'Heater-4',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
}, {
  keyCode: 83,
  keyTrigger: 'S',
  id: 'Clap',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
}, {
  keyCode: 68,
  keyTrigger: 'D',
  id: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
}, {
  keyCode: 90,
  keyTrigger: 'Z',
  id: "Kick-n'-Hat",
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
}, {
  keyCode: 88,
  keyTrigger: 'X',
  id: 'Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
}, {
  keyCode: 67,
  keyTrigger: 'C',
  id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
}, ];

class DrumPad extends React.Component {

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown)
    //window.focus()
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown = e => {
    if (e.keyCode === this.props.keyTrigger.charCodeAt()) {
      this.audio.play()
      this.audio.currentTime = 0
      this.props.handleDisplay(this.props.id)
    }
  }

  handleClick = () => {
    this.audio.play()
    this.audio.currentTime = 0
    this.props.handleDisplay(this.props.id)
  }

  render() {
    return ( <
      div id = "board" >
      <
      div className = "drum-pad"
      id = {
        this.props.id
      }
      onClick = {
        this.handleClick
      } >
      <
      p > {
        this.props.keyTrigger
      } < /p> <
      audio className = "clip"
      ref = {
        ref => this.audio = ref
      }
      src = {
        this.props.url
      }
      id = {
        this.props.keyTrigger
      }
      /> < /
      div > <
      /div>
    );
  }
}

class Controls extends React.Component {

  render() {
    return ( <
      div id = "controls" >
      <
      div >
      <
      h2 > Volume < /h2> <
      input type = "range"
      min = "0"
      max = "1"
      step = "0.01" / >
      <
      /div> < /
      div >
    );
  }
}


class App extends React.Component {
  constructor(props) {
    super(props)
    this.adjustVolume = this.adjustVolume.bind(this);
    this.state = {
      display: 'Click or Press Key',
      volumeLevel: 0.4
    }
  }

  adjustVolume = e => {
    this.setState({
      volumeLevel: e.target.value
    });
  }

  handleDisplay = display => this.setState({
    display
  })

  render() {
    return ( < div id = "drum-machine" >
      <
      div id = "display" > {
        this.state.display
      } < /div> <
      div id = "drum-pads" > {
        soundBankOne.map(s => ( <
          DrumPad id = {
            s.id
          }
          keyTrigger = {
            s.keyTrigger
          }
          url = {
            s.url
          }
          handleDisplay = {
            this.handleDisplay
          }
          />
        ))
      } < /div> <
      footer > ©Josh Henderson 2019 < /footer> <
      /div>
    );
  }
}

ReactDOM.render( < App / > , document.getElementById("root"));

export default App;