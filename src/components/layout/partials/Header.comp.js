import React from 'react'
import { Navbar,Nav, NavbarBrand } from 'react-bootstrap'
export const Header = () => {
    return (
        <Navbar collapseOnSelect
        bg="info"
         variant='dark'
         expand="md" >
            <NavbarBrand>
            log
             
            </NavbarBrand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav  className='ml-auto'>
                        <Nav.Link href="/dashboard">DashBoard</Nav.Link>
                        <Nav.Link href="/dashboard">Tickets</Nav.Link>
                        <Nav.Link href="/dashboard">Logout</Nav.Link>

                    </Nav>
                </Navbar.Collapse>

        </Navbar>
    )
}
