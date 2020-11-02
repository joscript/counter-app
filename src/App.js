import Navbar from './components/navbar';
import Counter from './components/counters';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="container"> 
        <Counter />
      </main>
    </div>
  );
}

export default App;
