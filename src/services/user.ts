import { API_URL } from '@env'
import axios, { AxiosError } from 'axios'
import { RegisterUserForm } from '../types/DataTypes'

const loginUser = async (credentials:any) =>{
    
    try{
        const response = await axios.post(`${API_URL}user/login`, credentials)
        return response.data
    } catch(error:AxiosError | any){
        throw new Error(error)
    }
}

const registerUser = async (data:RegisterUserForm) =>{

    try{
        const response = await axios.post(`${API_URL}user`, data)
        return response.data
    } catch(error){
        console.log(error)
    }
}

export { loginUser, registerUser }