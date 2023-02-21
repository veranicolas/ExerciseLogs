import React from 'react'
import { View, StatusBar} from 'react-native'
import { ExerciseForm } from './ExerciseForm'

const ExercisePage = () =>{

    return(
      <View style={{flex:1, padding:StatusBar.currentHeight, backgroundColor:'white', justifyContent:'space-between'}}>
        <StatusBar translucent backgroundColor='transparent' barStyle={'dark-content'}/>
        <ExerciseForm />
      </View>
    )
}

export { ExercisePage }