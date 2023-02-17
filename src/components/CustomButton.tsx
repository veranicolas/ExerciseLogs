import React from "react";

import { View, Text, Pressable, StyleSheet } from 'react-native'

const CustomButton = ({title, handlePress}:any) =>{

    return(
        <Pressable onPress={handlePress} android_ripple={{color:'white'}} style={styles.buttonContainer}>
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    buttonContainer:{
        alignSelf:'center',
        width:'85%', 
        height:45, 
        borderRadius:10, 
        backgroundColor:'black'
    },
    buttonText:{
        textAlignVertical:'center', 
        textAlign:'center', 
        height:40,
        color:'white'
    }
})

export { CustomButton }