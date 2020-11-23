import { React, Component } from "react"
import userData from "../userData"
import loginStyle from "../Login/Login.module.css"
import styles from "./SignIn.module.css"
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faKey } from "@fortawesome/free-solid-svg-icons";

class SignIn extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            username : "",
            password : "",
            authorize : true,
            data : userData
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
    
    handleSubmit(e){
        
        const userArr = this.state.data.filter(item => item.username === this.state.username)
        if(userArr !== null){
            for(let i = 0; i < userArr.length; i++){
                const user = userArr[i]
                if(user.password === this.state.password){
                    this.setState({authorize : true})
                    const id = user.id
                    const path = `/user/${id}/${this.state.username}/`
                    this.props.history.push(path)
                    this.props.history.go(0)
                    return
                }
            }
        }
        this.setState({
            username : "",
            password : "",
            authorize : false
        })
        
        e.preventDefault()
    }

    render(){
        const condStyle = (this.state.authorize === false)?{marginLeft : "15px"}:{marginLeft: "0"}
        return(
            <div className={`col-md-3 ${loginStyle.box}`}>
                    <form style={condStyle} className={styles.formStyle} onSubmit={(e) => this.handleSubmit(e)}>
                    <span>Username:</span>
                        <div style={{position: "relative"}}>
                            <span><FontAwesomeIcon style={{position:"absolute",top:"25%"}} icon={faUser} size="md" color="#343a40" fixedWidth /></span>
                            <input style={{paddingLeft:"20px"}}type="text" name="username" value={this.state.username} required onChange={(e) => this.handleChange(e.target)}/>
                        </div>
                        <br/>
                        <span>Password:</span>
                        <div style={{position: "relative"}}>
                            <span><FontAwesomeIcon style={{position:"absolute",top:"25%"}} icon={faKey} size="md" color="#343a40" fixedWidth /></span>
                            <input style={{paddingLeft:"20px"}} type="password" name="password" value={this.state.password} required onChange={(e) => this.handleChange(e.target)}/>
                        </div>
                        <br/>
                        {(!this.state.authorize)&&<span className={styles.error}>*Please enter a valid username and password.</span>}
                        <br/>
                        <input className={styles.btn} type="submit" value="Sign in"/>
                    </form>
            </div>
        )
    }
}

export default withRouter(SignIn)
