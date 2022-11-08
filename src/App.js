import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 
'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Navbar/Home';
import SignIn from './pages/Navbar/SignIn';
import SignUp from './pages/Navbar/SignUp';
import Result from './pages/Navbar/Result';
import Search from './pages/Navbar/Search';
import Profile from './pages/Navbar/Profile';

import DetailPage from './pages/Navbar/DetailPage';
import Footer from './components/footer/Footer';
import ScrollToTop from './components/Scroll/ScrollToTop';
import Main from './pages/Navbar/Main';



function App() {
  
  const user = localStorage.getItem("token");


  return (

 
    <Router>
    <Navbar/>
    <div className="container">
    <Routes>
    {user && <Route path="/Profile" exact element={<Main />} />}
      <Route exact path='/' element={<Home/>} />
       <Route exact path="/SignIn" element={<SignIn />} />
       <Route exact path='/SignUp' element={<SignUp/>} />
       <Route exact path='/Search' element={<Search/>} />
       <Route exact path='/Profile' element={<Profile/>} /> 
       <Route exact path='/Result' element={<Result/>} />
       <Route path="/event/:id" element={<DetailPage/>} />
    </Routes>
    </div>
    <div className='footer'>
      <Footer/>

    </div>

    
    <ScrollToTop/>

    </Router>
  );
}
export default App;
