import Home from './Home';
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Navbar from './Navbar';
import Profile from './Profile';
import Signup from './Signup';



function App() {
  
  return (
    <div className='grid grid-cols-5'>
    <Router >
    <div className='col-span-1'><Navbar/></div>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/signup' element={<Signup/>} />
      
      
      <Route path='*' element={<div className="text-4xl text-center">Page Not Found</div>} />
    </Routes>
  </Router>
  </div>
   
  );
}

export default App;
