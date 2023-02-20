import React from "react"
import { View, Text } from 'react-native'

import { Picker } from "@react-native-picker/picker"

const CustomPicker = ({selectedValue, setSelectedValue, label}:any) =>{

    // make the items values be passed by props so that the component becomes reutilizable

    return(
        <View style={{borderWidth:1, borderColor:'grey', padding:5, borderRadius:10, marginBottom:10}}>
            <Text>{label}</Text>
            <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedValue(itemValue)
                }
                mode="dropdown"
            >
                <Picker.Item label="Upper" value="upper" />
                <Picker.Item label="Middle" value="middle" />
                <Picker.Item label="Lower" value="lower" />
            </Picker>
        </View>
    )   
}

export { CustomPicker }