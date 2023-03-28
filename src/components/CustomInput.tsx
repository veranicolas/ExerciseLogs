import React from "react";

import { TextInput, StyleSheet } from "react-native"
import { Controller } from "react-hook-form"

const CustomInput = ({control, placeholder, name, rules = {}, isPassword, isNumeric}:any) =>{

    return(
        <Controller
          control={control}
          rules={rules}
          render={({ field: { onChange, onBlur, value }, fieldState: {error} }) => (
          <TextInput
            keyboardType={isNumeric ? 'numeric' : 'default'}
            placeholder={placeholder}
            style={error ? styles.inputErrors : styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value.toString()}
            placeholderTextColor={'grey'}
            secureTextEntry={isPassword}
          />
          )}
          name={name}
        />
    )
}

const styles = StyleSheet.create({
    input:{borderColor:'grey', borderWidth:1, borderRadius:8, marginVertical:10, paddingHorizontal:10, color:'black'},
    inputErrors:{borderColor:'red', borderWidth:1, borderRadius:8, marginVertical:10, paddingHorizontal:10, color:'black'},
});

export { CustomInput }