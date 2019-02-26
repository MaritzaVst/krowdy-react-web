import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messageText : "I'm a text"
		}
  }
  render() {
    return (
      <div className="App">
        <video autoPlay></video>
      </div>
		);
		
	}
	initMediaDevices() {
		var p = navigator.mediaDevices.getUserMedia({ 
			audio: { echoCancellation: false,  autoGainControl: true, sampleRate:48000, channelCount: 2, volume: 1.0 },
			mandatory:{googAutoGainControl: false},
			video: true 
		});

		p.then(function(mediaStream) {
			var video = document.querySelector('video');
			try {
				video.srcObject = mediaStream
				
				console.log(mediaStream.getAudioTracks())

			} catch(error) {
				video.src = window.URL.createObjectURL(mediaStream);
			}
			video.onloadedmetadata = function(e) {
				// Do something with the video here.
			};
		});
		p.catch(function(err) { console.log(err.name); });
	}
	componentDidMount() {
		this.initMediaDevices()
	}
}

export default App;
