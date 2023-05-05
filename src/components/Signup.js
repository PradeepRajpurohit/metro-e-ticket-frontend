import React, { useContext, useState } from 'react'
import {useNavigate,Link} from 'react-router-dom'
import metro from '../assests/images/metro.png'
import TicketContext from '../context/ticket/Ticketcontext';

export default function Signup() {

    const context = useContext(TicketContext);
    const {getUserDetail} = context;

    const [cred,setCred] = useState({name:"",email:"",password:"",cpassword:""});

    let navigate = useNavigate();

    const onchange = (e) =>{
        setCred({...cred, [e.target.name]:e.target.value})
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        if(cred.password!==cred.cpassword){
            alert("enter same password");
        }
        const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name:cred.name, email: cred.email, password: cred.password }),
        });
        const json = await response.json();
        console.log(json);
        if(json.success){
            localStorage.setItem("authToken",json.authToken);
            getUserDetail();
            navigate('/');
        }
        else{
            alert(json.error)

        }
    }

    return (
        <div className='items-center text-center h-full w-96 my-5 m-auto bg-gray-200 rounded py-8'>
            <img className='m-auto' src={metro} alt=""></img>
            <h2 className='text-red-600 font-bold text-3xl'>Delhi Metro</h2>
            <form onSubmit={handleSubmit} autoComplete='off'>
                <label htmlFor="name"></label><br />
                <input className='w-4/5 p-2 rounded border-[1px] hover:border-black' type="text" id="name" name="name" value={cred.name} placeholder='Full Name' onChange={onchange}/><br />
                <label htmlFor="email"></label><br />
                <input className='w-4/5 p-2 rounded border-[1px] hover:border-black' type="email" id="email" name="email" value={cred.email} placeholder='Email' onChange={onchange}/><br />
                <label htmlFor="password"></label><br/>
                <input className='w-4/5 p-2 rounded border-[1px] hover:border-black' type="password" id="password" name="password" value={cred.password} placeholder='Password' onChange={onchange} /><br />
                <label htmlFor="cpassword"></label><br/>
                <input className='w-4/5 p-2 rounded border-[1px] hover:border-black' type="password" id="cpassword" name="cpassword" value={cred.cpassword} placeholder='Confirm Password' onChange={onchange} /><br /><br />
                <button className='text-white cursor-pointer transition-all inline-block font-semibold bg-red-600 px-6 py-1 rounded hover:text-red-600 border-red-600 border-[1px] hover:bg-white' type="submit">Sign Up</button>
            </form>
            <hr className='h-[2px] bg-black my-6 w-4/5 m-auto opacity-25'/>
            <p>Already have an account? <Link className='transition-all hover:text-red-600' to='/signin'>Sign In</Link></p>



        </div>
    )
}
