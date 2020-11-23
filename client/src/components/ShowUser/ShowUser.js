import React, { Component } from "react"
import { withRouter } from "react-router-dom";
import userData from "../userData"
import CardComponent from "./CardComponent"
import ChartComponent from "./ChartComponent"
import styles from "./ShowUser.module.css"
import { PrintInformation , ChartProp} from "../Information"


class ShowUser extends Component{

    constructor(props){
        
        super(props)
        this.state ={
            id: this.props.match.params.id,
            username: this.props.match.params.username,
            chart: "",
            show: false
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        console.log(event.target)
        const { value } = event.target
        console.log(value)
        if(value !== ""){
            this.setState({
                chart: value,
                show: true
            })
        }
    }
    render(){
        
        // eslint-disable-next-line
        const user = userData.find(item => item.username === this.state.username && item.id == this.state.id)
        const information = PrintInformation(user)
        const url = (user.gender === "female")?"https://freeiconshop.com/wp-content/uploads/edd/person-girl-flat.png":
                                           "https://i.pinimgcom/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png"
        const chartProp = ChartProp(user)
        const options = chartProp.map(item => {
            return(
                <option key={item} value={item}>{item}</option>
            )
        })
        return(
            <div className={styles.grid}>
                <div className={styles.gridCard}>
                    <CardComponent information={information} url={url} age={user.age} username={this.state.username}/>
                </div>
                <div className={styles.gridChoice}>
                    <form>
                        <select  value={this.state.chart} style={{padding: "2px 2px 2px 2px"}} name="chartChoice" onChange={this.handleChange}>
                            <option value="">--Please choose an attribute to see the progress chart</option>
                            {options}
                        </select>
                    </form>             
                </div>
                <div className={styles.gridChart}>
                    {(this.state.show)&&
                        <ChartComponent xAxis={user.date} data={user[this.state.chart]} chartLabel={this.state.chart}
                                        color={`rgba(77,77,255,1)`} title={`Changes of your ${this.state.chart}`} />}
                </div>
            </div>
        )
    }
}

export default withRouter(ShowUser)