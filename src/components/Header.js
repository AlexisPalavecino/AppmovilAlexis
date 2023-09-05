import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#03',
        flex: 1,
        padding: 30,
        paddingTop: 80,
        backgroundColor: '#e2c6ab',
      },

})