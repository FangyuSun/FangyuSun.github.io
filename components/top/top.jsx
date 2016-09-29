import React,{ Component, PropTypes } from 'react';
import ReactDom from 'react-dom';
import cx from 'classnames';
import style from './top.css';
import ddd from './6.jpg'

class Top extends Component {
  constructor(props) {
       super(props)
       this.state = {test:'',test1:''}
   }

  render(){
    let _this = this;
    return (
      <div className={style.container}>
      </div>
    );
  }
}

export default Top;
