import Parent from './components/Parent';
import NodeState from './context/nodes/NodeState';

function App() {
  return (
    <NodeState>
    <div className="App">
      <Parent/>
    </div>
    </NodeState>
  );
}

export default App;
