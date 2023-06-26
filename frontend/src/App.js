import { Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './Pages/Register';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import TopNavbar from "./Components/TopNavbar";
import AddProduct from "./Pages/AddProduct"
import Forgotpass from "./Pages/Forgetpass"
import GetAllUser   from "./Pages/GetAllUser"
import AdminDashboard  from "./Pages/AdminDashboard"
import SingleProduct    from "./Pages/SingleProduct"
import Login from './Pages/Login';
import Footer from "./Components/footer/Footer"
import About from './Pages/About';
import OurStore from './Pages/OurStore';
import ProdDetails from './Pages/Prod-details/ProdDetails';
import UpdateProd from './Pages/UpdateProd';
import New from './Pages/New';

function App() {
  return (
    <div className="App">
      <TopNavbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Profile" element={<Profile/>} />
      <Route path="/Register" element={<Register />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/newProd" element={<AddProduct  />} />
      <Route path="/reset" element={<Forgotpass />} />
      <Route path="/login" element={<Login />} />
      <Route path="/store" element={<OurStore/>}/>
      <Route path="/news" element={<New/>}/>
      <Route path="/about" element={<About/>} />
      <Route path='/AllUsers' element={<GetAllUser/>}/>
      <Route path='/singleProd' element={<SingleProduct/>}/>
      <Route path='/Prod-details/:id' element={<ProdDetails/>}/>
      <Route path='/UpdateProd/:id' element={<UpdateProd/>}/>

      </Routes>
      <Footer/>
      </div>
     
  );
}

export default App;
