import React, {useState} from 'react'
import { View, NativeModules, TextInput, Dimensions, StyleSheet } from 'react-native'
import { useForm, Controller } from 'react-hook-form'

import { CustomButton } from '../../components/CustomButton'
import { CustomPicker } from '../../components/CustomPicker'

const ExerciseForm = () =>{

    const [selectedValue, setSelectedValue] = useState('')

    // const [items, setItems] = useState([
    //     {label: 'Upper', value: 'upper'},
    //     {label: 'Middle', value: 'middle'},
    //     {label: 'Lower', value: 'lower'}
    // ]);

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
        // try pass the picker value creating a new object with the two values
        const finalData = data
        finalData.type = selectedValue
        console.log(finalData)
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
        <CustomPicker selectedValue={selectedValue} setSelectedValue={setSelectedValue} label="Type" />
        <CustomButton title="Submit" handlePress={handleSubmit(onHandleSubmit)}/>
      </View>
    )
}

const styles = StyleSheet.create({
    input:{borderColor:'grey', borderWidth:1, borderRadius:8, marginVertical:10, paddingHorizontal:10},
    inputErrors:{borderColor:'red', borderWidth:1, borderRadius:8, marginVertical:10, paddingHorizontal:10},
})

export { ExerciseForm }