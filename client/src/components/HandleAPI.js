

const getUserById = async(id) => {
    let user = await fetch(`http://localhost:9000/users/${id}`)
    //.then(res => res.json())
    //.catch(e => {console.log(e)})
    
    return user.json()
}
const getUserByUserPass = (username,password) => {
     const user =  fetch(`http://localhost:9000/users/user/${username}`,{
         headers: {
             'authentication' : password
         }
     })
    .then(res => res.json())
    .catch(e => console.log(e))
    return user
}

const postUser = async(user) => {
    let data = await fetch('http://localhost:9000/users',{
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(response => response.json())
        .catch((error) => {
            console.error('Error:', error);
          })
          console.log(data.id)
    return data
}

function updateUser(user){
    console.log(user)
    fetch(`http://localhost:9000/users/${user.id}`,{
        method: 'PUT',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(response => response.text())
    .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      })
}
function deleteUser(id){
    fetch(`http://localhost:9000/users/${id}`,{
        method: 'DELETE',
    })
    .then(response => response.text())
    .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      })
}

export { getUserById,getUserByUserPass,postUser,updateUser,deleteUser }