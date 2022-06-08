import './App.css';
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const input_x = useSelector((state) => state.input_x);
  console.log(input_x, "from app js file");

  return (
    <div className="App">
      <h1>Count : {count}</h1>
      <p>by default input is 1</p>
      <button style={{borderRadius:"20px"}} onClick={() => dispatch({ type: "DECREMENT" })}>decrement</button>
      <button style={{borderRadius:"20px"}}onClick={() => dispatch({ type: "INCREMENT" })}>increment</button>
      <div>
        <input type="number" placeholder="Reload...."
          onChange={(e) => { dispatch({ type: "SET_X", payload: Number(e.target.value) }) }}
        />
        <div className="buttons">
          <button style={{borderRadius:"20px", height:"100px"}} onClick={() => dispatch({ type: "ADD", payload: input_x })} >add</button>
          <button  style={{borderRadius:"20px",  height:"100px"}} onClick={() => dispatch({ type: "MULTIPLY", payload: input_x })} >multiply</button>
          <button  style={{borderRadius:"20px",  height:"100px"}} onClick={() => dispatch({ type: "SUBTRACT", payload: input_x })} >subtract</button>
          <button style={{borderRadius:"20px"}} onClick={() => dispatch({ type: "DIVIDE", payload: input_x })} >divide</button>
        
          <button onClick={() => { dispatch({ type: "RESET" }) }}>X</button>
        </div>
      </div>
    </div>
  );
}

export default App;

