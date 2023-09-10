import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navBar.css'
const NavBar = (props) => {
    const [send, setSend] = useState('')
    const handleChange = () => {
        props.setSearch(send)
    }

    return (
        <div className='landing'>
            <h1>MovieLand</h1>
            <p>Best Movie you find it in our website</p>
            <Form className="d-flex ">   <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => {
                    setSend(e.target.value)
                }}
            />
                <Link variant="outline-success" className='btn btn-danger' onClick={handleChange} to='/Movie'>Search</Link>
            </Form>
        </div>
    )
}
// 

export default NavBar