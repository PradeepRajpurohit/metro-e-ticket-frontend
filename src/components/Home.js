import React,{useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import TicketContext from '../context/ticket/Ticketcontext'

export default function Home() {

    const navigate = useNavigate();
    const context = useContext(TicketContext);
    const {getTicketDetail} = context;

    const [st,setSt] = useState({from:"",to:""})

    const onchange =(e)=>{
        setSt({...st,[e.target.name]:e.target.value})
    }

    const handleBookTicket = () =>{
        getTicketDetail(st.from,st.to);
        navigate('/preview');
    }

    return (
        <div className='text-center px-5'>
            <h2 className='text-red-600 font-bold text-3xl my-8 mb-8 max-[425px]:text-2xl'>Welcome to Delhi Metro</h2>
            <div className='w-96 m-auto border-2 py-5 rounded max-[425px]:w-full'>
                <h4 className='text-red-600 font-bold text-xl'>Book Your Ticket Now</h4>
                <form className='space-y-4'  onSubmit={handleBookTicket}> 
                    <label htmlFor="from"></label><br />
                    <input required className='w-4/5 p-2 rounded border-[1px] hover:border-black' type="text" id="from" name="from" placeholder='From' list='stations' value={st.from} autoComplete='off' onChange={onchange} /><br />
                    <label htmlFor="to"></label><br />
                    <input required className='w-4/5 p-2 rounded border-[1px] hover:border-black' type="text" id="to" name="to" placeholder='To' list='stations' value={st.to} autoComplete='off'  onChange={onchange} /><br /><br />
                    <datalist id='stations'>
                        <option value='Shaheed Sthal'>Shaheed Sthal</option>
                        <option value='Hindon'>Hindon</option>
                        <option value='Arthala'>Arthala</option>
                        <option value='Mohan Nagar'>Mohan Nagar</option>
                        <option value='Shyam park'>Shyam park</option>
                        <option value='Major Mohit Sharma'>Major Mohit Sharma</option>
                        <option value='Raj Bagh'>Raj Bagh</option>
                        <option value='Shaheed Nagar'>Shaheed Nagar</option>
                        <option value='Dilshad Garden'>Dilshad Garden</option>
                        <option value='Jhilmil'>Jhilmil</option>
                        <option value='Mansarovar Park'>Mansarovar Park</option>
                        <option value='Shahdara'>Shahdara</option>
                        <option value='Welcome'>Welcome</option>
                        <option value='Seelampur'>Seelampur</option>
                        <option value='Shastri Park'>Shastri Park</option>
                        <option value='Kashmere Gate'>Kashmere Gate</option>
                        <option value='Tis Hazari'>Tis Hazari</option>
                        <option value='Pul Bangash'>Pul Bangash</option>
                        <option value='Pratap Nagar'>Pratap Nagar</option>
                        <option value='Shastri Nagar'>Shastri Nagar</option>
                        <option value='Inderlok'>Inderlok</option>
                        <option value='Kanhiya Nagar'>Kanhiya Nagar</option>
                        <option value='Keshav Puram'>Keshav Puram</option>
                        <option value='Netaji Subhash Place'>Netaji Subhash Place</option>
                        <option value='Kohat Enclave'>Kohat Enclave</option>
                        <option value='Pitam Pura'>Pitam Pura</option>
                        <option value='Rohini East'>Rohini East</option>
                        <option value='Rohini West'>Rohini West</option>
                        <option value='Rithala'>Rithala</option>
                    </datalist>
                    <div className='text-center'>
                        <input className='text-white transition-all font-semibold bg-red-600 px-6 py-1 rounded hover:text-red-600 border-red-600 border-[1px] hover:bg-white' type="submit"/>
                    </div>
                </form>
            </div>
        </div>
    )
}
