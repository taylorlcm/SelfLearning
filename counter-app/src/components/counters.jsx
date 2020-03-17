import React, { Component } from 'react';
import Counter from "./counter";


class Counters extends Component {
  render() {
    const {counters, onDelete, onIncrement, onReset} = this.props;

      return(
          <div>
            {counters.map(counter =>
            <Counter
              key = {counter.id}
              counter = {counter}
              onDelete = {onDelete}
              onIncrement = {onIncrement}
            />
            )}

            <button className="btn btn-primary btn-sm m-2"
            onClick={onReset}>Reset</button>
          </div>
      );
  }
}

export default Counters;
