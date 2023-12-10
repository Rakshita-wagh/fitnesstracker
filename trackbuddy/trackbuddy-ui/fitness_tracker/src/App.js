import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from "./components/NavBar"
import Exercises from './components/Exercises.component';
import CreateExercises from './components/CreateExercises.component';
import EditExercises from './components/EditExercises.component';
import CreateUsers from './components/CreateUsers.component';

function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Routes>
      <Route path="/" element={<Exercises />} />
      <Route path="/edit/:id" element={<EditExercises />} />
      <Route path="/create" element={<CreateExercises />} />
      <Route path="/user" element={<CreateUsers />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
