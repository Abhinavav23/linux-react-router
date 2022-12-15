import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthContext } from './components/Context/AuthContext';
import { Header } from './components/Header';
import { Navigator } from './components/Navigator/Navigator';
import { Home } from './components/Pages/Home';
import { Login } from './components/Pages/Login';
import { MyOrders } from './components/Pages/MyOrders';
import { PageNotFound } from './components/Pages/PageNotFound';
import { Product } from './components/Pages/Product';
import { Profile } from './components/Pages/Profile';
import { Signup } from './components/Pages/Signup';
import { User } from './components/Pages/User'
function App() {
  return (
    <AuthContext>
    <div className="App">
      <h1 className='bg-dark'>React Router</h1>
      <Header/>
      {/* <Home/>
      <Profile/>
      <Login/> */}
      <Routes>
        <Route path='/' element={<h3>Welcome to my App</h3>}/>
        <Route path='/homepage' element={<Navigator><Home/></Navigator>}/>
        <Route path='profile/*' element={<Navigator><Profile/></Navigator>}>
          <Route path='myorders' element={<MyOrders/>}/>
          <Route path='mywishlist' element={<div>My wishlist page</div>}/>
          <Route path='myaddress' element={<div>My address page</div>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>

        {/* <Route path='*' element={<div>Page not found</div>}/> */}
        <Route path='*' element={<PageNotFound/>}/>
        {/* to add the id's value dynamically in the URL */}
        <Route path='/user/:userId/:userType' element={<User/>}/>
        <Route path='/product' element={<Product/>}/>
      </Routes>
      <br/>
      <footer>this is footer</footer>
    </div>
    </AuthContext>
  );
}

export default App;

// 'a' === 'aaa'