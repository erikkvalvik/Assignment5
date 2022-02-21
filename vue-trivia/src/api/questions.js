import { Q_URL } from ".";

export async function apiFetchQuestions(){
    try{
        //interpolate amount, category and difficulty later
        const response = await fetch(`${Q_URL}amount=10&category=9&difficulty=easy`)

        if(!response.ok){
            throw new Error("Could not find questions ")
        }

        const { response_code, results, error = "could not fetch questions" } = await response.json()

        if(response_code !== 0){
            throw new Error(error)
        }
        localStorage.setItem("questions", JSON.stringify(results))
        return [ results ]
    }
    catch(e){
        return [ e.message, [] ]
    }
}