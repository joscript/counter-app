import Navbar from './components/navbar';
import Counter from './components/counters';
import { Component } from 'react';

class App extends Component {

    state = { 
        counters: [
            {id: 1, value: 1},
            {id: 2, value: 0},
            {id: 3, value: 4},
            {id: 4, value: 0}
        ]
    };

    // LIFECYCLE HOOKS
    // called only once and a good place to initialize states properties
    constructor(props) {
      super(props);
      console.log('App - Constructor', this.props);
    }

    // called after the component is rendered to the DOM, good place to make ajax or api requests and get data from server
    componentDidMount() {
      // item api
      // this.setState({items})
      console.log('App - Mounted');
    } 
    // END OF LIFECYCLE HOOKS

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
      console.log('App - rendered')
      return (
        <div className="App">
          <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
          <main className="container"> 
            <Counter 
              onReset={this.handleReset}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
              counters={this.state.counters}
            />
          </main>
        </div>
      );
    }
}

export default App;
