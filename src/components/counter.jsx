import React, { Component } from 'react';

class Counter extends Component {
    state = {
        tags: ['tag1', 'tag2', 'tag3']
    }

    style = {
        fontSize: 20,
        fontWeight: 'bold'
    }

    render() { 
        return (
            <div>
                <span style={this.style} className={this.getBadgeClasses()} >{this.formatCount()}</span>
                <button onClick={ () => this.props.onIncrement(this.props.counter) } className="btn btn-secondary btn-sm">Increment</button> 
                {/* <ul>
                    {this.props.counter.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul> */}
                <button onClick={() => this.props.onDecrement(this.props.counter)} className="btn btn-dark btn-sm m-2">Decrement</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    };

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    };

    formatCount(){
        const {value} = this.props.counter;
        return value === 0 ? 'Zero' : value;
    };
}
 
export default Counter;