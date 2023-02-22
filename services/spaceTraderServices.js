
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
       console.log(userAcount)
       
       return userAcount
    }catch(err){
        console.log("hola")
        return null
    }
}

const getShipsList = async (token) =>{
    try{
        const data = await fetch(`${endPoints.createUser}/systems/OE/ship-listings?token=${token}`)
        const shipsList = await data.json()
        return shipsList
    }catch(err){
        console.log(err)
        return null
    }
}

const showLoans = async (token) =>{
    try{
        const data = await fetch(`${endPoints.createUser}/types/loans?token=${token}`)
        const listLoans = await data.json()

        return listLoans
    }catch(err) {
        console.log(err)
        return null
    }
} 

const takeAvaliableLoans = async (token, typeLoans) =>{
    try{
        
        
        const response = await fetch(`${endPoints.createUser}/my/loans?token=${token}`,{
            method:"POST",
            body:JSON.stringify({
                type: "STARTUP"
            }),
            headers:{
                'Content-type':'application/json'
            }
        })
        const data = await response.json()
        console.log(data)
        return data
    }catch(err){
        console.log(err)
        return null
    }
}

const requestBuyShip = async(token, types, locations) =>{
    try{
        const response = await fetch(`${endPoints.createUser}/my/ships?token=${token}`,{
            method:"POST",
            body:JSON.stringify({
                location:locations,
                type:types
            }),
            headers:{
                'Content-type':'application/json'
            }
        })

        const data = await response.json()
        return data


    }catch(err){
        console.log(err)
    }
    
    

}



export {
    createUser,
    requestUserAcount,
    getShipsList,
    showLoans, 
    takeAvaliableLoans,
    requestBuyShip
}