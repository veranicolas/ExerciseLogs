import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Login } from "../pages/Login/Login";
import { Homepage } from "../pages/Home/Home";
import { Profile } from "../pages/Profile/Profile";
import { ExerciseForm } from "../pages/ExerciseForm/ExerciseForm";

const MainNavigator = () =>{

    const Stack = createNativeStackNavigator()

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen 
                    name='Login' 
                    component={Login} 
                    options={{
                        headerShown:false
                    }}        
                />
                <Stack.Screen 
                    name='Home' 
                    component={Homepage} 
                    options={{
                        headerShown:false
                    }}    
                />
                <Stack.Screen name='Profile' component={Profile} />
                <Stack.Screen 
                    name='ExerciseForm' 
                    component={ExerciseForm}   
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export { MainNavigator }