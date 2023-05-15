import { BrowserRouter , Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';

import Navbar from './components/Navbar';
import Login from './components/Login';
import Registration from './components/Registration';
import AddProducts from './Pages/Addproducts';
import Payment from './Pages/Payment';


function App() {
  return (
   
    <div className="App">

      
    <BrowserRouter>
    <Navbar/>
   
        <Routes>
      <Route path='/*' element ={<Home/>}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/Registration' element={<Registration />}></Route>
      <Route path='/addproducts' element={<AddProducts />}></Route>
      <Route path='/Home/*' element={<Home />} />
       <Route path='/Payment' element={<Payment />}> </Route>
   
    </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;

