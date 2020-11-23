import React from "react"
import { Line } from "react-chartjs-2"
import styles from "./ShowUser.module.css"

function ChartComponent(props){

    const { xAxis, data, chartLabel, color, title } = props
    const state ={
        labels: xAxis,
        datasets: [
            {
                label: chartLabel,
                fill: false,
                lineTension: 0.5,
                backgroundColor: color,
                borderColor: color,
                borderWidth: 2,
                data: data
            }
        ]
    }

    return(
        <div className={styles.chart}>
            <Line
                data = {state}
                options={{
                    title:{
                        display:false,
                        text: title,
                        fontSize:20
                    },
                    legend:{
                        display: true,
                        position: 'right'
                    }
                }}
            />
        </div>
    )

}

export default ChartComponent