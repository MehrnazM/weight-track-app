import React from "react"
import loginStyles from "../Login/Login.module.css"
import { withRouter } from "react-router-dom";
import styles from "./ShowUser.module.css"

class Edit extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            username: this.props.match.params.username,
            id: this.props.match.params.id,
            weight: 0,
            height: 0,
            hips: 0,
            chest: 0,
            thighs: 0,
            upperArms: 0,
            waist: 0,
            date: ""
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
        
        const {value} = event.target
        if(value === "Cancel"){
            this.props.history.push(`/user/${this.state.id}/${this.state.username}/`)
            this.props.history.go(0)
        }
        else{
            event.preventDefault()
        }
    }

    render(){
        return(
            <div className={`col-md-3 ${loginStyles.box}`}>
                
                <form onSubmit={this.handleClick}>
                    <div className={styles.edit}>
                        <div className={styles.editGridLeft}>
                            <label for="weight">Weight: </label>
                            <br/>
                            <label for="height">Height: </label>
                            <br/>
                            <label for="waist">Waist: </label>
                            <br/>
                            <label for="hips">Hips: </label>
                            <br/>
                            <label for="chest">Chest: </label>
                            <br/>
                            <label for="thighs">Thighs: </label>
                            <br/>
                            <label for="upperArms">Upper arms: </label>
                            <br/>
                        </div>
                        <div className={styles.editGridRight}>
                            <input type="text" name="weight" value={(this.state.weight !== 0)?this.state.weight:""} onChange={this.handleChange}/>
                            <br/>
                            <input type="text" name="height" value={(this.state.height !== 0)?this.state.height:""} onChange={this.handleChange}/>
                            <br/>
                            <input type="text" name="waist" value={(this.state.waist !== 0)?this.state.waist:""} onChange={this.handleChange}/>
                            <br/>
                            <input type="text" name="hips" value={(this.state.hips !== 0)?this.state.hips:""} onChange={this.handleChange}/>
                            <br/>
                            <input type="text" name="chest" value={(this.state.chest !== 0)?this.state.chest:""} onChange={this.handleChange}/>
                            <br/>
                            <input type="text" name="thighs" value={(this.state.thighs !== 0)?this.state.thighs:""} onChange={this.handleChange}/>
                            <br/>
                            <input type="text" name="upperArms" value={(this.state.upperArms !== 0)?this.state.upperArms:""} onChange={this.handleChange}/>
                            <br/>
                        </div>
                        </div>
                    <div className={styles.editButton}>
                        <input type="submit" value="Save"/><button value="Cancel" onClick={e => this.handleClick(e)}>Cancel</button>
                    </div>
                </form>
               
            </div>
        )
    }
}

export default withRouter(Edit)