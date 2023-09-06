import { StyleSheet, FlatList } from 'react-native'
import React from 'react'

const FlatListt = ({itemsList, renderListItem}) => {
  return (
    <FlatList
          data={itemsList}
          renderItem={renderListItem}
          keyExtractor={item => item.id}
        />
  )
}

export default FlatListt

const styles = StyleSheet.create({})