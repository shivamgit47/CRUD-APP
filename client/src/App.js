import './App.css';
//components
import AddUser from './components/AddUser';
import NavBar from './components/NavBar';
import ShivamHome from './components/ShivamHome';
import AllUsers from './components/AllUsers';
import EditUser from './components/EditUser';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ShivamHome/>}/>
        <Route path='/AllUsers' element={<AllUsers/>}/>
        <Route path='/AddUser' element={<AddUser/>}/>
        <Route path='/EditUser/:id' element={<EditUser/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
