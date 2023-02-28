import { API_URL } from '@env'
import axios, { AxiosError } from 'axios'

type Exercise = {
    name:string,
    value:string,
    reps:number,
    area:string,
    unit:string,
    userId:number
}

const deleteEntryFromUser = async () =>{

    return {}
}

const createExerciseLog = async (data:Exercise) =>{
    
    try{
        const response = await axios.post(`${API_URL}exercise`, data)
        console.log(response.data)
    } catch(error:AxiosError | any){
        console.log(error)
    }
}

const getAllExercisesFromUser = async () =>{

    return {}
}

export { getAllExercisesFromUser, createExerciseLog, deleteEntryFromUser }