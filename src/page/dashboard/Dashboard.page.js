import React from 'react'
import {Container, Row , Col ,Button, Breadcrumb} from "react-bootstrap"
import { TicketTable } from '../../components/ticket-table/TicketTable.comp'
import tickets from "../../assets/data/dummy-tickets.json"
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp'
const Dashboard = () => {
    return (

       <Container>
           <Row>
               <Col>
               <PageBreadcrumb page="Dashboard"/>
               </Col>
           </Row>
         <Row>
         <Col className='text-center mt-5 mb-2'>
         
          <Button variant="info" style={{fontSize:'2rem', padding:" 10px 30px"}}>
          Add New Ticket
          </Button>         
         </Col>
         
         
         
         </Row>    
         <Row>
         <Col className='text-center mt-5 mb-2'>
         
          <Button variant="info" style={{'font-size':'2rem', padding:" 10px 30px"}}>
          <div>Total Ticket : 50</div>
          <div>Total Ticket : 50</div>       
           </Button>         
         </Col>
         
         
         
         </Row>
         <Row>
         <Col className='text-center mt-5 mb-2'>
         
          Recently Added tickets         
         </Col>
         
         
         
         </Row>    
         <hr/> 
         <Row>
             <Col className='recent-ticket'>
                 <TicketTable tickets={tickets}/>
             </Col>
         </Row>
         </Container>
    )
}

export default Dashboard
