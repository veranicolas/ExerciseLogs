import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { View, StyleSheet, FlatList} from "react-native";
import { getAllExercisesFromUser } from "../../services/exercises";
import { useState } from "react";
import { CustomPicker } from "../../components/CustomPicker";

import { ExerciseItem } from "./ExerciseItem";

const ExerciseList = () =>{

    // TODO Implement some slices for storing the data in the state. Also add some styles to it.

    const { _id } = useSelector((state:any)=> state.user.value)
    const [exercisesData, setExercisesData] = useState([])
    const [filter, setFilter] = useState('')

    useEffect(()=>{
        const getData = async () =>{

            const response = await getAllExercisesFromUser(_id)
            setExercisesData(response)
        }
        
        getData()
    }, [])

    return(
        <View style={styles.mainContainer}>
            <View style={{height:'18%', width:300, marginBottom:20, borderBottomWidth:1, borderBottomColor:'lightgrey'}}>
                <CustomPicker selectedValue={filter} setSelectedValue={setFilter} label="Filtro" style={{borderWidth:0}} />
            </View>
            <View style={{height:'60%'}}>
                <FlatList
                    data={exercisesData}
                    renderItem={({item}:any)=>
                        filter === 'placeholder' || filter === '' || filter === item.area ? <ExerciseItem item={item}/> : null    
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