import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

import { useSelector } from 'react-redux';

import { HomeProps } from '../../types/NavigationTypes';
import { Header } from '../../components/Header';
import { CustomButton } from '../../components/CustomButton';

const Home = ({navigation, user}:any) =>{

  const handleNavigationExerciseForm = () =>{
    navigation.navigate('ExerciseForm')
  }

  const handleExerciseListNavigation = () =>{
    navigation.navigate('ExerciseList')
  }

  return(
    <View style={{flex:1, padding:StatusBar.currentHeight, backgroundColor:'white', justifyContent:'flex-start'}}>
        <Header navigation={navigation} user={user}/>
        <View style={{padding:20, height:300, justifyContent:'space-between'}}>
          <Text style={{fontSize:58, fontWeight:'bold', color:'black'}}>Hola!</Text>
          <Text style={{color:'black', marginBottom:30}}>Que no decaiga maquina agricola</Text>
          <CustomButton title="Agregar ejercicio" handlePress={handleNavigationExerciseForm}/>
          <CustomButton title="Mostrar todos los ejercicios" handlePress={handleExerciseListNavigation} />
        </View>
        
        <StatusBar translucent backgroundColor='transparent' barStyle={'dark-content'}/>
    </View>
  )
}

const Homepage = ({navigation}:HomeProps) =>{

  const user = useSelector((state:any)=> state.user.value)
  
  return(
    <View style={styles.mainContainer}>
      {
        user !== undefined ? <Home user={user.user} navigation={navigation} /> : <Text style={styles.loadingText}>Loading...</Text>
      }
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
  loadingText:{
    height:70, 
    width:150, 
    backgroundColor:'white', 
    textAlign:'center', 
    textAlignVertical:'center', 
    borderRadius:15
  }
});

export { Homepage }