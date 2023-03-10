import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { View, StyleSheet, Text, FlatList} from "react-native";
import { getAllExercisesFromUser } from "../../services/exercises";
import { useState } from "react";
import dayjs from 'dayjs'
import dayOfYear from 'dayjs/plugin/dayOfYear'
import { parseDayOfTheYear } from "../../utils/date";

const ExerciseItem = ({item}:any) =>{

    const lastUpdated = parseDayOfTheYear(item.updatedAt)

    return(
        <View style={{height:100, width:300, alignSelf:'center', borderWidth:1, borderColor:'grey', borderRadius:12, padding:40, marginBottom:10}}>
            <Text>{item.name}</Text>
            <Text>{item.area}</Text>
            <Text>{lastUpdated}</Text>
        </View>
    )
}

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
            <View style={{borderWidth:1, borderColor:'grey', height:'10%', width:300, marginBottom:20}}>
                <Text>This will be the sorting filters</Text>
            </View>
            <View style={{height:'80%'}}>
                <FlatList
                    data={exercisesData}
                    renderItem={({item}:any)=>
                        <ExerciseItem item={item}/>
                    }
                    keyExtractor={(item, index)=> { return (Math.random()).toString()}}
                />
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        height:'100%',
        width:'100%',
        backgroundColor:'white', 
        paddingVertical:30, 
        flexDirection:'column',
        justifyContent:'flex-start', 
        alignItems:'center',
      }
})

export { ExerciseList }