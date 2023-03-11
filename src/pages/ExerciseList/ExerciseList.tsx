import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { View, StyleSheet, Text, FlatList} from "react-native";
import { getAllExercisesFromUser } from "../../services/exercises";
import { useState } from "react";
import { parseDayOfTheYear } from "../../utils/date";
import { CustomPicker } from "../../components/CustomPicker";

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

const ExerciseList = () =>{

    // TODO Implement some slices for storing the data in the state. Also add some styles to it.

    const { id } = useSelector((state:any)=> state.user.value)
    const [exercisesData, setExercisesData] = useState([])
    const [filter, setFilter] = useState('')

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
            <View style={{height:'18%', width:300, marginBottom:20, borderBottomWidth:1, borderBottomColor:'lightgrey'}}>
                <CustomPicker selectedValue={filter} setSelectedValue={setFilter} label="Filter" style={{borderWidth:0}} />
            </View>
            <View style={{height:'60%'}}>
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
    },
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

export { ExerciseList }