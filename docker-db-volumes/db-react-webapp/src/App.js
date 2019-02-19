import React, { Component } from 'react';
import './App.css';

class App extends Component {

  fetchValues = () => {
    fetch('/api/values/all')
      .then(resp => {
        return resp.json()
      })
      .then(data => {
        console.log(data)
        this.setState({
        values: data,
        update: false
      })})
      .catch(e => console.log(e));
  }

  submitValues = () => {
    fetch('/api/values', {
      method: 'POST',
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        index: this.state.text
      })
    }).then(resp => resp.json())
      .then(data => {
        console.log(data)
        this.setState({text:'',update: true})
      })
      .catch(e => console.log(e));
  }

  onTextChange = (e) => {
    this.setState({text : e.target.value})
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.submitValues();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.state.update) {
      this.fetchValues();
    }
  }

  constructor() {
    super();
    this.state = {
      text: '',
      values: [],
      update: false
    }
    this.fetchValues();
  }

  listItems() {
    const list = [];
    for(let i = 0; i < this.state.values.length; i++) {
      const data = this.state.values[i];
      list.push(
        <li key={i}>
          <div key={i}> {data.number}</div>
        </li>
      )
    }
    return list;
  }

  render() {
    return (
      <div className="app">

          <div className="page">
            <form onSubmit={this.onSubmit}>
              <input 
                className="input"
                value={this.state.text} 
                onChange={this.onTextChange}/>
              <button
                className="button">
                Submit
              </button>
            </form>
          </div>

          <br/>
          <label className="page">
              List of items !!
          </label>
          <div className="page list">
            <ul>
              {
                this.listItems()
              }
            </ul>
          </div>

      </div>
    );
  }
}

export default App;
