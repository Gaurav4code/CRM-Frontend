import React from 'react'
import { Container,Row, Col, Form, Button } from 'react-bootstrap';
import PropTypes from "prop-types";
export const ResetPassword = ({handleOnChange, handleOnSubmit ,email }) => {
    return (
    <Container>
        <Row>
            <Col>
            <h1 className='text-info text-center'>Reset Password</h1>
                   <hr/>
                   
                   <Form autoComplete='off' onSubmit = {handleOnSubmit}>
                       <Form.Group>
                           <Form.Label>
                               Email Adress 
                               </Form.Label>

                               <Form.Control
                                 type="email"
                                 name="email"
                                 value={email}
                                 onChange={handleOnChange}
                                 placeholder='Enter Email'
                                 required
                               />
                          
                       </Form.Group>
                      
                       <Button type="submit">Login Now</Button>
                   </Form>

                      <hr/>
            </Col>
        </Row>
        <Col>
        <a href="#!">Forget Password?</a>
        </Col> 

    </Container>
    )
}


    ResetPassword.propTypes={
        handleOnChange: PropTypes.func.isRequired,
        handleOnSubmit: PropTypes.func.isRequired,
        email: PropTypes.string.isRequired,
       
    }
