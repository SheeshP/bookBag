import React, { Component } from 'react';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';
import './Chat.css';
import logo from './logo.svg';

class Chat extends Component {

    componentDidMount() {
      addResponseMessage("Welcome to this awesome study chat!");
    }

    handleNewUserMessage = (newMessage) => {
      console.log(`New message incomig! ${newMessage}`);
      // Now send the message throught the backend API
    }

    render() {
      return (
        <div className="App">
          <Widget
            handleNewUserMessage={this.handleNewUserMessage}
            profileAvatar={logo}
            title="Science Study Group"
            subtitle="Members: Karl Maier, Michael Von der Lippe, Deonarine Sahdeo, Alex Proctor"
          />
        </div>
      );
    }
  }

export default Chat;
