import React, { Component } from 'react';

class Counter extends Component {

    render() {
        return(
            <div>
                <span style = {{width:50, padding:10}} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm mr-2"
                onClick={() => this.props.onIncrement(this.props.counter)}>Increment</button>

                <button className="btn btn-danger btn-sm mr-2"
                onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
            </div>
        );
    }

    formatCount() {
        const {value} = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }

    getBadgeClasses() {
      let classes = "badge m-2 badge-";
      classes += this.props.counter.value === 0 ? "warning" : "warning";
      return classes;
    }
}

export default Counter;
