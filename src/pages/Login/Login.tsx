import React, { useEffect } from 'react';
import { StatusBar, StyleSheet, Text, View, NativeModules, TextInput } from 'react-native';
import { LoginProps } from '../../types/NavigationTypes';

import { useForm, Controller } from 'react-hook-form';
import { CustomButton } from '../../components/CustomButton';
import { loginUser } from '../../services/user';
import { useToast } from 'react-native-toast-notifications';

const Login = ({navigation}:LoginProps) =>{

  const locale = NativeModules.I18nManager.localeIdentifier // Add this line in the beggining to set the global language of the app
  const toast = useToast()

  const { control, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      email:'',
      password:''
    }
  });

  const handleSignIn = async (data:any) =>{
    try{
      const response = await loginUser(data)
      console.log(response)
    } catch(error){
      toast.show("Credenciales invalidas", {
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
        <Controller
          control={control}
          rules={{
              required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
              placeholder='Email'
              style={errors.email ? styles.inputErrors : styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
          />
          )}
          name="email"
        />
        <Controller
            control={control}
            rules={{
                required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
                secureTextEntry
                placeholder='Password'
                style={errors.password ? styles.inputErrors : styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value.toString()}
            />
            )}
            name="password"
        />
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