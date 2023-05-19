import React from 'react'

export default function BookingHistoryItems(props) {
    const {from,to,fare,date} = props.prevticket;
    return (
        <div className='flex border-2 rounded max-[425px]:text-xs'>
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
