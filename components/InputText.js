import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'

const InputText = ({textValue, onHandleChangeItem}) => {
  return (
    <TextInput
          style={styles.input}
          placeholder="New Item"
          value={textValue}
          onChangeText={onHandleChangeItem}
        />
  )
}

export default InputText

const styles = StyleSheet.create({
  input: {
    width: 200,
    height: 50,
    fontSize: 17,
    paddingLeft: 12,
  },
})