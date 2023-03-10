import React from "react";

import { Text, Pressable, StyleSheet } from 'react-native'

type Props = {
    title:string,
    handlePress: ()=> void
}

const CustomButton = ({title, handlePress}:Props) =>{

    return(
        <Pressable onPress={handlePress} android_ripple={{color:'#c5dbd5'}} style={styles.buttonContainer}>
            <Text style={styles.buttonText}>{title.toUpperCase()}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    buttonContainer:{
        alignSelf:'center',
        width:'85%', 
        height:45, 
        borderRadius:10, 
        backgroundColor:'#E5FCF5'
    },
    buttonText:{
        textAlignVertical:'center', 
        textAlign:'center', 
        height:40,
        color:'black',
        fontWeight:'bold'
    }
})

export { CustomButton }