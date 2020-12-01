import React, { Component, Fragment } from "react"
import { withRouter } from "react-router-dom";
import CardComponent from "./CardComponent"
import ChartComponent from "./ChartComponent"
import styles from "./ShowUser.module.css"
import { getUserById } from "../HandleAPI"

class ShowUser extends Component{
    _isMounted = false;

    constructor(props){
        
        super(props)
        this.state ={
            id: this.props.match.params.id,
            username: this.props.match.params.username,
            chart: "",
            user : {},
            url : "",
            show: false,
            fetched : false
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        const { value } = event.target
        if(value !== ""){
            this.setState({
                chart: value,
                show: true
            })
        }
    }
    async componentDidMount(){
        this._isMounted = true;
        const newUser = await getUserById(this.state.id)
        .then(response => {if(this._isMounted){
            this.setState(prevState => {
                return{
                ...prevState,
                user : response
                }
            })
        }})
        .catch(e => console.log(e))
        const picUrl = await (this.state.user.gender === "female")? 
                        "https://freeiconshop.com/wp-content/uploads/edd/person-girl-flat.png":
                        "https://i.pinimgcom/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png"
        this.setState(prevState => {
            return{
                ...prevState,
                url : picUrl
            }
        })
        this.setState(prevState => {
            return{
                ...prevState,
                fetched : true
            }
        })
    }
    componentWillUnmount() {
        this._isMounted = false;
      }
    render(){
        return(
            <Fragment>
                {this.state.fetched&&<div className={styles.grid}>
                    <div className={styles.gridCard}>
                        <CardComponent url={this.state.url} user={this.state.user}/>
                    </div>
                    <div className={styles.gridChoice}>
                        <form>
                            <select  value={this.state.chart} 
                                    style={{padding: "2px 2px 2px 2px"}} 
                                    name="chartChoice" 
                                    onChange={this.handleChange}>
                                <option value="">--Please choose an attribute to see the progress chart</option>
                                <option value="weight">Weight</option>
                                <option value="waist">Waist</option>
                                <option value="chest">Chest</option>
                                <option value="upperarm">Upper arm</option>
                                <option value="thighs">Thighs</option>
                            </select>
                        </form>             
                    </div>
                    <div className={styles.gridChart}>
                        {(this.state.show)&&
                            <ChartComponent xAxis={this.state.user.date} 
                                            data={this.state.user[this.state.chart]} 
                                            chartLabel={this.state.chart}
                                            color={`rgba(77,77,255,1)`} 
                                            title={`Changes of your ${this.state.chart}`} />}
                    </div>
                </div>}
            </Fragment>
        )
    }
}

export default withRouter(ShowUser)
