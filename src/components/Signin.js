import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import metro from '../assests/images/metro.png'
import TicketContext from '../context/ticket/Ticketcontext';

export default function Signin() {

    const context = useContext(TicketContext);
    const { getUserDetail } = context;

    const [cred, setCred] = useState({ email: "", password: "" });

    let navigate = useNavigate();

    const onchange = (e) => {
        setCred({ ...cred, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: cred.email, password: cred.password }),
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            localStorage.setItem("authToken", json.authToken);
            getUserDetail();
            navigate('/');
        }
        else {
            alert(json.error)

        }
    }

    return (
        <div className='items-center text-center h-full w-96 my-5 m-auto bg-gray-200 rounded py-8'>
            <img className='m-auto' src={metro} alt=""></img>
            <h2 className='text-red-600 font-bold text-3xl'>Delhi Metro</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email"></label><br />
                <input className='w-4/5 p-2 rounded border-[1px] hover:border-black' type="email" id="email" name="email" value={cred.email} placeholder='Email' onChange={onchange} /><br />
                <label htmlFor="password"></label><br />
                <input className='w-4/5 p-2 rounded border-[1px] hover:border-black' type="text" id="password" name="password" value={cred.password} placeholder='password' autoComplete='off' onChange={onchange} /><br /><br />
                <input className='text-white cursor-pointer transition-all inline-block font-semibold bg-red-600 px-6 py-1 rounded hover:text-red-600 border-red-600 border-[1px] hover:bg-white' type="submit" value="Sign In" />
            </form>
            <hr className='h-[2px] bg-black my-6 w-4/5 m-auto opacity-25' />
            <a className='transition-all hover:text-red-600' href='/'>Forgot password?</a>
            <p>Don't Have an account? <Link className='transition-all hover:text-red-600' to='/signup'>Sign Up</Link></p>



        </div>
    )
}
