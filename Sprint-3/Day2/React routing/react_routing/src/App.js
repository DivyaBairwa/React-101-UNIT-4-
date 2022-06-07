import {Routes,Route,} from "react-router-dom";
import './App.css';
import { Navbar } from "./components/navbar";
import {Home} from "./components/home"
import {About} from "./components/about"
import { UsersList } from "./components/usersList";
import { UserDetails } from "./components/userDetails";
import { PrivateComponent } from "./components/PrivateComponent";
import { Login } from "./components/login";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/users/:id"
      element={<PrivateComponent>
        <UserDetails />
         </PrivateComponent>}>
        
      </Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/users" element={<UsersList></UsersList>}></Route>
        <Route path="/login" element={<Login />} />

        
      </Routes>
    </div>
  );
}

export default App;
