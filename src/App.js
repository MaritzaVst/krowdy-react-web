import React, { Component } from 'react';
import logo from './assets/images/logo.png';
import './App.css';
import 'antd/dist/antd.css' 
import './assets/sass/main.sass'
import images from './config/image'
// const { logo } = images
class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			messageText : "I'm a text"
		}
  	}
	render() {
		console.log(images)
		return (
			<div className="App">
				<header>
					<img src={ logo }/>
				</header>
			</div>
		);
	}
	initMediaDevices() {
		
	}
	componentDidMount() {
		this.initMediaDevices()
	}
}

export default App;
