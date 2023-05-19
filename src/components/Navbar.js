import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import metro from '../assests/images/metro.png'
import TicketContext from '../context/ticket/Ticketcontext';



export default function Navbar() {
    // const capital = (type) =>{

    //     return type.charAt(0).toUpperCase();
    // }

    const context = useContext(TicketContext);
    const { user, getUserDetail } = context;
    const [show, setShow] = useState("none");
    const handleUserShow = () => {
        if (show === "none") {
            setShow("block");
        }
        else {
            setShow("none");
        }
    }
    const handleLogout = () => {
        localStorage.clear();
        setShow("none")
    }



    useEffect(() => {
        // eslint-disable-next-line
        { localStorage.getItem("authToken") && getUserDetail() }
        // eslint-disable-next-line
    }, [])
    return (
        <>
            <div className='h-24 flex items-center justify-between px-20 shadow-md z-10 max-[768px]:px-5 max-[425px]:h-16'>

                <img className='max-[425px]:w-12' src={metro} alt=""></img>

                <ul className='flex space-x-14 text-red-600 font-semibold max-[425px]:hidden'>
                    <li className='hover:font-bold'><Link to='/'>Home</Link></li>
                    <li className='hover:font-bold'><Link to='/about'>About Us</Link></li>
                    <li className='hover:font-bold'><Link to='/showticket'>Show Ticket</Link></li>
                    <li className='hover:font-bold'><Link to='/bookinghistory'>Booking History</Link></li>
                </ul>

                {localStorage.getItem("authToken") ? <div className="relative inline-block">
                    <button onClick={handleUserShow} className="bg-red-600 text-white w-16 h-16 text-4xl flex items-center justify-center rounded-full cursor-pointer max-[425px]:w-12 max-[425px]:h-12 max-[425px]:text-3xl">P</button>
                    <div className="transition-all absolute bg-white min-w-fit z-10 p-4 shadow-lg right-0 mt-6" style={{ "display": `${show}` }}>
                        <div className='flex space-x-2 items-center'>
                            <div className="bg-red-600 text-white w-16 h-16 text-4xl flex items-center justify-center rounded-full cursor-pointer max-[425px]:w-12 max-[425px]:h-12 max-[425px]:text-3xl">P</div>
                            <div>
                                <p>{user.name}</p>
                                <p>{user.email}</p>
                            </div>
                        </div>
                        <div className='my-4 text-center'>
                            <Link onClick={handleLogout} className='text-white transition-all inline-block font-semibold bg-red-600 px-6 py-1 rounded hover:text-red-600 border-red-600 border-[1px] hover:bg-white' to='/'>Logout</Link>
                        </div>
                    </div>
                </div> :
                    <div className='flex space-x-6 text-white'>
                        <Link className='transition-all inline-block font-semibold bg-red-600 px-6 py-1 rounded hover:text-red-600 border-red-600 border-[1px] hover:bg-white' to='/signin'>Sign In</Link>
                        <Link className='transition-all inline-block font-semibold bg-red-600 px-6 py-1 rounded hover:text-red-600 border-red-600 border-[1px] hover:bg-white max-[768px]:hidden' to='/signup'>Sign Up</Link>
                    </div>}


            </div>
            <div>
                <ul className='grid-cols-4 grid text-red-600 text-sm font-semibold mt-2 mx-1 min-[430px]:hidden'>
                    <li className='border-2 p-2 shadow-md rounded flex text-center items-center justify-center'><Link to='/'>Home</Link></li>
                    <li className='border-2 p-2 shadow-md rounded flex text-center items-center justify-center'><Link to='/about'>About Us</Link></li>
                    <li className='border-2 p-2 shadow-md rounded flex text-center items-center justify-center'><Link to='/showticket'>Show Ticket</Link></li>
                    <li className='border-2 p-2 shadow-md rounded flex text-center items-center justify-center'><Link to='/bookinghistory'>Booking History</Link></li>
                </ul>
            </div>
        </>
    )
}
