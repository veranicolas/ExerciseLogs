import React from "react";

import { View, StyleSheet, Text} from "react-native";
import { parseDayOfTheYear } from "../../utils/date";

const ExerciseItem = ({item}:any) =>{

    const lastUpdated = parseDayOfTheYear(item.updatedAt)

    return(
        <View style={[styles.listItem, styles.boxShadow]}>
            <Text style={[styles.itemText, {fontWeight:'bold'}]}>{item.name}</Text>
            <Text style={[styles.itemText]}>{item.area}</Text>
            <Text style={[styles.itemText]}>{lastUpdated}</Text>
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