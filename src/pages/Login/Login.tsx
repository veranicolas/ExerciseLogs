import React from 'react';
import { StatusBar, StyleSheet, Text, View, NativeModules, TextInput } from 'react-native';
import { LoginProps } from '../../types/NavigationTypes';

import { useForm } from 'react-hook-form';
import { CustomButton } from '../../components/CustomButton';
import { loginUser } from '../../services/user';
import { setUserData } from '../../redux/slices/user';
import { useToast } from 'react-native-toast-notifications';
import { useDispatch } from 'react-redux';
import { CustomInput } from '../../components/CustomInput';

const Login = ({navigation}:LoginProps) =>{

  const locale = NativeModules.I18nManager.localeIdentifier // Add this line in the beggining to set the global language of the app
  const toast = useToast()
  const dispatch = useDispatch()

  const { control, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      email:'',
      password:''
    }
  });

  const handleSignIn = async (data:any) =>{
    try{
      console.log(data)
      const response = await loginUser(data)
      console.log(response)
      dispatch(setUserData(response.user))
      navigation.navigate('Home')
    } catch(error){
      toast.show(`Credenciales invalidas`, {
        type: "danger",
        placement: "bottom",
        duration: 4000,
        animationType: "slide-in",
      });
      console.log(error)
    }
  }

  return(
    <View style={styles.mainContainer}>
      <View style={styles.welcomeBox}>
        <Text style={styles.welcomeTitle}>Welcome to Exercise Logs</Text>
        <Text style={{color:'black', marginBottom:20}}>Start tracking your lift records today!</Text>
        <CustomInput control={control} rules={{required: true}} name="email" placeholder="Email" />
        <CustomInput control={control} rules={{required: true}} name="password" placeholder="Password" isPassword={true} />
        <CustomButton title="Submit" handlePress={handleSubmit(handleSignIn)}/>
      </View>
      <StatusBar translucent backgroundColor='transparent' barStyle={'dark-content'}/>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer:{
    flex:1, 
    backgroundColor:'#E5FCF5', 
    height:'100%', 
    width:'100%', 
    justifyContent:'center', 
    alignItems:'center'
  },
  welcomeBox:{
    height:400, 
    width:300, 
    backgroundColor:'white', 
    padding:30,
    borderRadius:12,
    justifyContent:'space-evenly'
  },
  welcomeTitle:{
    fontSize:20, 
    color:'black', 
    fontWeight:'700',
    marginBottom:15
  },
  input:{borderColor:'grey', borderWidth:1, borderRadius:8, marginVertical:10, paddingHorizontal:10, color:'black'},
  inputErrors:{borderColor:'red', borderWidth:1, borderRadius:8, marginVertical:10, paddingHorizontal:10, color:'black'},
});

export { Login }