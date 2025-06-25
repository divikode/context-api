import logo from './logo.svg';
import './App.css';
import Parent from './components/Parent';
import nodeState from './context/nodes/nodeState';

function App() {
  return (
    <nodeState>
    <div className="App">
      <Parent/>
    </div>
    </nodeState>
  );
}

export default App;
