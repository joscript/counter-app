import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {

    render() { 
        return ( 
            <div className="mt-2 container">
                <button 
                    className="btn btn-info btn-sm m-2"
                    onClick={this.props.onReset}
                >
                    Reset
                </button>
                { 
                    this.props.counters.map( 
                        counter => <Counter 
                                        onDelete={this.props.onDelete} 
                                        key={counter.id} 
                                        counter={counter}
                                        onIncrement={this.props.onIncrement}
                                        onDecrement={this.props.onDecrement}
                                    /> 
                    )   
                }
            </div>  
         );
    }
}
 
export default Counters;