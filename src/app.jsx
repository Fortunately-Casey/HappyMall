import React from 'react';
import ReactDom from 'react-dom';
import 'font-awesome/css/font-awesome.min.css';
import "./index.css";
import "./index.scss";


ReactDom.render(
  <div>
    <i className="fa fa-address-book-o"></i>
    <h1>Hello World!</h1>
  </div>,
  document.getElementById('app')
)