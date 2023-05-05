import React, { useContext } from 'react'
import TicketContext from '../context/ticket/Ticketcontext'
import QRCode from 'react-qr-code'
import { useNavigate } from 'react-router-dom';

// import { Link } from 'react-router-dom'

// import ticketlogo from '../assests/images/ticketlogo.png'

export default function Qr() {
  const context = useContext(TicketContext);
  const { genTicket, addterminatedticket, deleteTicket, updateTicket } = context;
  const { _id, from, to, fare, way } = genTicket;
  const navigate = useNavigate();

  const handleClick = () => {
    if (way === "2") {
      console.log(_id);
      updateTicket(_id, "1");
      navigate("/qrticket");
    }
    else {
      addterminatedticket(genTicket.from, genTicket.to, genTicket.fare);
      deleteTicket(genTicket._id);
      navigate("/");
    }
  }

  return (
    <div className='w-96 border-2 m-auto p-4 my-5 text-red-600 rounded'>
      <h2 className='text-2xl font-bold text-center'>Your QR Ticket</h2><br />
      {/* <div className='flex border-2 rounded'>
        <div className='p-0 flex justify-center w-1/4 bg-red-600 rounded-r'>
          <img src={ticketlogo} alt=''></img>
        </div>
        <div className='px-2'>
          <p className='font-bold'>{genTicket.from} : {genTicket.to}</p>

          <p className='font-bold'>Fare : <span className='font-normal'>{genTicket.fare} Rs</span></p>
          <p className='font-bold'>Time : <span className='font-normal'>{genTicket.date}</span></p>
        </div>


      </div>
      <div className='text-center mt-6'>
        <Link onClick={handleClick} className='text-white transition-all font-semibold bg-red-600 px-6 py-1 rounded hover:text-red-600 border-red-600 border-[1px] hover:bg-white' to='/'>Check Ticket</Link>
      </div> */}
      <QRCode onClick={handleClick}
        size={256}
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        value={`${from},${to},${fare},${way}`}
        viewBox={`0 0 256 256`}
      />



    </div >

  )
}
