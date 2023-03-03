import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { View, StyleSheet, Text, FlatList} from "react-native";
import { getAllExercisesFromUser } from "../../services/exercises";
import { useState } from "react";

const ExerciseList = () =>{

    // TODO Implement some slices for storing the data in the state. Also add some styles to it.

    const { id } = useSelector((state:any)=> state.user.value)
    const [exercisesData, setExercisesData] = useState([])

    // TODO Add the filtering buttons for sorting the data. Most likely will be sorted locally in the client, 
    //      but I will check if affects the performance enough to make the backend do it

    useEffect(()=>{
        const getData = async () =>{

            const response = await getAllExercisesFromUser(id)
            setExercisesData(response)
        }
        
        getData()
    }, [])

    return(
        <View style={styles.mainContainer}>
            <Text>This is the exercise list</Text>
            <FlatList
                data={exercisesData}
                renderItem={({item}:any)=>
                    <View style={{height:100, width:300, alignSelf:'center'}}>
                        <Text>{item.name}</Text>
                    </View>
                }
                keyExtractor={(item, index)=> { return (Math.random()).toString()}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1, 
        backgroundColor:'white', 
        height:'100%', 
        width:'100%', 
        justifyContent:'center', 
        alignItems:'center'
      }
})

export { ExerciseList }