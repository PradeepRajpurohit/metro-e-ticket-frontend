import { useState } from 'react'
import TicketContext from './Ticketcontext'


const TicketState = (props) => {
    const [ticket, setTicket] = useState({});
    const [genTicket,setGenTicket] = useState({});
    const [tickets,setTickets] = useState([]);
    const [terticket,setTerticket] = useState([]);
    const [prevtickets,setPrevtickets] = useState([]);
    const [user,setUser] = useState({});

    //Get all Tickets
    const getTickets = async()=>{

        // API call
        const response = await fetch('http://localhost:5000/api/ticket/fetchactiveticket',{
            method:"GET",
            headers:{
                "Content-Type": "application/json",
                "auth-Token":localStorage.getItem("authToken")
            }
        });
        const json = await response.json();
        setTickets(json);
    }

    //Get Ticket Details For Booking Ticket
    const getTicketDetail = async (from, to) => {

        //API call
        const response = await fetch(`http://localhost:5000/api/getroute`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({from,to})
        });
        const json = await response.json();
        console.log(json);
        setTicket(json);
    }

    //Generate Ticket
    const generateTicket = async (from, to, fare, way) => {

        //API Call for gernerating Ticket
        const response = await fetch(`http://localhost:5000/api/ticket/generateticket`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-Token":localStorage.getItem("authToken")
            },
            body: JSON.stringify({from,to,fare,way})
        });
        const json = await response.json();
        console.log(json);
        setGenTicket(json);
    }

    //methed to Set GenTicket from show Ticket section
    const setQrTicket = (t)=>{
        setGenTicket(t);
    } 

    //Delete active ticket which is checked
    const deleteTicket = async(id)=>{

        //API to delete active ticket which is checked
        const response = await fetch(`http://localhost:5000/api/ticket//deleteticket/${id}`,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-Token":localStorage.getItem("authToken")
            },
        })
        const json = await response.json();
        console.log(json);
    }
    
    //Upadate active ticket which is checked
    const updateTicket = async(id,way)=>{

        //API to update active ticket which is checked once
        const response = await fetch(`http://localhost:5000/api/ticket/updateticket/${id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-Token":localStorage.getItem("authToken")
            },
            body: JSON.stringify({way})
        })
        const json = await response.json();
        // console.log(json);
        setGenTicket(json.ticket);
    }

    //Storing terminated ticket in BookingHistory section
    const addterminatedticket = async (from, to, fare) => {

        //API Call for store ticket
        const response = await fetch(`http://localhost:5000/api/ticket/addprevticket`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-Token":localStorage.getItem("authToken")
            },
            body: JSON.stringify({from,to,fare})
        });
        const json = await response.json();
        console.log(json);
        setTerticket(json);
    }

    //Get all Terminated Tickets
    const getTerminatedTickets = async()=>{

        // API call
        const response = await fetch('http://localhost:5000/api/ticket/fetchprevticket',{
            method:"GET",
            headers:{
                "Content-Type": "application/json",
                "auth-Token":localStorage.getItem("authToken")
            }
        });
        const json = await response.json();
        setPrevtickets(json);
    }

    //Get userDetails
    const getUserDetail = async () => {

        //Api call for getusedetails
        const response = await fetch(`http://localhost:5000/api/auth/getuser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('authToken'),
            },
        });
        const json = await response.json();
        setUser(json);
    }
    

    return (
        <TicketContext.Provider value={{user,ticket,tickets,genTicket,terticket,prevtickets, getTicketDetail,generateTicket,getTickets,deleteTicket,setQrTicket,addterminatedticket,getTerminatedTickets,getUserDetail,updateTicket}}>
            {props.children}
        </TicketContext.Provider>
    )
}

export default TicketState;