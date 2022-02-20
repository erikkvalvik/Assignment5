import { BASE_URL } from "./";
import { API_KEY } from "./";

//Registers a user
export async function apiUserRegister(username){
    try{
        const config = {
            method: "POST",
            headers: {
                "X-API-Key": API_KEY,
                "content-type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                highScore: 0
            })
        }
        
        const response = await fetch(`${BASE_URL}`, config)
        
        const { data } = await response.json();
        console.log(data)
    
        return [null, data]
        
    }
    catch(error){
        return [ error.message, null]
    }
}



//Is supposed to check if a user already exists
export async function apiUserCheck(username){
    try{
        const response = await fetch(`${BASE_URL}?username=${username}`)
        const data = await response.json();
        return [null, data]
    }
    catch(error){
        return [error.message, null]
    }
}