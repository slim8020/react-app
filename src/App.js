import React, {Component} from 'react';
import './App.css';


class Subject extends Component {
  render(){
  return (
    <div className="Subject">
        <h1>Web</h1>
    </div>
  );
  }
}


class TOC extends Component {
  render(){
    return(
        <nav>
          <ul>
            <li><a href="1.html">HTML</a></li>
            <li><a href="2.html">CSS</a></li>
            <li><a href="3.html">Javascript</a></li>
          </ul>
        </nav>
    );
  }
}
class Content extends Component{
  render(){
    return (
      <article>
          <h2>HTML</h2>
          HTML is HyperText Markup Language. 
      </article>
    );
  }
}


class App extends Component {
  render(){
  return (
    <div className="App">
      <Subject/>
      <TOC/>
      <Content/>
    </div>
  );
  }
}

export default App;
