import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {

    render() { 

        // object destructuring
        const {onReset, onDelete, onIncrement, onDecrement} = this.props;

        return ( 
            <div className="mt-2 container">
                <button 
                    className="btn btn-info btn-sm m-2"
                    onClick={onReset}
                >
                    Reset
                </button>
                { 
                    this.props.counters.map( 
                        counter => <Counter 
                                        onDelete={onDelete} 
                                        key={counter.id} 
                                        counter={counter}
                                        onIncrement={onIncrement}
                                        onDecrement={onDecrement}
                                    /> 
                    )   
                }
            </div>  
         );
    }
}
 
export default Counters;