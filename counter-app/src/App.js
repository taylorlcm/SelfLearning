import React, { Component } from 'react';
import Navbar from './components/navbar';
import Counters from './components/counters';

import './App.css';

class App extends Component {

  state = {
    counters: [
      {id: 1, value: 2},
      {id: 2, value: 4},
      {id: 3, value: 6},
      {id: 4, value: 8}
    ]
  }
  handleIncrement = counter =>{
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  }

  handleReset = counter =>{
      const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;
      });
      this.setState({ counters });
  }

  handleDelete = id => {
    const newCounters = this.state.counters.filter(c => c.id !== id)
    this.setState({ counters: newCounters});
  }


  render() {
    return (
      <div>
        <Navbar totalCounters = {this.state.counters.filter(c => c.value > 0).length}/>
        <main className="container">
        <Counters
          counters = {this.state.counters}
          onIncrement = {this.handleIncrement}
          onReset = {this.handleReset}
          onDelete = {this.handleDelete}
        />
        </main>
      </div>
    );
  }
}

export default App;
