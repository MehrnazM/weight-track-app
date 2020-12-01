import React from "react"
import Card from 'react-bootstrap/Card'

function About(){
    
    return(
        <div>
            <Card className="text-center">
                <Card.Body>
                    <Card.Title style={{fontSize:"30px"}}>
                        Weight track application
                    </Card.Title>
                    <Card.Text style={{marginLeft: "38%",fontSize:"20px"}}className="col-md-3">
                        <br/>
                        This is a full-stack design, implemented by <span style={{fontStyle:"italic"}}>Mehrnaz</span>. 
                        The frontend is designed by ReactJs and Bootstrap. 
                        The backend is implmeneted with Node.js. The database management tool is 
                        Postgres.
                        This app helps you to track your body changes and reach your goal easier. 
                    </Card.Text>
                </Card.Body>
               
            </Card>
        </div>
    )
}



export default About
