import React, {useState} from 'react'
import { View, NativeModules, TextInput, Dimensions, Text, StyleSheet } from 'react-native'
import { useForm, Controller } from 'react-hook-form'

import { CustomButton } from '../../components/CustomButton'

const ExerciseForm = () =>{

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
          exercise: '',
          type: '',
          amount:0,
          reps:0
        }
      });
  
    const locale = NativeModules.I18nManager.localeIdentifier // Add this line in the beggining to set the global language of the app
  
    const onHandleSubmit = (data:any) =>{
      console.log('Data submitted', data)
    }
  
    return(
      <View style={{padding:20, height:Dimensions.get('screen').height * 0.73, justifyContent:'flex-start'}}>
        <Controller
            control={control}
            rules={{
                required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
                placeholder='Exercise'
                style={errors.exercise ? styles.inputErrors : styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
            />
            )}
            name="exercise"
        />
        <Controller
            control={control}
            rules={{
                required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
                style={errors.type ? styles.inputErrors : styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder='Type of exercise'
            />
            )}
            name="type"
        />
    
        <CustomButton title="Submit" handlePress={handleSubmit(onHandleSubmit)}/>
      </View>
    )
}

const styles = StyleSheet.create({
    input:{borderColor:'grey', borderWidth:1, borderRadius:8, marginVertical:10},
    inputErrors:{borderColor:'red', borderWidth:1, borderRadius:8, marginVertical:10},
})

export { ExerciseForm }