
const backUrl = "http://localhost:3000"
export const logUser = async (data)=>{

    try{
        const response = await fetch(backUrl + "/login_user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        if(!response.ok){
            throw new Error(`Error en la peticion: ${response.status}`)
        }

        const jsonData = await response.json()
        console.log(jsonData.response)
        // localStorage.setItem("name", (jsonData.response.name))
        // localStorage.setItem("tokenSession", (jsonData.tokenSession))
        return jsonData
    }catch(e){
        console.error(e)
        return null
    }
    
}

export const registerUser = async (data)=>{
    try{
        const response = await fetch(backUrl + "/register_user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        if(!response.ok){
            throw new Error(`Error en la peticion: ${response.status}`)
        }
        console.log("hola", response)
        const jsonData = await response.json()

        return jsonData
    }catch(e){
        console.error(e)
        return null
    }
    
}

export const recoverPass = async (data)=>{
    try{
        const response = await fetch(backUrl + "/recoverPass", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        if(!response.ok){
            throw new Error(`Error en la peticion: ${response.status}`)
        }
        console.log("hola", response)
        const jsonData = await response.json()

        return jsonData
    }catch(e){
        console.error(e)
        return null
    }
    
}