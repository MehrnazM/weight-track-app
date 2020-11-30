import { React, Component } from "react"
//import userData from "../userData"
import loginStyle from "../Login/Login.module.css"
import styles from "./SignIn.module.css"
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faKey } from "@fortawesome/free-solid-svg-icons";
import {getUserByUserPass} from "../HandleAPI"

class SignIn extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            username : "",
            password : "",
            authorize : true,
            data : {}
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(target){
        
        const {name , value} = target
        this.setState(prevState => {
            return {
            ...prevState,
            [name] : value
        }
        })
    }
    
    async handleSubmit(e){
        e.preventDefault()
       const user = await getUserByUserPass(this.state.username,this.state.password)
       .then(data => {
           console.log(data)
            if(data !== null){
                this.setState({authorize : true})
                const id = data.id
                const path = `/user/${id}/${this.state.username}/`
                this.props.history.push(path)
                this.props.history.go(0)
                return
            }
        })
        .catch(e => console.log(e))
        
        this.setState({
            username : "",
            password : "",
            authorize : false
        })
        
       
    }

    render(){
        const condStyle = (this.state.authorize === false)?{marginLeft : "15px"}:{marginLeft: "0"}
        return(
            <div className={`col-md-3 ${loginStyle.box}`}>
                    <form style={condStyle} className={styles.formStyle} onSubmit={e => this.handleSubmit(e)}>
                    <span>Username:</span>
                        <div style={{position: "relative"}}>
                            <span><FontAwesomeIcon style={{position:"absolute",top:"25%"}} icon={faUser} size="sm" 
                                                   color="#343a40" fixedWidth /></span>
                            <input style={{paddingLeft:"20px"}}type="text" name="username" 
                                   value={this.state.username} required 
                                   onChange={(e) => this.handleChange(e.target)}/>
                        </div>
                        <br/>
                        <span>Password:</span>
                        <div style={{position: "relative"}}>
                            <span><FontAwesomeIcon style={{position:"absolute",top:"25%"}} icon={faKey} size="sm" 
                                                    color="#343a40" fixedWidth /></span>
                            <input style={{paddingLeft:"20px"}} type="password" name="password" 
                                    value={this.state.password} required 
                                    onChange={(e) => this.handleChange(e.target)}/>
                        </div>
                        <br/>
                        {(!this.state.authorize)&&<span className={styles.error}>
                                                        *Please enter a valid username and password.</span>}
                        <br/>
                        <input className={styles.btn} type="submit" value="Sign in"/>
                    </form>
            </div>
        )
    }
}

export default withRouter(SignIn)
