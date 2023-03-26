import React from "react";

import { TextInput, StyleSheet } from "react-native"
import { Controller } from "react-hook-form"

const CustomInput = ({control, errors}:any) =>{

    return(
        <Controller
          control={control}
          rules={{
              required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
              placeholder='Email'
              style={errors.email ? styles.inputErrors : styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
          />
          )}
          name="email"
        />
    )
}

const styles = StyleSheet.create({
    input:{borderColor:'grey', borderWidth:1, borderRadius:8, marginVertical:10, paddingHorizontal:10, color:'black'},
    inputErrors:{borderColor:'red', borderWidth:1, borderRadius:8, marginVertical:10, paddingHorizontal:10, color:'black'},
});

export { CustomInput }