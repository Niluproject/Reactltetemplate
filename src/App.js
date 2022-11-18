import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header';
import Menu from './Menu';
import Dashboard from './Dashboard';
import Footer from './Footer';
import Login from './Login';
import Register from './Register';
function App() {
  return (
    <div class="wrapper">
   <BrowserRouter>
     <Routes>
     <Route exact path={"/"} element={<Login />} />
      <Route exact path="/register" element={<Register/>} /> 
      <Route exact path="/dashboard" element={ <>
              <Header />
              <Menu />
              <Dashboard />
              <Footer />
            </>} /> 
     </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
