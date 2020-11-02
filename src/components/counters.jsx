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

    render() { 
        return ( 
            <div className="mt-5">
                { 
                    this.state.counters.map( 
                        counter => <Counter 
                                        onDelete={this.handleDelete} 
                                        key={counter.id} 
                                        counter={counter}
                                    /> 
                    )   
                }
            </div>
         );
    }
}
 
export default Counters;