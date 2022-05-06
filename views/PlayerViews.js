import React from 'react';
import questions from './questions.json';

const exports = {};

// Player views must be extended.
// It does not have its own Wrapper view.

exports.GetHand = class extends React.Component {

  constructor(props) {
    super(props);
    let {count, string, startTime, endTime, speed, theirString, myNumber, theirNumber} = props

    this.state = {
      count: 1,
      myString: '',
      startTime: '',
      endTime: '',
      speed: 0,
      theirString: '',
      myNumber: 0,
      theirNumber

    }
  }

  // flipChars = ( charChar ) => charChar == '1' ? '0' : '1';
  
  incrementX ({parent}){
    this.setState({ myString: this.state.myString.concat('1')});
    this.setState({ count: this.state.count + 1});
    console.log("Turn from point: "+this.state.count);
    console.log("Turn from string: "+this.state.myString);
    console.log("flipped: "+flipChars('1'));
    if (this.state.count == 5) {
      this.endTime = new Date();
      this.speed = (this.endTime.getTime() - this.startTime.getTime());
      console.log("Speed diff: "+ this.speed);
      this.state.theirString = flipChars(this.state.myString.charAt(0))+this.state.myString.charAt(1)+flipChars(this.state.myString.charAt(2))+this.state.myString.charAt(3);
      console.log("thier string: "+this.state.theirString);
      this.myNumber = parent(this.state.myString);
      this.theirNumber = parseInt(this.state.theirString);
    
  }
}

  incrementO (parent) {
    this.setState({ myString: this.state.myString.concat('0')});
    this.setState({ count: this.state.count + 1});
    console.log("Turn from point: "+this.state.count);
    console.log("Turn from string: "+this.state.myString);
    console.log("flipped: "+flipChars('0'));
    if (this.state.count == 5) {
      this.endTime = new Date();
      this.speed = (this.endTime.getTime() - this.startTime.getTime());
      console.log("Speed diff: "+ this.speed);
      this.state.theirString = flipChars(this.state.myString.charAt(0)).concat(this.state.myString.charAt(1),flipChars(this.state.myString.charAt(2)),this.state.myString.charAt(3));
      console.log("my string: "+this.state.myString);
      console.log("their string: "+this.state.theirString);

      this.state.myNumber = parent(this.state.myString);
      this.state.theirNumber = parseInt(this.state.theirString);
  }
}

  render() {
    const {parent, playable, hand} = this.props;
    this.startTime = new Date();
    return (
      <div>
        { questions.map(post => {
          return (
          <><h4>{post.question}</h4>
          <br/>
          {!playable ? 'Please wait...' : 'Be careful to pick the correct 4 character combination'}
          <br /><button
          disabled={!playable}
          onClick={() => {this.incrementX(parent)}}
          >{post.answer1}</button><button
          disabled={!playable}
          onClick={() => {this.incrementO(parent)}}
          >{post.answer2}</button><button
           onClick={() => {this.incrementX(parent)}}
           >Done</button><button
           onClick={() => parent.playHand('ROCK')}
           >Send</button>
           </>
          )
        })}
      </div>
    );
  }
}

function flipChars(charc) {
  if (charc == '1'){
    return '0'
  }else {
    return '1'
  }
  
}

exports.WaitingForResults = class extends React.Component {
  render() {
    return (
      <div>
        Waiting for results...
      </div>
    );
  }
}

exports.Done = class extends React.Component {
  render() {
    const {outcome} = this.props;
    return (
      <div>
        Thank you for playing. Our mind, the mind reader was:
        <br />{outcome || 'Unknown'}
      </div>
    );
  }
}

exports.Timeout = class extends React.Component {
  render() {
    return (
      <div>
        There's been a timeout. (Someone took too long.)
      </div>
    );
  }
}

export default exports;