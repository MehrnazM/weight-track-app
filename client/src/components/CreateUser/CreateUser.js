import React, { useState } from "react"
import { useHistory } from 'react-router-dom'
import loginStyle from "../Login/Login.module.css"
import styles from "./CreateUser.module.css"

function CreateUser(){

    const [user,setUser] = useState({
        username : "",
        age : 0,
        email: "",
        password: "",
        weight : 0,
        height : 0,
        waist: 0,
        hips: 0,
        chest: 0,
        thighs: 0,
        upperArm: 0
    })
    const [page,setPage] = useState(true)
    const history = useHistory()
    function handleChange(e){
        const { name, value } = e.target
        setUser(prevUser => (
                {
                    ...prevUser,
                    [name] : value
                }))}
    function handleSubmit(e){
        console.log(user)
        e.preventDefault()
    }
    const persInfo = <form onSubmit={(e) => {e.preventDefault();setPage(!page);}}>
                        <div className={styles.gridDisplayFP}>
                            <div className={styles.leftGridFP}>
                                <p >Name:</p> 
                                <p >Email:</p>
                                <p >Password: </p>
                            </div>
                            <div className={styles.rightGridFP}>  
                                <input type="text" name="username" value={user.username} required onChange={(e) => handleChange(e)} />
                                <br/>
                                <input type="text" name="email" value={user.email} required onChange={(e) => handleChange(e)} />
                                <br/>
                                <input type="password" name="password" value={user.password} required onChange={(e) => handleChange(e)} />
                                <br/>
                                <input className={`${styles.nextbtn} ${styles.btn}`} type="submit" value="Next"/>
                            </div>
                        </div>
                    </form>
    const measurments = <form onSubmit={e => handleSubmit(e)} >
                            <div className={styles.gridDisplaySP}>
                                <div className={styles.leftGridSP}>
                                    <p>Age: </p>
                                    <p>Height: </p>
                                    <p>Weight: </p>
                                    <p>Chest: </p>
                                    <p>Waist: </p>
                                    <p>Hips: </p>
                                    <p>Thighs: </p>
                                    <p>Upper arm: </p>
                                </div>
                                <div className={styles.rightGridSP} >
                                    <input type="number" name="age" value={(user.age !== 0)?user.age:""} onChange={e => handleChange(e)} required/>
                                    <br/>
                                    <input type="number" name="height" value={(user.height !== 0)?user.height:""} onChange={e => handleChange(e)} required/>
                                    <br/>
                                    <input type="number" name="weight" value={(user.weight !== 0)?user.weight:""} onChange={e => handleChange(e)} required/>
                                    <br/>
                                    <input type="number" name="chest" value={(user.chest !== 0)?user.chest:""} onChange={e => handleChange(e)} required/>
                                    <br/>
                                    <input type="number" name="waist" value={(user.waist !== 0)?user.waist:""} onChange={e => handleChange(e)} required/>
                                    <br/>
                                    <input type="number" name="hips" value={(user.hips !== 0)?user.hips:""} onChange={e => handleChange(e)} required/>
                                    <br/>
                                    <input type="number" name="thighs" value={(user.thighs !== 0)?user.thighs:""} onChange={e => handleChange(e)} required/>
                                    <br/>
                                    <input type="number" name="upperArm" value={(user.upperArm !== 0)?user.upperArm:""} onChange={e => handleChange(e)} required/>
                                    <br/>
                                    <input type="submit" value="Save"  className={`${styles.submitbtn} ${styles.btn}`}/>
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