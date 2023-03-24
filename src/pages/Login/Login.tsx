import React, { useEffect } from 'react';
import { StatusBar, StyleSheet, Text, View, NativeModules, TextInput } from 'react-native';
import { LoginProps } from '../../types/NavigationTypes';

import { useForm, Controller } from 'react-hook-form';
import { CustomButton } from '../../components/CustomButton';

const Login = ({navigation}:LoginProps) =>{

  const locale = NativeModules.I18nManager.localeIdentifier // Add this line in the beggining to set the global language of the app

  const { control, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      email:'',
      password:''
    }
  });

  // useEffect(()=>{
  //   const isSignedIn = async () => {
  //     const response = await GoogleSignin.isSignedIn();
  //     if(response){
  //       navigation.navigate('Home')
  //     } else {
  //       console.log('Not logged in')
  //     }
  //   };

  //   isSignedIn()
  // },[])

  const handleSignIn = async (data:any) =>{
    try{
      console.log(data)
      // navigation.navigate('Home')
    } catch(error){
      console.log(error)
    }
  }

  //TODO - REDO this UI, looks really ugly
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
      <StatusBar translucent backgroundColor='transparent'/>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer:{
    flex:1, 
    backgroundColor:'#0B3954', 
    height:'100%', 
    width:'100%', 
    justifyContent:'center', 
    alignItems:'center'
  },
  welcomeBox:{
    height:300, 
    width:300, 
    backgroundColor:'white', 
    padding:30,
    borderRadius:12
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