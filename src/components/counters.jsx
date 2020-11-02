import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        counters: [
            {id: 1, value: 1},
            {id: 2, value: 0},
            {id: 3, value: 4},
            {id: 4, value: 0}
        ]
    };

    handleDelete = (counterId) => {
        // console.log('Event handle called', counterId);
        const counters = this.state.counters.filter(counter => counter.id !== counterId);
        this.setState({counters});
    }

    handleReset = () => {
        const counters = this.state.counters.map(counter => {
            counter.value = 0;
            return counter;
        })

        this.setState({counters})
    }

    handleIncrement = (data) => {
        // console.log(data)
        const counters = [...this.state.counters]; // used spread operator to clone 
        const index = counters.indexOf(data);
        counters[index] = {...data}; // to refer only to the object given and not to the local state (kase naa-update nya pala)
        counters[index].value++;
        // console.log(this.state.counters[index].value)

        this.setState({counters});
    }

    handleDecrement = (data) => {
        const counters = [...this.state.counters]; // used spread operator to clone 
        const index = counters.indexOf(data);
        counters[index] = {...data}; // to refer only to the object given and not to the local state (kase naa-update nya pala)
        counters[index].value--;

        this.setState({counters});
    }

    render() { 
        return ( 
            <div className="mt-2 container">
                <button 
                    className="btn btn-info btn-sm m-2"
                    onClick={this.handleReset}
                >
                    Reset
                </button>
                { 
                    this.state.counters.map( 
                        counter => <Counter 
                                        onDelete={this.handleDelete} 
                                        key={counter.id} 
                                        counter={counter}
                                        onIncrement={this.handleIncrement}
                                        onDecrement={this.handleDecrement}
                                    /> 
                    )   
                }
            </div>
         );
    }
}
 
export default Counters;