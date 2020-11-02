import React, { Component } from 'react';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    Counter
                    <span className="badge badge-pill badge-secondary mx-2">
                        {this.props.totalCounters}
                    </span>
                </a>
            </nav>
         );
    }
}
 
export default Navbar;