import React, {useState} from 'react'
import { View, TextInput, Dimensions, StyleSheet } from 'react-native'
import { useForm, Controller } from 'react-hook-form'

import { CustomButton } from '../../components/CustomButton'
import { CustomPicker } from '../../components/CustomPicker'

const ExerciseForm = () =>{

    const [selectedValue, setSelectedValue] = useState('placeholder')
    const [pickerError, setPickerError] = useState(false)

    // const [items, setItems] = useState([
    //     {label: 'Upper', value: 'upper'},
    //     {label: 'Middle', value: 'middle'},
    //     {label: 'Lower', value: 'lower'}
    // ]);

    const { control, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
          exercise: '',
          type: '',
          amount:'',
          reps:''
        }
    });
  
    const onHandleSubmit = (data:any) =>{
        // try pass the picker value creating a new object with the two values
        if(selectedValue == 'placeholder'){
            setPickerError(true)
        } else {
            const finalData = data
            finalData.type = selectedValue
            console.log(finalData)
            setPickerError(false)
            reset()
        }
    }
  
    return(
      <View style={{paddingHorizontal:20, height:'100%', justifyContent:'flex-start', backgroundColor:'white'}}>
        <View style={{height:'90%'}}>
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
                    keyboardType='numeric'
                    placeholder='Reps'
                    style={errors.reps ? styles.inputErrors : styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value.toString()}
                />
                )}
                name="reps"
            />
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                    keyboardType='numeric'
                    placeholder='Amount'
                    style={errors.reps ? styles.inputErrors : styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value.toString()}
                />
                )}
                name="amount"
            />
            <CustomPicker selectedValue={selectedValue} setSelectedValue={setSelectedValue} label="Type" error={pickerError}/>
        </View>
        
        <CustomButton title="Submit" handlePress={handleSubmit(onHandleSubmit)}/>
      </View>
    )
}

const styles = StyleSheet.create({
    input:{borderColor:'grey', borderWidth:1, borderRadius:8, marginVertical:10, paddingHorizontal:10, color:'black'},
    inputErrors:{borderColor:'red', borderWidth:1, borderRadius:8, marginVertical:10, paddingHorizontal:10, color:'black'},
})

export { ExerciseForm }