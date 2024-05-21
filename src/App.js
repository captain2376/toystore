import Header from "./components/Header";
import Home from "./components/Pages/Home";
import Products from "./components/Pages/Products";
import Footer from "./components/Footer";
import { Routes,Route } from "react-router-dom";
import Login from "./components/Login/Login";
import HomePage from "./components/Customer/HomePage";
import AboutUs from "./components/Pages/AboutUs";
import { ViewProducts } from "./components/Customer/ViewProducts";
import { AddProduct } from "./components/Seller/AddProduct";
import Sidebar from "./components/Sidebar";

 function App() {
  return <div className="d-flex">
      <div className="col-auto">
    <Sidebar />
      </div>
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/login' element={<Login />}/> 
     <Route path='/home' element={<HomePage />}/> 
     <Route path='/products' element={<Products />}/> 
     <Route path='/aboutus' element={<AboutUs />}/>
     <Route path='/addproduct' element={<AddProduct /> }/> 
     <Route path="/viewproducts" element={<ViewProducts />}/>
     </Routes>
     {/* <Header/>
     <Footer />  */}
   </div> 
 }

 export default App;