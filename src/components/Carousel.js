import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'antd';

ReactDOM.render(
    <Carousel effect="fade">
      <div><h3>1</h3></div>
      <div><h3>2</h3></div>
      <div><h3>3</h3></div>
      <div><h3>4</h3></div>
    </Carousel>,
    mountNode
  );