import React, { Component } from 'react';
import logo from './assets/images/logo.png';
import userImg from './assets/images/user-image.jpg'
import './App.css';
import 'antd/dist/antd.css' 
import './assets/sass/main.sass'
import images from './config/image'
import MaterialIcon, {colorPalette} from 'material-icons-react';
import carousel from './components/Carousel'
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
					<div className="user-info">
						<p>Maritza Sinti</p>
						<img src={ userImg }/>
					</div>
				</header>
				<div className="second-header">
					<div className="second-header__left">
						<div className="back">
							<MaterialIcon icon="arrow_back" />
							<span>Atrás</span>
						</div>
					</div>
					<div className="second-header__right">
					
					</div>
					
				</div>
				<div className="blue-block"></div>
				<div>
					<carousel/>
				</div>
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
