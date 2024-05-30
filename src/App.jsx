import "./App.css";
import StudentView from "./StudentView";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AddStudent from "./AddStudent";
import UpdateStudent from "./UpdateStudent";
import ViewStudent from "./ViewStudent";
function App() {
  return (
    <main className="container">
      <div className="row">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/StudentView" element={<StudentView />}></Route>
            <Route exact path="/AddStudent" element={<AddStudent />}></Route>
            <Route path="/updateStudent/:id" element={<UpdateStudent />} />
            <Route path="/viewStudent/:id" element={<ViewStudent />} />
          </Routes>
        </Router>
      </div>
    </main>
  );
}

export default App;
