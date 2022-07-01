import logo from './logo.svg';
import './App.css';
import Header from "./Components/Shared/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Todo from "./Components/Pages/Todo/Todo";
import CompleteTask from "./Components/Pages/CompleteTask/CompleteTask";
import Calendars from "./Components/Pages/Calendar/Calendar";
import Footer from "./Components/Shared/Footer";
import 'react-calendar/dist/Calendar.css';

function App() {
  return (
    <div className='overflow-hidden'>
        <Header />

        <Routes >
            <Route path='/' element={<Home/>} />
            <Route path='/todo'  element={<Todo/>}/>
            <Route path='/completeTask' element={<CompleteTask/>} />
            <Route path='/calendar' element={<Calendars/>} />
        </Routes>
        <Footer />

    </div>
  );
}

export default App;
