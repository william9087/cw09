import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 5
        };
    }

    incrementCount = () => {
        /* TODO (Counter): Use setState() to modify the count. Here’s an example:
            this.setState({
                keyToChange: valueToChangeTo
            });
        */
    }
  
    render() {
        return (
            <h1>{this.state.count}</h1>
            );
    }
}

export default Counter;