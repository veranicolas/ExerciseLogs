import { API_URL } from '@env'
import axios, { AxiosError } from 'axios'
import { Exercise } from '../types/DataTypes'

const deleteEntryFromUser = async () =>{

    return {}
}

const createExerciseLog = async (data:Exercise) =>{
    
    try{
        const response = await axios.post(`${API_URL}exercise`, data)
        return response.status
    } catch(error:AxiosError | any){
        return error
    }
}

const getAllExercisesFromUser = async (userID:string) =>{

    try{
        const response = await axios.get(`${API_URL}exercise/${userID}`)
        return response.data.exercises
    } catch(error){
        console.log(error)
    }
}

export { getAllExercisesFromUser, createExerciseLog, deleteEntryFromUser }