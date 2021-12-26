import React from 'react' 
import { Form,Button, Container,Row,Col} from "react-bootstrap";
import "./add-ticket-form.css"
import {shortText} from "../../utils/validation"

import PropTypes  from 'prop-types';
export const AddTicketForm = ({handleOnSubmit,handleOnChange,frmDt, frmDataError}) => {
    console.log(frmDt);
    return (
        <Container className="mt-3 add-new-ticket bg-ticket">
            <h1 className="text-info text-center">Add New Ticket</h1>
            <hr/>
            <Form autoComplete='off' onSubmit = {handleOnSubmit}>
                       <Form.Group as={Row}>
                           <Form.Label  column sm={3}>
                          Subject
                               </Form.Label>
                           <Col sm={9}>
                           
                               <Form.Control
                         
                                 name="subject"
                                //  minLength="3"
                                  value={frmDt.subject}
                                 onChange={handleOnChange}
                                 placeholder='Subject'
                                 required
                               />
                               <Form.Text  className="text-danger">
                               {!frmDataError.subject && "Subject is required!"}
                               </Form.Text>
                          </Col>
                       </Form.Group>
                       <Form.Group as={Row}>
                           <Form.Label column sm={3}>
                          Issue Found
                               </Form.Label>
                               <Col sm={9 }>
                              
                               <Form.Control
                               type="date"
                            
                                 name="issueDate"
                                  value={frmDt.date}
                                  onChange={handleOnChange}
                              

                                 required
                               />
                          </Col>
                       </Form.Group>
                       <Form.Group>
                           <Form.Label>
                               Issue
                               </Form.Label>
                               <Form.Control
                              
                                 as="textarea"
                                 name="detail"
                                 rows="5"
                                 value={frmDt.detail}
                                 onChange={handleOnChange}
                               

                                 required
                               />
                         
                       </Form.Group>
                       <hr/>
                       <Button type="submit" variant="info" block >Add Ticket</Button>
                   </Form>

        </Container>
    )
}
AddTicketForm.propTypes = {
    handleOnSubmit:PropTypes.func.isRequired,
    handleOnChange:PropTypes.func.isRequired,
    frmDt:PropTypes.object.isRequired,
    frmDataError:PropTypes.object.isRequired,
}