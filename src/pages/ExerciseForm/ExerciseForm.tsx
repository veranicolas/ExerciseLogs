import React, {useState} from 'react'
import { View, TextInput, Dimensions, StyleSheet } from 'react-native'
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
        const finalData = data
        finalData.type = selectedValue
        console.log(finalData)
        reset()
    }
  
    return(
      <View style={{paddingHorizontal:20, height:Dimensions.get('screen').height * 0.80, justifyContent:'space-between'}}>
        <View>
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
            <CustomPicker selectedValue={selectedValue} setSelectedValue={setSelectedValue} label="Type" />
        </View>
        
        <CustomButton title="Submit" handlePress={handleSubmit(onHandleSubmit)}/>
      </View>
    )
}

const styles = StyleSheet.create({
    input:{borderColor:'grey', borderWidth:1, borderRadius:8, marginVertical:10, paddingHorizontal:10},
    inputErrors:{borderColor:'red', borderWidth:1, borderRadius:8, marginVertical:10, paddingHorizontal:10},
})

export { ExerciseForm }