import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Login } from "../pages/Login/Login";
import { Home } from "../pages/Home/Home";

const MainNavigator = () =>{

    const Stack = createNativeStackNavigator()

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen 
                    name='Home' 
                    component={Home} 
                    options={{
                        headerShown:false
                    }}    
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export { MainNavigator }