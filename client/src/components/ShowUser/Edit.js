import React from "react"
import loginStyles from "../Login/Login.module.css"
import { withRouter } from "react-router-dom";
import styles from "./ShowUser.module.css"
import { getUserById, updateUser} from "../HandleAPI"

class Edit extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            username: this.props.match.params.username,
            id: this.props.match.params.id,
            user : {},
            weight: 0,
            hips: 0,
            chest: 0,
            thighs: 0,
            upperarm: 0,
            waist: 0
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(event){
        
        const { name,value } = event.target
        this.setState({
            [name] : value
        })
    }

    handleClick(event){

        event.preventDefault()
        console.log("I am in click")
        console.log(this.state.user)
        const {value} = event.target
        console.log(value)
        if(value === "Save"){
        
            const editedUser = this.state.user
            console.log(editedUser)
            const today = new Date().toDateString().slice(4)
            const lastIndex = editedUser.date.length - 1
            const lastDate = editedUser['date'][lastIndex]
            const attributes = Object.getOwnPropertyNames(this.state).slice(3)
            if(lastDate === today){
                attributes.forEach(item => {
                    if(this.state[item] !== 0){
                        editedUser[item][lastIndex] = parseFloat(this.state[item])
                    }
                })
            }
            else{
                editedUser.date.push(today)
                attributes.forEach(item => {
                    let lastVal
                    if(this.state[item] === 0){
                        lastVal = editedUser[item][lastIndex]
                    }
                    else{
                        lastVal = parseFloat(this.state[item])
                    }
                    editedUser[item].push(lastVal)
                })
                
            }
            console.log(editedUser)
            updateUser(editedUser)
            this.props.history.push(`/user/${this.state.id}/${this.state.username}/`)
            this.props.history.go(0)
        }
        
    }
    async componentDidMount(){
        const newUser =  await getUserById(this.state.id)
        .then(response => {
            this.setState(prevState => {
                return{
                ...prevState,
                user : response
                }
            })
        })
    }
    render(){
        return(
            <div className={`col-md-3 ${loginStyles.box}`}>
                
                <form>
                    <div className={styles.edit}>
                        <div className={styles.editGridLeft}>
                            <label>Weight: </label>
                            <br/>
                            <label>Waist: </label>
                            <br/>
                            <label>Hips: </label>
                            <br/>
                            <label>Chest: </label>
                            <br/>
                            <label>Thighs: </label>
                            <br/>
                            <label>Upper arms: </label>
                            <br/>
                        </div>
                        <div className={styles.editGridRight}>
                            <input type="number" name="weight" value={(this.state.weight !== 0)?this.state.weight:""} onChange={this.handleChange}/>
                            <br/>
                            <input type="number" name="waist" value={(this.state.waist !== 0)?this.state.waist:""} onChange={this.handleChange}/>
                            <br/>
                            <input type="number" name="hips" value={(this.state.hips !== 0)?this.state.hips:""} onChange={this.handleChange}/>
                            <br/>
                            <input type="number" name="chest" value={(this.state.chest !== 0)?this.state.chest:""} onChange={this.handleChange}/>
                            <br/>
                            <input type="number" name="thighs" value={(this.state.thighs !== 0)?this.state.thighs:""} onChange={this.handleChange}/>
                            <br/>
                            <input type="number" name="upperarms" value={(this.state.upperarms !== 0)?this.state.upperarms:""} onChange={this.handleChange}/>
                            <br/>
                        </div>
                        </div>
                    <div className={styles.editButton}>
                        <input type="button" value="Save" onClick={e => this.handleClick(e)}/><button value="Cancel" onClick={e => this.handleClick(e)}>Cancel</button>
                    </div>
                </form>
               
            </div>
        )
    }
}

export default withRouter(Edit)