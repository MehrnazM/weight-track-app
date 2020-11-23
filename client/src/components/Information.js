import React, { Fragment } from "react"


function PrintInformation(user){
    const index = user.date.length-1
    return(
        <Fragment >
            Weight: {user.weight[index]} kg
            <br/>
            Height: {user.height[index]} cm
            <br/>
            Waist: {user.waist[index]} cm
            <br/>
            Hips: {user.hips[index]} cm
            <br/>
            Chest: {user.chest[index]} cm
            <br/>
            Thighs: {user.thighs[index]} cm
            <br/>
            Upper arm: {user.upperArm[index]} cm
            <br/>
            date: {user.date[index]} cm
            <br/>
        </Fragment>
    )
}
function ChartProp(user){
    
    const allProps = Object.getOwnPropertyNames(user)
    const constProps = ["username","id","password","age","height","gender","date"]
    const retProps = allProps.filter(item => !constProps.includes(item))
    return retProps
}

export { PrintInformation, ChartProp }