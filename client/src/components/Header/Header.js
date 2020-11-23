import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import React from "react"
import { useLocation } from "react-router-dom"
import CheckSignIn from "./CheckSignIn"

function Header(props){

    const loc = useLocation()
    const path = loc.pathname
    let link = "/"
    if(path !== null && path.includes("user")){
        const index = path.lastIndexOf("/")
        link = path.substring(0,index) + "/"
    }
    return(
        <div>
            <Navbar bg="dark" variant="dark"> 
                <Navbar.Brand href={`${link}`}> Welcome to weight track app!</Navbar.Brand>
                <Nav className="mr-auto" >
                    <Nav.Link href={`${link}`}>Home</Nav.Link>
                    <Nav.Link href={`${link}about`}>About</Nav.Link>
                    <Nav.Link href={`${link}contact`}>Contact us</Nav.Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <CheckSignIn/>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}




export default Header