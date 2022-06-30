import logo from './logo.svg';
import './App.css';
import Header from "./Components/Shared/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Todo from "./Components/Pages/Todo/Todo";
import CompleteTask from "./Components/Pages/CompleteTask/CompleteTask";
import Calendar from "./Components/Pages/Calendar/Calendar";

function App() {
  return (
    <div >
        <Header />

        <Routes >
            <Route path='/' element={<Home/>} />
            <Route path='/todo'  element={<Todo/>}/>
            <Route path='/completeTask' element={<CompleteTask/>} />
            <Route path='/calendar' element={<Calendar/>} />
        </Routes>
    </div>
  );
}

export default App;
