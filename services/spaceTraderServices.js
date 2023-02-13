
const endPoints = {
    createUser:"https://api.spacetraders.io"
}

const createUser = async (userName) =>{
    let data
    try{
        await fetch(`${endPoints.createUser}/users/${userName}/claim`,{
            method:"POST"
        })
        .then((res) => data = res.json())
        .catch((err) => console.log(err))
        return data
    }catch(err){
        console.log("el pepe")
        return null
    }
}

const requestUserAcount = async (token) =>{
    try{
       const data = await fetch(`${endPoints.createUser}/my/account?token=${token}`)
       const userAcount = await data.json()
       
       
       return userAcount
    }catch(err){
        console.log("hola")
        return null
    }
}



export {
    createUser,
    requestUserAcount
}