import React from 'react'
import { Container,Row, Col, Form, Button } from 'react-bootstrap';
import PropTypes from "prop-types";
export const LoginForm = ({handleOnChange, handleOnSubmit ,email, formSwitcher ,pass}) => {
    return (
    <Container>
        <Row>
            <Col>
            <h1 className='text-info text-center'>Clinet Login</h1>
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
                       <Form.Group>
                           <Form.Label>
                               Password
                               </Form.Label>
                               <Form.Control
                               type="password"
                                 name="password"
                                 value={pass}
                                 onChange={handleOnChange}
                                 placeholder='password'

                                 required
                               />
                         
                       </Form.Group>
                       <hr/>
                       <Button type="submit">Login</Button>
                   </Form>

                      <hr/>
            </Col>
        </Row>

        <Col>
        <a href="#!" onClick={()=> formSwitcher('reset')}>Forget Password?</a>
        </Col> 

    </Container>
    )
}


    LoginForm.propTypes={
        handleOnChange: PropTypes.func.isRequired,
        handleOnSubmit: PropTypes.func.isRequired,
        formSwitcher:PropTypes.func.isRequired,
        email: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired,
    }