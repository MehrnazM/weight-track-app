import React from "react"
import { Line } from "react-chartjs-2"
import styles from "./ShowUser.module.css"

function ChartComponent(props){

    const { xAxis, data, chartLabel, color, title } = props
    const measur = (chartLabel === 'weight')?'kg':'cm'
    const length = xAxis.length
    var shownxAxis = xAxis
    var shownData = data
    const minimum = Math.floor(Math.min(...data))
    const maximum = Math.floor(Math.max(...data))
    if(length > 12){
        shownxAxis = xAxis.slice(length-12)
        shownData = data.slice(length-12)
    }
    const state ={
        labels: shownxAxis,
        datasets: [
            {
                label: chartLabel,
                fill: false,
                lineTension: 0.5,
                backgroundColor: color,
                borderColor: color,
                borderWidth: 2,
                data: shownData
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
                    },
                    scales:{
                        yAxes:[{
                            scaleLabel: {
                                display: true,
                                labelString: `${chartLabel}(${measur})`
                              },
                              ticks: {
                                min: minimum-5,
                                max: maximum+5,
                                stepSize: 5,
                                fixedStepSize: 1,
                                beginAtZero : false
                              }
                        }],
                        xAxes:[{
                            scaleLabel: {
                                display: true,
                                labelString: `date`
                              }
                        }]
                    }
                }}
            />
        </div>
    )

}

export default ChartComponent