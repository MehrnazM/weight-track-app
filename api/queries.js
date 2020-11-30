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
        res.status(200).json(results.rows[0])
    })
}
const getUserByUsernamePass = (req,res) => {
    const { username,password } = req.params
    pool.query('SELECT * FROM users WHERE username=$1 AND password=$2', [username,password],(error,results) => {
        if(error){
            console.log(error)
        }
        res.status(200).json(results.rows)
    })
}
const createUser = (req,res) => {
    console.log("before command")
    console.log(req.body)
    const { username,password,email,gender,birthDate,weight,height,waist,hips,chest,thighs,upperarm } = req.body
    const today = new Date().toDateString().slice(4)
    
    const qCommand = 'INSERT INTO users(username,password,email,gender,birthdate,weight,height,waist,hips,chest,thighs,upperarm,date) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,ARRAY[$13]) RETURNING id'
    pool.query(qCommand,[username,password,email,gender,birthDate,weight,height,waist,hips,chest,thighs,upperarm,today],
               (error,results) => {
                if(error){
                    throw error
                }
                else{
                    console.log(results.rows[0])
                    res.status(201).json(results.rows[0])
                }
                
               } )
}

const updateUser = (req,res) => {
    const id = parseInt(req.params.id)
    const { weight,waist,hips,chest,thighs,upperarm } = req.body.user
    const qCommand = 'UPDATE users SET weight = weight || ARRAY[$1],waist = waist || ARRAY[$2],hips = hips || ARRAY[$3],chest = chest || ARRAY[$4],thighs = thighs || ARRAY[$5],upperarm = upperarm || ARRAY[$6] WHERE id = $7'
    pool.query(
        qCommand, [weight,waist,hips,chest,thighs,upperarm,id],
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