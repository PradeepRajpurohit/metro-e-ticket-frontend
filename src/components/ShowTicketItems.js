import React, { useContext } from 'react'
import TicketContext from '../context/ticket/Ticketcontext';
import { useNavigate } from 'react-router-dom';

export default function ShowTicketItems(props) {
    const navigate = useNavigate();
    const context = useContext(TicketContext);
    const {setQrTicket} = context;
    
    const {from,to,fare,date} = props.ticket;
    
    const handleTicket = ()=>{
      setQrTicket(props.ticket);
      navigate("/qrticket")
      }
  return (
      <div onClick={handleTicket} className='flex border-2 rounded cursor-pointer max-[425px]:text-xs'>
        <div className='p-0 flex justify-center w-1/4 bg-red-600 rounded-r'>
          <img src={props.ticketlogo} alt=''></img>
        </div>
        <div className='px-2'>
          <p className='font-bold'>{from} : {to}</p>

          <p className='font-bold'>Fare : <span className='font-normal'>{fare} Rs</span></p>
          <p className='font-bold'>Time : <span className='font-normal'>{date}</span></p>
        </div>
      </div>
  )
}
