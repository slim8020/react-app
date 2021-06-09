import React, { Component } from 'react';

class Subject extends Component {
    render(){
    return (
      <div className="Subject">
          <h1><a href="/" onClick={
              function(e){
                  e.preventDefault(); // 이벤트가 가진 기본 동작을 막음.
                  this.props.onChangePage();
                  }.bind(this)  // this 가 undefined 일 경우 
                }>{this.props.title}</a></h1>
          {this.props.sub}
      </div>
    );
    }
  }

  export default Subject;