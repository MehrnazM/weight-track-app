import { useHistory } from "react-router-dom"
import { NavDropdown, Nav } from 'react-bootstrap'
import React from "react"

function CheckSignIn(){


    const [signIn,setSignIn] = React.useState(false)  
    const [userName, setUserName] = React.useState("") 
    const history = useHistory() 
    React.useEffect(() => {
        const path = history.location.pathname
        const target = "user/"
        if(path.includes(target)){
            let index = path.indexOf(target)
            index = index+target.length
            const startIndex = path.indexOf("/",index)
            const endIndex = path.indexOf("/",startIndex+1)
            let user
            if(endIndex === -1){
                user = path.substr(startIndex+1)
            }
            else{
                user = path.substring(startIndex+1,endIndex)
            }
            setSignIn(() => {
                return true
            })
            setUserName(() => {
                return user
            })
        }
    },[history.location.pathname])

    function handleClick(){
        history.push('/')
        history.go(0)
    }
    return(
        (signIn)? <div style={{width:"fitContent"}}>
                        
                        <Nav variant="dark" bg="dark">
                            
                            <NavDropdown title={`Signed in as: ${userName}`} id="nav-dropdown">
                                <NavDropdown.Item style={{color:"#343a40"}} onSelect={handleClick}>Sign out</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                  </div>:
                     `You are not signed in.`
    )
 
}

export default CheckSignIn