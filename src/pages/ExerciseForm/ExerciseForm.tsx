import React, {useState} from 'react'
import { View, NativeModules, TextInput, Dimensions } from 'react-native'

import { CustomButton } from '../../components/CustomButton'

const ExerciseForm = () =>{

    const [exercise, setExercise] = useState('')
  
    const locale = NativeModules.I18nManager.localeIdentifier // Add this line in the beggining to set the global language of the app
  
    const onHandleSubmit = () =>{
      console.log('Data submitted', {exercise})
    }
  
    return(
      <View style={{padding:20, height:Dimensions.get('screen').height * 0.73, justifyContent:'space-between'}}>
        <TextInput
          placeholder='Exercise name'
          style={{borderColor:'grey', borderWidth:1, borderRadius:8}}
          onChangeText={(value)=> setExercise(value)}
        />
        <CustomButton title="Submit" handlePress={onHandleSubmit}/>
      </View>
    )
}

export { ExerciseForm }