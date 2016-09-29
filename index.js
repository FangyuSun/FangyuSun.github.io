import './module/reset.css';
import React,{ Component, PropTypes } from 'react';
import ReactDom from 'react-dom';
import Top from './components/top/top.jsx';

class App extends Component{
  constructor(props) {
       super(props)
       this.state = {author:"",text:""}
   }
  render(){
    return (
      <div>
        <Top />
      </div>
    );
  }
}

ReactDom.render(
<App />,document.getElementById('content')
)
