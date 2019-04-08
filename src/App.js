import React, { Component } from 'react';
import Messages from './components/Messages';
import UsernameModal from './components/UsernameModal';
import MessageContainer from './containers/MessageContainer';
import { FIREBASE_CONFIG } from './config';
import * as firebase from 'firebase'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      showUsernameModal: true
    }
    this.submitMessage = this.submitMessage.bind(this);
    this.createUser = this.createUser.bind(this);
    this.updateMessage = this.updateMessage.bind(this);
    this.updateUsername = this.updateUsername.bind(this);
    this.getTimestamp = this.getTimestamp.bind(this);
  }

  componentDidMount() {
    // initializes firebase then gets all current users
    firebase.initializeApp(FIREBASE_CONFIG);
    let firebaseHeadingRef = firebase.database().ref().child('messages')
    firebaseHeadingRef.on('value', message => {
      let storedMessages = [];
      let messages = message.val();
      // convert object received from DB to array for mapping
      for (let message in messages) {
        storedMessages.push(messages[message]);
      }
      messages = storedMessages;
      this.setState({ messages })
    })
  }

  updateMessage(e) {
    this.setState({ message: e.target.value })
  }

  updateUsername(e) {
    this.setState({ username: e.target.value });
  }

  createUser(e) {
    e.preventDefault();
    if (!this.state.username) {
      return;
    }
    let newUser = {username: this.state.username, id: "343325"}
    sessionStorage.setItem('auth', JSON.stringify(newUser));
    this.setState((state) => {
      return { showUsernameModal: false }
    })
  }

  getTimestamp() {
    var currentDate = new Date();
    var date = currentDate.getDate();
    var month = currentDate.getMonth() +1;
    var year = currentDate.getFullYear();
    return `${date}-${month}-${year}`;
  }

  submitMessage(e) {
    e.preventDefault();
    let user = JSON.parse(sessionStorage.getItem('auth'));
    if (!this.state.message) {
      return;
    };
    let firebaseRef = firebase.database().ref();
    let newMessage =
      {
        message: this.state.message,
        sender: user.username,
        senderId: user.id,
        timeStamp: this.getTimestamp(),
      }
    firebaseRef.child('messages').push(newMessage);
  }

  render() {
    const User = JSON.parse(sessionStorage.getItem('auth'));
    if (this.state.showUsernameModal) {
      return <UsernameModal value={this.state.username} onChange={this.updateUsername} onSubmit={this.createUser} />
    } else {
      return (
        <div class="App p-5">
          <MessageContainer onChange={this.updateMessage} onSubmit={this.submitMessage}>
            <Messages user={User} messages={this.state.messages} />
          </MessageContainer>
        </div>
      );
    }
  }
}

export default App;
