import React, {Component} from 'react';
import TOC from './components/TOC';
import Subject from './components/Subject';
import Content from './components/Content';
import './App.css';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      mode:'read',
      welcome:{title:'Welcome', desc:'Hello React!!'},
      subject:{title:'WEB', sub:'World Wide Web'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'Javascript', desc:'Javascript is for interactive'}
      ]
    }
  }

  render(){
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
        _title = this.state.welcome.title;
        _desc = this.state.welcome.desc;
    }
    else if (this.state.mode === 'read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
  return (
    <div className="App">
      <Subject 
      title = {this.state.subject.title}
      sub = {this.state.subject.sub}
      onChangePage = {function(){
        this.setState( {mode:'welcome'});
      }.bind(this)}
      />
      <TOC data = {this.state.contents}/>
      <Content title={_title} content={_desc}/>
    </div>
  );
  }
}

export default App;
