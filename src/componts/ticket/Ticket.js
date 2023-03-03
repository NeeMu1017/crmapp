import React, { useEffect, useState } from 'react';
import "./Ticket.css"

import { Navbar } from '../Navbar/Navbar';
import { useNavigate } from 'react-router';
import Ticketdesboard from './ticketdasboard/Ticketdesboard';

const Ticket = () => {
    const [tickets, setTickets] = useState([]);
    const [fillterTicket,setFillterTicket] = useState([]);
    const [counts,setCounts] =useState([])
    const naviagte = useNavigate();


    useEffect(() => {
        fetch(process.env.REACT_APP_APIURL +"ticket")
            .then((res) => res.json())
            .then((parsedRes) => {
                setTickets(parsedRes);
                setFillterTicket(parsedRes)
                let obj ={};
                obj.total =parsedRes.length
                obj.new = parsedRes.filter( t => t.status === "New").length
                obj.assigned = parsedRes.filter(t => t.status === "Assigned").length
                obj.inprogress = parsedRes.filter(t => t.status === "In Progress").length
                obj.resolved = parsedRes.filter(t => t.status === "Resolved").length
                setCounts(obj)

            });
    }, []);

    function handleEditClick(desc) {
        naviagte("/ticketform/" + desc);
    }

    function handleSearch(key){
        const result = tickets.filter(t => t.desc.includes(key));
        
        setFillterTicket(result);
    }
    function colorstatus(prop){

        switch(prop){
            case  "New" :
                return "st_new";
            case "Assigned" :
                return "st_assigned"
            case "In Progress" :
                return "st_inprogress"
            default:
                return "st_resolved" 
        }
        // if (prop === "New"){
        //     return "st_new"
        // } else if (prop === "Assigned"){
            
        // }else if(prop === "In Progress"){
        //     return "st_inprogress"
        // }else {
           
        // }
    }
    return (
        <div>
            <Navbar />
            <Ticketdesboard counts = {counts}/>
            <div className='container m-3'>
                <div className='container' >
                    <div className='col-10'>
                        <button
                            onClick={() => { naviagte("/ticketform") }}
                            className="btn btn-success mb-3">
                            New Ticket
                        </button>
                    </div>
                    <div className="search-box-wrapper">
                        <input
                            placeholder="Search..."
                            onInput={(e) =>handleSearch(e.target.value)}
                            className="search-box" type="search" />&nbsp;&nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </div>
                </div>

            </div>
            <div className="container">


                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Customer</th>
                            <th scope="col">Description</th>
                            <th scope="col">Assigned To</th>
                            <th scope="col">Status</th>
                            <th scope="col">Raised On</th>
                            <th> Update </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            fillterTicket.map(t =>
                                <tr>
                                    <td>{t.customer}</td>
                                    <td>{t.desc}</td>
                                    <td>{t.assignedTo}</td>
                                    <td className={colorstatus(t.status)}>{t.status}</td>
                                    <td>{t.raisedOn}</td>
                                    <td>
                                        <button
                                            onClick={() => { handleEditClick(t.desc) }}
                                            className="btn btn-warning">Edit</button>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Ticket