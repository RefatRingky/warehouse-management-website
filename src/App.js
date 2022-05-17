import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './Pages/AddItem/AddItem';
import ManageItem from './Pages/ManageItem/ManageItem';
import MyItem from './Pages/MyItem/MyItem'
import Blog from './Pages/Blog/Blog';
import CheckOut from './Pages/CheckOut/CheckOut';
import Home from './Pages/Home/Home/Home';
import Inventory from './Pages/Inventory/Inventory';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequiredAuth from './Pages/Login/RequiredAuth/RequiredAuth';
import Footer from './Pages/Shared/Footer/Footer'
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Product from './Pages/Product/Product';
import Products from './Pages/Products/Products';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='item/:itemId' element={<Inventory></Inventory>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/product' element={<Products></Products>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout' element={
          <RequiredAuth>
            <CheckOut></CheckOut>
          </RequiredAuth>
        }></Route>
        <Route path='/additem' element={
          <RequiredAuth>
           <AddItem></AddItem>
          </RequiredAuth>
        }></Route>
        <Route path='/manageitem' element={
         <RequiredAuth>
           <ManageItem></ManageItem>
         </RequiredAuth>
        }></Route>
        <Route path='/myitem' element={
          <RequiredAuth>
            <MyItem></MyItem>
          </RequiredAuth>
        }>

        </Route>

        
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
