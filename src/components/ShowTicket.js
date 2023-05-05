import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import TicketContext from '../context/ticket/Ticketcontext'
import ticketlogo from '../assests/images/ticketlogo.png'
import ShowTicketItems from './ShowTicketItems';

export default function ShowTicket() {
  const context = useContext(TicketContext);
  const {tickets,getTickets} = context;
  const navigate = useNavigate();

  useEffect(()=>{
    if(localStorage.getItem("authToken")){
      getTickets();
    }
    else{
      navigate("/signin")
    }
    // eslint-disable-next-line
  },[])
  

  return (
    <div className='w-96 border-2 m-auto p-4 my-5 text-red-600 rounded' >
      <h2 className='text-2xl font-bold text-center'>Your Ticket</h2><br />
      {localStorage.getItem("authToken") && tickets.map((ticket)=>{
        return <ShowTicketItems key={ticket._id} ticket={ticket} way={ticket.way} ticketlogo={ticketlogo}/>
      })}


      <div className='text-center mt-6'>
        <Link className='text-white transition-all font-semibold bg-red-600 px-6 py-1 rounded hover:text-red-600 border-red-600 border-[1px] hover:bg-white' to='/'>Back</Link>
      </div>



    </div >

  )
}
