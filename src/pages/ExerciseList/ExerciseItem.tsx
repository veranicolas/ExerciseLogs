import React from "react";

import { View, StyleSheet, Text} from "react-native";
import { parseDayOfTheYear } from "../../utils/date";

import { capitalizeFirstLetter } from '../../utils/text'
import { translateTypeExercise } from "../../utils/translate";

const ExerciseItem = ({item}:any) =>{

    const lastUpdated = parseDayOfTheYear(item.updatedAt)

    const translateArea = () =>{
        
        const result = capitalizeFirstLetter(translateTypeExercise(item.area))

        return result
    }

    return(
        <View style={[styles.listItem, styles.boxShadow]}>
            <Text style={[styles.itemText, {fontWeight:'bold'}]}>{capitalizeFirstLetter(item.name)}</Text>
            <Text style={[styles.itemText]}>{translateArea()}</Text>
            <Text style={[styles.itemText]}>Ultimo registro: {lastUpdated}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem:{
        height:100, 
        width:300, 
        alignSelf:'center', 
        borderWidth:0, 
        padding:20, 
        marginBottom:10
    },
    itemText:{
        color:'black'
    },
    boxShadow:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 1.62,

        elevation: 2,
    }
})

export { ExerciseItem }