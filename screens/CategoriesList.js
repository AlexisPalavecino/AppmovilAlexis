import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import categories from '../data/dataCategories'

const Categories = ({category}) => {
  return (
    <>
    <View>
      <FlatList data={category}
      keyExtractor={category => category}
      renderItem={(item)=> <CategoryItem/>}/>
    </View>
    </>
  )
}

export default Categories

const styles = StyleSheet.create({



})