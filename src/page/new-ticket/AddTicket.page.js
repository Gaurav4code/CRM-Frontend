import React,{useState, useEffect} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { AddTicketForm } from '../../components/add-ticker-form/AddTicketForm.comp'
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp'
import { shortText } from '../../utils/validation';



const initialFrmDt ={
  subject :'',
  issueDate:null,
  detail:"",
};
const initialFrmError ={
    subject :false,
    issueDate:false,
    detail:false,
  };

export const AddTicket = () => {
    const [frmData, setFrmData]=useState(initialFrmDt);
    const [frmDataErro, setFrmDataErro]=useState(initialFrmDt);
    useEffect(() =>{
        
    },[frmData,frmDataErro]);
    const handleOnChange = (e) =>{
           
        
    const {name,value} =e.target;

     setFrmData({
         ...frmData,
         [name]: value,
     });



  
    };
    const handleOnSubmit = async (e) =>{
        setFrmDataErro(initialFrmError)
        e.preventDefault();

        const isSubjectValid = await shortText(frmData.subject);
         setFrmDataErro({
              ...initialFrmError,
               subject: !isSubjectValid,
        })

        console.log('Form submit request recieved', frmData);
    }
    return (
        <Container>
            <Row>
                <Col>
                
                <PageBreadcrumb page="New Ticket"/>
                </Col>
            </Row>
            <Row>
                <Col>
                <AddTicketForm handleOnChange={handleOnChange}
                 handleOnSubmit={handleOnSubmit}
                 frmDataErro={frmDataErro}
                frmDt={frmData}
                />

                </Col>
            </Row>
            
        </Container>
    )
}
