
const backUrl = "http://localhost:3000"
export const registerProduct = async (data) => {

    try {
        const response = await fetch(backUrl + "/register_producto", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error(`Error en la peticion: ${response.status}`)
        }

        const jsonData = await response.json();
        return jsonData
    } catch (e) {
        console.error(e)
        return null
    }

}
export const seeAll = async () => {

    try {
        const response = await fetch(backUrl + "/get_productos", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })

        if (!response.ok) {
            throw new Error(`Error en la peticion: ${response.status}`)
        }

        const jsonData = await response.json();

        return jsonData
    } catch (e) {
        console.error(e)
        return null
    }

}

export const deleteProduct = async (data) => {
  
    try {
        const response = await fetch(backUrl + "/deleteProducto", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error(`Error en la peticion: ${response.status}`)
        }

        const jsonData = await response.json();
        
        return jsonData
    } catch (e) {
        console.error(e)
        return null
    }

}
export const updateProducto = async (data) => {
   
    try {
        const response = await fetch(backUrl + "/updateProducto", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error(`Error en la peticion: ${response.status}`)
        }

        const jsonData = await response.json();
       
       
        return jsonData
    } catch (e) {
        console.error(e)
        return null
    }

}
export const updateStock = async (data) => {
   
    try {
        const response = await fetch(backUrl + "/updateStock", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error(`Error en la peticion: ${response.status}`)
        }

        const jsonData = await response.json();

        return jsonData
    } catch (e) {
        console.error(e)
        return null
    }

}
