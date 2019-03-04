import React, { Component } from 'react';
import logo from './assets/images/logo.png';
import userImg from './assets/images/user-image.jpg'
import './App.css';
import 'antd/dist/antd.css' 
import './assets/sass/main.sass'
import images from './config/image'
import MaterialIcon from 'material-icons-react';
import CarouselComp from './components/Carousel'
import { Button } from 'antd'


// const { logo } = images
class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			messageText : "I'm a text",
			questionNumber: 1,
			questionText: '¿Cuáles son las primeras diferencias que encuentras <br/> entre UX y UI?',
			step: 2
		}
  	}
	render() {
		console.log(images)
		return (
			<div className="App">
				<header>
					<img alt="" src={ logo }/>
					<div className="user-info">
						<p>Maritza Sinti</p>
						<img alt="" src={ userImg }/>
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
				<div className="blue-block">
					<h3>Cuestionario para Diseñador UX / UI</h3>
					<div>
						<span>Ver preguntas</span>
						<Button className="view-module-btn">
							<MaterialIcon icon="view_module" />
						</Button>
					</div>
				</div>
				<div className="title-block">
					<h3 className="title-block__number">{ this.state.questionNumber }</h3>
					<p className="title-block__text" dangerouslySetInnerHTML={{ __html: this.state.questionText }}></p>
				</div>
				<div>
					<CarouselComp></CarouselComp>
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
