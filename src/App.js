import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Home from './components/Home';
import Preview from './components/Preview';
import Qr from './components/Qr';
import About from './components/About';
import ShowTicket from './components/ShowTicket';
import BookingHistory from './components/BookingHistory';
import TicketState from './context/ticket/TicketState';
import Payment from './components/Payment';

function App() {
  return (
    <>
      <TicketState>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/preview' element={<Preview />}></Route>
            <Route exact path='/payment' element={<Payment />}></Route>
            <Route exact path='/qrticket' element={<Qr />}></Route>
            <Route exact path='/about' element={<About />}></Route>
            <Route exact path='/showticket' element={<ShowTicket />}></Route>
            <Route exact path='/bookinghistory' element={<BookingHistory />}></Route>
            <Route exact path='/signin' element={<Signin />}></Route>
            <Route exact path='/signup' element={<Signup />}></Route>
          </Routes>
        </Router>
      </TicketState>
    </>
  );
}

export default App;
