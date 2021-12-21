import React from 'react'
import {Table} from "react-bootstrap"
export const TicketTable = ({tickets}) => {
    return (
       <Table striped bordered hover>
           <thread>
                
           <tr>
                
               <th>#</th>
               <th>Subjects</th>
               <th>Status</th>
               <th>Opened Date</th>
           </tr>
           </thread>
           <tbody>
               {tickets.length ? (  
                   tickets.map((row,i)=>(
                <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.subject}</td>
                <td>{row.status}</td>
                <td>{row.addedAt}</td>
                </tr>
               
               ))
               ):(
                   <tr>
                       <td colSpan="4" className='text-center'>No tickets show</td>
                   </tr>
               )}
               
              

           </tbody>
           

       </Table>
    )
}
