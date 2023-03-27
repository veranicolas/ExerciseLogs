import React, {useState} from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { useForm, Controller } from 'react-hook-form'

import { CustomButton } from '../../components/CustomButton'
import { CustomPicker } from '../../components/CustomPicker'
import { useToast } from 'react-native-toast-notifications'
import { createExerciseLog } from '../../services/exercises'
import { useSelector } from 'react-redux'

const ExerciseForm = ({navigation}:any) =>{

    const { _id } = useSelector((state:any)=> state.user.value)
    const [selectedValue, setSelectedValue] = useState('placeholder')
    const [pickerError, setPickerError] = useState(false)
    const toast = useToast()

    // const [items, setItems] = useState([
    //     {label: 'Upper', value: 'upper'},
    //     {label: 'Middle', value: 'middle'},
    //     {label: 'Lower', value: 'lower'}
    // ]);

    const { control, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
          name: '',
          area: '',
          value:'',
          reps:''
        }
    });
  
    const onHandleSubmit = async (data:any) =>{
        // try pass the picker value creating a new object with the two values
        if(selectedValue == 'placeholder'){
            setPickerError(true)
        } else {
            const finalData = data
            finalData.area = selectedValue
            finalData.userId = _id
            await createExerciseLog(finalData)
            setPickerError(false)
            toast.show("Ejercicio agregado!", {
                type: "success",
                placement: "bottom",
                duration: 4000,
                animationType: "slide-in",
            });
            navigation.navigate('Home')
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
                    placeholder='Ejercicio'
                    style={errors.name ? styles.inputErrors : styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                />
                )}
                name="name"
            />
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                    keyboardType='numeric'
                    placeholder='Repeticiones'
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
                    placeholder='Peso'
                    style={errors.value ? styles.inputErrors : styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value.toString()}
                />
                )}
                name="value"
            />
            <CustomPicker selectedValue={selectedValue} setSelectedValue={setSelectedValue} label="Area" error={pickerError}/>
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