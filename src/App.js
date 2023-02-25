import './App.css';
import { pr2,ac1} from './components/colors';
import Footer from './components/footer';
import {Link,Routes,Route} from 'react-router-dom';
import Home from './home';
import About from './about';
import Menu from './menu'
import Booking from './booking';
import Order from './order';
import LogIn from './logIn';
import Header from './components/header';

function App() {
   return (
    <>
    <Header color={ac1}>
      <li><Link to='/' >Home</Link></li>
      <li><Link to='/about' >About</Link></li>
      <li><Link to='/menu' >Menu</Link></li>
      <li><Link to='/booking' >Reservations</Link></li>
      <li><Link to='/order' >Order online</Link></li>
      <li><Link to='/log-in' >Log In</Link></li>
    </Header>
    <main>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/menu' element={<Menu/>}></Route>
      <Route path='/booking' element={<Booking/>}></Route>
      <Route path='/order' element={<Order/>}></Route>
      <Route path='/log-in' element={<LogIn/>}></Route>
    </Routes>
    </main>

    <Footer color={pr2}/>
    </>
  );
}

export default App;
