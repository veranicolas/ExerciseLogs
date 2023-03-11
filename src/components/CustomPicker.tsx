import React from "react"
import { View, Text, StyleSheet } from 'react-native'

import { Picker } from "@react-native-picker/picker"

const CustomPicker = ({selectedValue, setSelectedValue, label, error, style}:any) =>{

    // make the items values be passed by props so that the component becomes reutilizable

    return(
        <View style={error ? [styles.picker, {borderColor:'red'}] : [styles.picker, style]}>
            <Text>{label}</Text>
            <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedValue(itemValue)
                }
                mode="dropdown"
            >
                <Picker.Item style={{color:'grey'}} label="Type of exercise" value="placeholder" />
                <Picker.Item label="Upper" value="upper" />
                <Picker.Item label="Middle" value="middle" />
                <Picker.Item label="Lower" value="lower" />
            </Picker>
        </View>
    )   
}

const styles = StyleSheet.create({
    picker:{borderWidth:1, borderColor:'grey', padding:5, borderRadius:10, marginVertical:10}
})

export { CustomPicker }