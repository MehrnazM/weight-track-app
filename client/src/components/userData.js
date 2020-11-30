const userData = [
    {id: 0, username : "Mehrnaz", 
    password: "0000", gender : "female",
    age : 28, 
    weight: [50,60,70], height: 160,  
    waist : [100,90,85], hips : [90,90,90],
    chest : [100,120,110], thighs : [10,20,10],
    upperarm : [45,45,45], date : ["20/09/03","20/10/03","20/11/03"]
    },
    
    {id: 1, username : "Mostafa", 
    password: "0000", gender : "male",
    age : 34, 
    weight: [50,60,70], height: 160 , 
    waist : [100,90,85], hips : [90,90,90],
    chest : [100,120,110], thighs : [10,20,10],
    upperarm : [45,45,45], date : ["20/09/03","20/10/03","20/11/03"]}
]


export default userData

//CREATE TABLE users (id SERIAL PRIMARY KEY, username TEXT NOT NULL, password VARCHAR(20) NOT NULL, gender VARCHAR(6)NOT NULL,age INT NOT NULL,weight  NUMERIC(5,2) [],height INT, waist NUMERIC(5,2) [], hips NUMERIC(5,2) [], chest NUMERIC(5,2) [],thighs NUMERIC(5,2) [],upperarm NUMERIC(5,2) [], date DATE [] ); 
