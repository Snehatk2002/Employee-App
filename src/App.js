import logo from './logo.svg';
import './App.css';
import Addemployee from './components/Addemployee';
import SearchEmployee from './components/SearchEmployee';
import Deleteemployee from './components/Deleteemployee';
import Viewemployee from './components/Viewemployee';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Addemployee/>}/>
      <Route path='/search' element={<SearchEmployee/>}/>
      <Route path='/delete' element={<Deleteemployee/>}/>
      <Route path='/view' element={<Viewemployee/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
