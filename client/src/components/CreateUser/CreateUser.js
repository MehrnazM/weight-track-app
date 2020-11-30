import React, { useState } from "react"
import { useHistory } from 'react-router-dom'
import loginStyle from "../Login/Login.module.css"
import styles from "./CreateUser.module.css"
import DatePicker from "react-datepicker";
import { postUser } from "../HandleAPI"
import "react-datepicker/dist/react-datepicker.css";

function CreateUser(){

    const [user,setUser] = useState({
        username : "",
        birthDate : new Date().toDateString().slice(4),
        email: "",
        password: "",
        gender: "female",
        weight : [0],
        height : 0,
        waist: [0],
        hips: [0],
        chest: [0],
        thighs: [0],
        upperarm: [0]
    })
    const [page,setPage] = useState(true)
    const history = useHistory()
    function handleChange(e){
        const { name, value, type } = e.target
        if(type === "number"){
            if(name === "height"){
                setUser(prevUser => (
                    {
                        ...prevUser,
                        [name] : parseFloat(value)
                    }))
                }
            else{
                const numValue = parseFloat(value)
                const list = [numValue]
                setUser(prevUser => (
                            {
                                ...prevUser,
                                [name] : list
                            }
                        ))
            }
        }
        
        else{
            setUser(prevUser => (
                    {
                        ...prevUser,
                        [name] : value
                    }))
        }
    }
    function handleSubmit(e){
        e.preventDefault()
        const data = postUser(user)
        data.then(res => {
            const path = `/user/${res.id}/${user.username}/`
            history.push(path)
            history.go(0)
        })
        .catch(e => console.log(e))
    }
    const persInfo = <form>
                        <div className={styles.gridDisplayFP}>
                            <div className={styles.leftGridFP}>
                                <p >Name:</p> 
                                <p >Email:</p>
                                <p >Password: </p>
                            </div>
                            <div className={styles.rightGridFP}>  
                                <input type="text" name="username" value={user.username} required onChange={(e) => handleChange(e)} />
                                <br/>
                                <input type="email" name="email" value={user.email} required onChange={(e) => handleChange(e)} />
                                <br/>
                                <input type="password" name="password" value={user.password} required onChange={(e) => handleChange(e)} />
                                <br/>
                                <button className={`${styles.nextbtn} ${styles.btn}`} onClick={() => setPage(!page)}>Next</button>
                            </div>
                        </div>
                    </form>
    const measurments = <form onSubmit={e => handleSubmit(e)} >
                            <div className={styles.gridDisplaySP}>
                                <div className={styles.leftGridSP}>
                                    <p>Gender:</p>
                                    <p>Birth date: </p>
                                    <p>Height: </p>
                                    <p>Weight: </p>
                                    <p>Chest: </p>
                                    <p>Waist: </p>
                                    <p>Hips: </p>
                                    <p>Thighs: </p>
                                    <p>Upper arm: </p>
                                </div>
                                <div className={styles.rightGridSP} >
                                    <select name="gender" value={user.gender} onChange={e => handleChange(e)}>
                                        <option value="female">Female</option>
                                        <option value="male">Male</option>
                                    </select>
                                    <br/>
                                    <DatePicker
                                        className={styles.datePicker}
                                        selected={new Date(user.birthDate)}
                                        onChange={date => {
                                            const birth = date.toDateString().slice(4)
                                            console.log(birth)
                                            setUser(prevUser => (
                                            {
                                                ...prevUser,
                                                birthDate : birth
                                            }))}}
                                        peekNextMonth
                                        showMonthDropdown
                                        showYearDropdown
                                        dropdownMode="select"
                                        />
                                    <br/>
                                    <input type="number" name="height" value={(user.height === 0)?"":user.height} onChange={e => handleChange(e)} required/>
                                    <br/>
                                    <input type="number" name="weight" value={(user.weight[0] === 0)?"":user.weight[0]} onChange={e => handleChange(e)} required/>
                                    <br/>
                                    <input type="number" name="chest" value={(user.chest[0] === 0)?"":user.chest[0]} onChange={e => handleChange(e)} required/>
                                    <br/>
                                    <input type="number" name="waist" value={(user.waist[0] === 0)?"":user.waist[0]} onChange={e => handleChange(e)} required/>
                                    <br/>
                                    <input type="number" name="hips" value={(user.hips[0] === 0)?"":user.hips[0]} onChange={e => handleChange(e)} required/>
                                    <br/>
                                    <input type="number" name="thighs" value={(user.thighs[0] === 0)?"":user.thighs[0]} onChange={e => handleChange(e)} required/>
                                    <br/>
                                    <input type="number" name="upperarm" value={(user.upperarm[0] === 0)?"":user.upperarm[0]} onChange={e => handleChange(e)} required/>
                                    <br/>
                                    <br/>
                                    <input type="submit" value="Save" style={{paddingTop:"-4pt",paddingBottom:"-4pt"}}  className={`${styles.submitbtn} ${styles.btn}`}/>
                                    <button value="back"  className={styles.btn} onClick={() => setPage(!page)}>Back</button>
                                    
                                </div>
                            </div>
                        </form>
    return(
        <div className={`col-md-3 ${loginStyle.box}`}>
            {(page)?persInfo:measurments}
        </div>
    )

}


export default CreateUser