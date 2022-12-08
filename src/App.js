import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { Home } from './components/Pages/Home';
import { Login } from './components/Pages/Login';
import { MyOrders } from './components/Pages/MyOrders';
import { PageNotFound } from './components/Pages/PageNotFound';
import { Profile } from './components/Pages/Profile';

function App() {
  return (
    <div className="App">
      <h1 className='bg-dark'>React Router</h1>
      <Header/>
      {/* <Home/>
      <Profile/>
      <Login/> */}
      <Routes>
        <Route path='/homepage' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}>
          <Route path='myorders' element={<MyOrders/>}/>
          <Route path='mywishlist' element={<div>My wishlist page</div>}/>
          <Route path='myaddress' element={<div>My address page</div>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
        {/* <Route path='*' element={<div>Page not found</div>}/> */}
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
