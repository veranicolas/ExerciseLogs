import React, {useState} from 'react'
import { View } from 'react-native'
import { useForm } from 'react-hook-form'

import { CustomButton } from '../../components/CustomButton'
import { CustomPicker } from '../../components/CustomPicker'
import { CustomInput } from '../../components/CustomInput'
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
          reps:'',
          series:''
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
            <CustomInput control={control} rules={{required: true}} name="name" placeholder="Nombre" />
            <CustomInput control={control} rules={{required: true}} name="reps" placeholder="Repeteciones" isNumeric={true} />
            <CustomInput control={control} rules={{required: true}} name="value" placeholder="Peso" isNumeric={true} />
            <CustomInput control={control} rules={{required: true}} name="series" placeholder="Series" isNumeric={true} />
            <CustomPicker selectedValue={selectedValue} setSelectedValue={setSelectedValue} label="Area" error={pickerError}/>
        </View>
        
        <CustomButton title="Agregar registro" handlePress={handleSubmit(onHandleSubmit)}/>
      </View>
    )
}

export { ExerciseForm }