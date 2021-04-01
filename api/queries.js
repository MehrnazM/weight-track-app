const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'weightDB',
    password: '291171',
    port: 5432
})
/*const getUsers = (req,res) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error,results)=>{
        if(error){
            throw error
        }
        res.status(200).json(results.rows)
    })
}*/

const getUserById = (req,res) => {
    const id = parseInt(req.params.id)
    pool.query('SELECT * FROM users WHERE id = $1', [id],(error,results) => {
        if(error){
            throw error
        }
        console.log(results.rows[0])
        res.status(200).json(results.rows[0])
    })
}
const getUserByUsernamePass = (req,res) => {
    const { username } = req.params
    const {authentication} = req.headers
    pool.query('SELECT * FROM users WHERE username=$1 AND password=$2', [username,authentication],(error,results) => {
        if(error){
            throw error
        }
            res.status(200).json(results.rows[0])
        
    })
}
const createUser = (req,res) => {
    const { username,password,email,gender,birthDate,weight,height,waist,hips,chest,thighs,upperarm } = req.body
    const today = new Date().toDateString().slice(4)
    
    const qCommand = 'INSERT INTO users(username,password,email,gender,birthdate,weight,height,waist,hips,chest,thighs,upperarm,date) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,ARRAY[$13]) RETURNING id'
    pool.query(qCommand,[username,password,email,gender,birthDate,weight,height,waist,hips,chest,thighs,upperarm,today],
               (error,results) => {
                if(error){
                    throw error
                }
                else{
                    res.status(201).json(results.rows[0])
                }
                
               } )
}

const updateUser = (req,res) => {
    const id = parseInt(req.params.id)
    const { weight,waist,hips,chest,thighs,upperarm,date } = req.body
    const qCommand = 'UPDATE users SET weight = $1,waist = $2,hips = $3,chest = $4,thighs = $5,upperarm = $6, date = $7 WHERE id = $8'
    pool.query(
        qCommand, [weight,waist,hips,chest,thighs,upperarm,date,id],
        (error,results) => {
            if(error){
                throw error
            }
            res.status(200).send(`User modified with ID: ${id}`)
        }
    )
}

const deleteUser = (req,res) => {
    const id = parseInt(req.params.id)
    pool.query('DELETE FROM users WHERE id = $1',[id],(error,results) => {
        if(error){
            throw error
        }
        res.status(200).send(`User deleted with ID:${id}`)
    })
}
module.exports = {
    getUserById,
    getUserByUsernamePass,
    createUser,
    updateUser,
    deleteUser,
}