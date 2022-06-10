import './App.css';
import { Counter } from './components/counter';
import { Todo } from './components/Todo';


function App() {
  
  return (
    <div className="App">
      <Counter />

      <hr></hr>

      <Todo />
    </div>
  );
}

export default App;
