import React,{useContext} from 'react'
import TicketContext from '../context/ticket/Ticketcontext'
import { Link, useNavigate } from 'react-router-dom'

export default function Preview() {

    const navigate = useNavigate();
    const context = useContext(TicketContext)
    const {ticket,generateTicket} = context;

    const handlePreview=()=>{
        if(localStorage.getItem("authToken")){
            generateTicket(ticket.origin,ticket.destination,ticket.fare,ticket.way)
            navigate("/payment")
            
        }
        else{
            navigate("/signin")
        }
    }

    return (
        <div className='w-96 border-2 m-auto p-4 my-5 text-red-600 rounded max-[425px]:w-72'>
            <h2 className='text-2xl font-bold text-center'>Preview Ticket Details</h2><br />
            <h4 className='text-xl font-bold'>From : </h4><br />
            <p>{ticket.origin}</p><br />
            <h4 className='text-xl font-bold'>To : </h4><br />
            <p>{ticket.destination}</p><br />
            <h4 className='text-xl font-bold'>Middle Stations : </h4><br />
            <p>{ticket.middlestations}</p><br />
            <h4 className='text-xl font-bold'>Fare : </h4><br />
            <p>{ticket.fare} Rs</p><br />
            <div className='flex justify-between'>
                <Link className='text-white transition-all font-semibold bg-red-600 px-6 py-1 rounded hover:text-red-600 border-red-600 border-[1px] hover:bg-white' to='/'>Back</Link>
                <button onClick={handlePreview} className='text-white transition-all font-semibold bg-red-600 px-6 py-1 rounded hover:text-red-600 border-red-600 border-[1px] hover:bg-white'>Buy Ticket</button>
            </div>


        </div>
    )
}
