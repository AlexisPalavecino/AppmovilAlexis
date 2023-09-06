import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useState } from 'react'
import Modal from './components/Modal'
import InputText from './components/InputText'
import FlatListt from './components/FlatListt'

export default function App() {
  const [textValue, setTextValue] = useState('')
  const [itemsList, setItemsList] = useState([])
  const [itemSelected, setItemSelected] = useState()
  const [modalVisible, setModalVisible] = useState(false)

  const onHandleChangeItem = text => setTextValue(text)

  const addItem = () => {
    if (textValue === '') {
      return
    }
    setItemsList(prevState => [
      ...prevState,
      { id: Math.random(), value: textValue },
    ])
    setTextValue('')
  }

  const renderListItem = ({ item, index }) => (
    <TouchableOpacity style={styles.itemContainer} 
    onPress={() => onHandleModal(index)}>
      <Text style={styles.textItem}>{item.value}</Text>
    </TouchableOpacity>
  )

  const onHandleDelete = () => {
      let arr = itemsList
      arr.splice(itemSelected, 1)
      setItemsList(arr)
      setModalVisible(false)
  }

  const onHandleModal = index => {
    setModalVisible(true)
    setItemSelected(index)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My App</Text>
      <View style={styles.inputContainer}>
        <InputText textValue={textValue} onHandleChangeItem={onHandleChangeItem}/>

        <Button title="+ ADD"  color= '#25a18e' onPress={addItem} />
      </View>
      <View style={styles.listContainer}>
        <FlatListt itemsList={itemsList} renderListItem={renderListItem}/>
      
      </View>
      <Modal modalVisible={modalVisible} onHandleDelete={onHandleDelete}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    paddingTop: 80,
    backgroundColor: '#94d2bd',
  },
  title: {
    fontSize: 35,
    fontWeight: '500',
    marginBottom: 25,
  },
  inputContainer: {
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#9fffcb',
    justifyContent: 'space-between',
  },

  listContainer: {
    marginTop: 25,
  },
  itemContainer: {
    height: 40,
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: '#25a18e',
    shadowColor: '#fe6855',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  textItem: {
    fontSize: 18,
    paddingLeft: 15,
    color: '#fff',
    fontWeight: '600',
    fontVariant: 'no-common-ligatures',
  },
  
})
