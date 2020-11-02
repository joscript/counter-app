import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.value,
        tags: ['tag1', 'tag2', 'tag3']
    }

    style = {
        fontSize: 20,
        fontWeight: 'bold'
    }

    handleIncrement = (product) => {
        // console.log(product)
        this.setState({ value: this.state.value + 1 });
    };

    handleDecrement = () => {
        this.setState({value: this.state.value -1});
    };

    render() { 
        // console.log('props', this.props);
        return (
            <div className="container">
                <span style={this.style} className={this.getBadgeClasses()} >{this.formatCount()}</span>
                <button onClick={ () => this.handleIncrement({id:1}) } className="btn btn-secondary btn-sm">Increment</button> 
                {/* <ul>
                    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul> */}
                <button onClick={this.handleDecrement} className="btn btn-dark btn-sm m-2">Decrement</button>
                <button onClick={this.handleDelete} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    };

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    };

    formatCount(){
        const {value} = this.state;
        return value === 0 ? 'Zero' : value;
    };
}
 
export default Counter;