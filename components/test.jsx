import React,{ Component, PropTypes } from 'react';
import ReactDom from 'react-dom';
import style from './test.css';

class Test extends Component {
  constructor(props) {
       super(props)
       this.state = {author:"",text:""}
   }
  render(){
    return (
      <div className={style.test}>test</div>
    );
  }
}

ReactDom.render(
<Test />,document.getElementById('content')
)
