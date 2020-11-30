import React from "react"
import { Card, Button } from "react-bootstrap"
import styles from "./ShowUser.module.css"
import { useHistory } from "react-router-dom"
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { deleteUser } from "../HandleAPI"
import { PrintInformation } from "../Information"
import Age from "./calcAge"

function CardComponent(props){

    
    const { url,user } = props
    const age = Age(new Date(user.birthdate))
    const { id,username } = user
    const information = PrintInformation(user)
    const history = useHistory()

    function handleClick(target){

        const { value } = target
        if(value === "edit"){
            const path = history.location.pathname
            history.push(path+"edit")
        }
        else{
            confirmAlert({
                title: 'Confirm to delete',
                message: 'Are you sure you want to delete your account?',
                buttons: [
                  {
                    label: 'Yes',
                    onClick: () => {
                                    deleteUser(id)
                                    history.push("/")
                                    history.go(0)
                                }
                  },
                  {
                    label: 'No'
                  }
                ]
              });
        }
    }

    return(
           <Card className={styles.card}>
                <Card.Img style={{width : "200px", height : "200px", marginTop: "10px", marginLeft: "25%"}} variant="top" src={url}/>
                <hr/>
                <Card.Body>
                    <Card.Title className={styles.cardTitle}>
                        <h3>{username}</h3>
                        <p>age: {age}</p>
                    </Card.Title>
                    <Card.Text className={styles.cardText}>
                        {information}
                    </Card.Text>
                    <Button variant="primary" value="edit"   onClick={(e) => handleClick(e.target)} className={styles.btn}>Edit</Button>
                    <Button variant="danger"  value="delete" onClick={(e) => handleClick(e.target)} className={styles.btn}>Delete</Button>
                </Card.Body>
            </Card>
    )
}

export default CardComponent