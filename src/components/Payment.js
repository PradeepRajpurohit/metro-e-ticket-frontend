import React, { useContext } from 'react'
import TicketContext from '../context/ticket/Ticketcontext';
import { Link } from 'react-router-dom';

export default function Payment() {

    const context = useContext(TicketContext);
    const {ticket} = context;
    return (
        <div className='bg-black bg-opacity-5 py-5 px-5'>
        <div className='text-center'>
            <div className='w-96 m-auto py-5 rounded-lg shadow-lg bg-white max-[425px]:w-full'>
                <h4 className='text-red-600 font-bold text-xl'>Payment Details</h4>
                <h4 className='text-red-600 font-bold text-start ml-10 mt-8 text-xl'>Amount : {ticket.fare} Rs</h4>
                <hr className='h-[2px] bg-red-600 my-2 w-4/5 m-auto opacity-25' />
                <h4 className='text-red-600 font-bold text-start ml-10 mt-2 text-xl'>Pay with UPI</h4>
                <div>
                    <ul className='grid-cols-4 grid text-red-600 text-sm font-semibold mt-2 mx-10 space-x-2 max-[320px]:mx-4'>
                        <li className='border-2 my-3 shadow-md rounded-full flex text-center items-center justify-center max-[425px]:text-xs hover:bg-red-600 hover:text-white transition-all'>Paytm</li>
                        <li className='border-2 my-3 shadow-md rounded-full flex text-center items-center justify-center max-[425px]:text-xs  hover:bg-red-600 hover:text-white transition-all'>PhonePe</li>
                        <li className='border-2 my-3 shadow-md rounded-full flex text-center items-center justify-center max-[425px]:text-xs  hover:bg-red-600 hover:text-white transition-all'>G Pay</li>
                        <li className='border-2 my-3 shadow-md rounded-full flex text-center items-center justify-center max-[425px]:text-xs  hover:bg-red-600 hover:text-white transition-all'>other</li>
                        
                    </ul>
                </div>
                <form>
                    <label htmlFor="upi"></label><br />
                    <input required className='w-4/5 p-2 rounded-lg border-[1px] hover:border-black' type="text" id="upi" name="upi" placeholder='UPI ID' autoComplete='off' /><br />
                    <label htmlFor="pin"></label><br />
                    <input required className='w-4/5 p-2 rounded-lg border-[1px] hover:border-black' type="text" id="pin" name="pin" placeholder='Pin' autoComplete='off' /><br /><br />

                </form>
                    <div className='text-center'>
                        <Link className='text-white transition-all font-semibold bg-red-600 px-6 py-1 my-1 rounded hover:text-red-600 border-red-600 border-[1px] hover:bg-white' to="/qrticket">Make Payment</Link>
                    </div>
            </div>
        </div>
        </div>
    )
}

